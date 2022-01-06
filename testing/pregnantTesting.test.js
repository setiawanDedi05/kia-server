const request = require('supertest')
const app = require('../app')
const { sequelize } = require('../models')
const { queryInterface } = sequelize

const parent = {
    id: 1,
    name: 'idam'
}

const newparent = {
    id: 2,
    name: 'Valak'
}

const midWifes = {
    id: 1,
    name: 'Dokter Anya'
}

beforeAll((done) => {
    queryInterface.bulkDelete('Pregnants', null, {})
    .then(() => {
        return queryInterface.bulkInsert('Pregnants', [{
            id_parent: parent.id, 
            status: '3 Bulan', 
            lastMens: '4 Bulan lalu',
            createdAt: new Date(),
            updatedAt: new Date()
        }], {})
    })
    .then(() => {
        console.log(`masuk selesai`);
        done()
    })
    .catch(err => {
        throw err
    })
})

describe('GET /pregnant', function() {
//#1 GET ALL CHILDREN
    it(`success fetching all pregnant mother`, function(done) {
        request(app)
            .get('/pregnant')
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

describe('GET /pregnant/:idParent', function() {
    //#1 GET ALL CHILDREN
    it(`success fetching pregnant mother by ID`, function(done) {
        request(app)
            .get('/pregnant/1')
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

describe('POST /pregnant', function() {
    it(`success add medical records`, function(done) {
        request(app)
            .post('/pregnant')
            .set('Content-Type', 'application/json')
            .send({id_parent: newparent.id, status: '3 Bulan', lastMens: '4 Bulan'})
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
