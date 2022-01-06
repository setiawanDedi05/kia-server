const request = require('supertest')
const app = require('../app')
const { sequelize } = require('../models')
const { queryInterface } = sequelize

const parent = {
    id: 1,
    name: 'idam'
}
const midwife = {
    id: 1,
    name: 'vertigo'
}

beforeAll((done) => {
    queryInterface.bulkDelete('Childrens', null, {})
    .then(() => {
        return queryInterface.bulkDelete('Treatments', null, {})
    })
    .then(() => {
       return queryInterface.bulkDelete('MedicalRecords', null, {})
    })
    .then(() => {
        return queryInterface.bulkInsert('Childrens', [{
            name: 'dito', 
            nik: '123123123123', 
            pob: 'depok', 
            dob: '2000-05-18', 
            weight: 50, 
            height: 90, 
            headCirc: 20, 
            gender: 'pria', 
            status: 'dewasa', 
            id_parent: parent.id,
            createdAt: new Date(),
            updatedAt: new Date()
        }], {})
    })
    .then(() => {
        return queryInterface.bulkInsert('Treatments', 
        [{
            name: "HB-0",
            description: "Vaksin HB 0 diberikan kepada bayi yang baru lahir, sebab dikhawatirkan bayi yang baru lahir tertular penyakit hepatitis B yang berasal dari ibunya pada saat proses persalinan. Penyakit hepatitis B sangat berbahaya, sebab penyakit ini dapat menyerang organ hati. sehingga ketika bayi mendapatkan Vaksin HB 0 maka besar kemungkinan bayi tidak akan tertular penyakit hepatitis B",
            month: 0,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: "BCG dan Polio 1",
            description: "Imunisasi polio diberikan untuk mencegah penyakit polio. - Vaksin BCG diberikan untuk melindungi tubuh dari penyakit tuberkulosis (TB)",
            month: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: "DPT-HB-Hib 1 dan Polio 2",
            description: "Vaksin DPT merupakan vaksin gabungan untuk mencegah penyakit difteri, batuk rejan (pertusis), dan tetanus.-Vaksin Hib bertujuan untuk mencegah infeksi bakteri Haemophilus influenza tipe B. Infeksi bakteri ini dapat memicu penyakit, seperti radang selaput otak (meningitis), radang paru-paru (pneumonia), radang sendi (septic arthritis), dan radang pada lapisan pelindung jantung (perikarditis).-Imunisasi polio diberikan untuk mencegah penyakit polio",
            month: 2,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ], {})
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
                done()
            })
            .catch(err => {
                console.log(err);
            })
    })
})
describe('GET /treatment', function() {
    it(`error when fetching all treatments`, function(done) {
        request(app)
            .get('/treatment/12312')
            .set('Content-Type', 'application/json')
            .then(({body, status}) => {

                expect(status).toBe(404)
                expect(body).toEqual({})
                done()
            })
            .catch(err => {
                console.log(err);
            })
    })
})

// describe('GET /treatment/:id_children', function() {
//     it(`success fetching children with treatment that they yet to get`, function(done) {
//         request(app)
//             .get('/treatment/1')
//             .set('Content-Type', 'application/json')
//             .then(({body, status}) => {
//                 expect(status).toBe(200)
//                 expect(body).toHaveProperty('response')
//                 done()
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     })
// })


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
            .send('')
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