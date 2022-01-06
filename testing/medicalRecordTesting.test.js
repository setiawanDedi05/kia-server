const request = require('supertest')
const app = require('../app')
const { sequelize } = require('../models')
const { queryInterface } = sequelize

const parent = {
    id: 1,
    name: 'idam'
}
const midWifes = {
    id: 1,
    name: 'Dokter Anya'
}

beforeAll((done) => {
    queryInterface.bulkDelete('Childrens', null, {})
    .then(() => {
        console.log(`masuk 1`);
        return queryInterface.bulkDelete('MedicalRecords', null, {})
    })
    .then(() => {
        console.log(`masuk 2`);
        return queryInterface.bulkDelete('Treatments', null, {})
    })
    // .then(() => {
    //     return queryInterface.bulkDelete('Midwifes', null, {})
    // })
    .then(() => {
        console.log(`masuk 3`);
        return queryInterface.bulkInsert('Childrens', [{
            name: 'dito', 
            nik: '123123123123', 
            pob: 'depok', 
            dob: '2000-05-18', 
            weight: 60, 
            height: 165, 
            headCirc: 30, 
            gender: 'pria', 
            status: 'dewasa', 
            id_parent: parent.id,
            createdAt: new Date(),
            updatedAt: new Date()
        }], {})
    })
    .then(() => {
        console.log(`masuk 4`);
        return queryInterface.bulkInsert('Treatments', [{
            name: 'Vaksin HB 0',
            description: 'Istirahat dirumah',
            month: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }], {})
    })
    // .then(() => {
    //     return queryInterface.bulkInsert('Midwifes', [{
    //         name: 'Dokter Anya',
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //     }], {})
    // })
    .then(() => {
        console.log(`masuk 5`);
        return queryInterface.bulkInsert('MedicalRecords', [{
            id_children: 1, 
            id_treatment: 1, 
            id_midwife: midWifes.id, 
            place: 'RS Haryono', 
            imgUrl: 'https://ibb.co/Gs1qWw9', 
            height: 50.7, 
            weight: 25, 
            headCirc: 20, 
            note: 'Sudah mendapat dosis sesuai umur, sebaiknya banyak makan sehat dan bergizi.', 
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

   describe('GET /medicalRecord', function() {
    //#1 GET ALL CHILDREN
    it(`success fetching all medical record on all children`, function(done) {
        request(app)
            .get('/medicalRecord')
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

describe('GET /medicalRecord/:idChildren', function() {
    //#1 GET ALL CHILDREN
    it(`success fetching all medical record on one children by ID`, function(done) {
        request(app)
            .get('/medicalRecord/1')
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

describe('POST /medicalRecord', function() {
    it(`success add medical records`, function(done) {
        request(app)
            .post('/medicalRecord')
            .set('Content-Type', 'application/json')
            .send({ id_children: 1, id_treatment: 1, id_midwife: midWifes.id, place: 'depok', height: 51, weight: 26, headCirc: 20, note: 'Sudah mendapat dosis sesuai umur, sebaiknya banyak makan sehat dan bergizi.'})
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
