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
        return queryInterface.bulkDelete('Treatments', null, {})
    })
    .then(() => {
        return queryInterface.bulkInsert('Treatments', 
        [{
            name: "HB-0",
            description: "Vaksin HB 0 diberikan kepada bayi yang baru lahir, sebab dikhawatirkan bayi yang baru lahir tertular penyakit hepatitis B yang berasal dari ibunya pada saat proses persalinan. Penyakit hepatitis B sangat berbahaya, sebab penyakit ini dapat menyerang organ hati. sehingga ketika bayi mendapatkan Vaksin HB 0 maka besar kemungkinan bayi tidak akan tertular penyakit hepatitis B",
            month: 0,
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

describe('GET /treatment', function() {
    it(`success fetching all treatments`, function(done) {
        request(app)
            .get('/treatment')
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

describe('GET /treatment/:id_children', function() {
    it(`success fetching children with treatment that they yet to get`, function(done) {
        request(app)
            .get('/treatment/1')
            .set('Content-Type', 'application/json')
            .then(({body, status}) => {
                expect(status).toBe(200)
                expect(body).toHaveProperty('response')
                console.log(status);
                console.log(body);
                done()
            })
            .catch(err => {
                console.log(err);
            })
    })
})

describe('POST /treatment', function() {
    it(`success add medical records`, function(done) {
        request(app)
            .post('/treatment')
            .set('Content-Type', 'application/json')
            .send({
                name: "BCG dan Polio 1",
                description: "Imunisasi polio diberikan untuk mencegah penyakit polio. - Vaksin BCG diberikan untuk melindungi tubuh dari penyakit tuberkulosis (TB)",
                month: 1,})
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