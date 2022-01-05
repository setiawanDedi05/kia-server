const request = require('supertest')
const app = require('../app')
const { sequelize } = require('../models')
const { queryInterface } = sequelize

const parent = {
    id: 1,
    name: 'idam'
}

beforeAll((done) => {
     queryInterface.bulkDelete('Childrens', null, {})
        .then(() => {
            return queryInterface.bulkInsert('Childrens', [{
                name: 'dito', 
                nik: '123123123123', 
                pob: 'depok', 
                dob: '2000-05-18', 
                weight: '60', 
                height: '165', 
                headCirc: '50', 
                gender: 'pria', 
                status: 'dewasa', 
                id_parent: parent.id,
                createdAt: new Date(),
                updatedAt: new Date()
            }], {})
        })
        .then(() => {
            done()
        })
        .catch(err => {
            throw err
        })
    })


describe('GET /children', function() {
    //#1 GET ALL CHILDREN
    it(`success fetching all children`, function(done) {
        request(app)
            .get('/children')
            .set('Content-Type', 'application/json')
            .then(({body, status}) => {
                expect(status).toBe(200)
                expect(body).toHaveProperty('result')
                console.log(status);
                console.log(body);
                done()
            })
            .catch(err => {
                console.log(err);
            })
    })
})

describe('GET /children/:id_parent', function() {
    //#1 GET ALL CHILDREN
    it(`success fetching all children by id parents`, function(done) {
        request(app)
            .get('/children/'+parent.id)
            .set('Content-Type', 'application/json')
            .then(({body, status}) => {
                expect(status).toBe(200)
                expect(body).toHaveProperty('result')
                done()
            })
            .catch(err => {
                console.log(err);
            })
    })
})

describe('GET /children/details/:id', function() {
    //#1 GET ALL CHILDREN
    it(`success fetching children details by id`, function(done) {
        request(app)
            .get('/children/details/1')
            .set('Content-Type', 'application/json')
            .then(({body, status}) => {
                expect(status).toBe(200)
                expect(body).toHaveProperty('result')
                done()
            })
            .catch(err => {
                console.log(err);
            })
    })
})

describe('GET /children/details/:id', function() {
    it(`error fetching children details by id`, function(done) {
        request(app)
            .get('/children/details/a')
            .set('Content-Type', 'application/json')
            .then(({body, status}) => {
                expect(status).toBe(500)
                expect(body).toHaveProperty('error')
                done()
            })
            .catch(err => {
                console.log(err);
            })
    })
})

describe('POST /children', function() {
    it(`success add children`, function(done) {
        request(app)
            .post('/children')
            .set('Content-Type', 'application/json')
            .send({ name:'fauzan', nik:'213123123', pob:'depok', dob:'2000-06-09', weight:'50', height:'178', headCirc:'30', gender:'pria', status:'dewasa', id_parent:1 })
            .then(({body, status}) => {
                expect(status).toBe(201)
                expect(body).toHaveProperty('result')
                console.log(status);
                console.log(body);
                done()
            })
            .catch(err => {
                console.log(err);
            })
    })
})

