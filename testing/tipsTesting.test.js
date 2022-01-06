const request = require('supertest')
const app = require('../app')
const { sequelize } = require('../models')
const { queryInterface } = sequelize

beforeAll((done) => {
    queryInterface.bulkDelete('Tips', null, {})
    .then(() => {
        return queryInterface.bulkInsert('Tips', 
        [{
            title: "Hamil 0 minggu",
            description: "Perhitungan usia kehamilan dimulai dari hari pertama menstruasi terakhir (HPHT)–sebelum akhirnya menstruasi bisa dikatakan terlambat. Oleh karena itu, bisa dikatakan bahwa pada minggu pertama dan kedua, sebenarnya Anda belum mengalami kehamilan. Lalu apa yang terjadi pada minggu ini?\nMelansir dari WebMD, setelah mengalami proses pembuahan, yaitu bertemunya telur dengan sperma, maka akan terbentuk jaringan yang terdiri dari 100 sel yang nantinya akan menjadi cikal bakal janin. Setelah membelah dan memperbanyak sel, calon janin atau embrio tersebut akan menempel pada rahim, yaitu tempat tumbuh kembangnya selama kehamilan terjadi. Di sini perkembangan janin di dalam kandungan dimulai.",
            nutrition: "Asam folat adalah nutrisi penting dalam pembentukan sel otak bayi, ibu yang mengonsumsi asam folat empat minggu sebelum kehamilan dan delapan minggu setelah kehamilan, bisa meminimalkan risiko autis pada bayi sebanyak 40 persen, asam folat bisa mencegah keguguran, mencegah anemia, hingga menurunkan risiko preeklamsia, contohnya sayuran hijau (bayam, brokoli, kubis), buah-buahan (alpukat, pepaya, jeruk), kacang-kacangan, hati sapi, hingga telur. Protein punya peranan penting dalam membantu proses pembentukan jaringan tubuh pada ibu dan bayi selama masa kehamilan. Tidak hanya itu, protein bisa membantu ibu untuk meningkatkan daya tahan tubuh, sehingga bumil tidak mudah mengalami sakit, makanan berprotein contohnya daging tanpa lemak, ikan, telur, dan unggas. Zat besi bertujuan untuk mencegah terjadinya anemia, juga bermanfaat untuk membawa darah yang kaya akan oksigen pada bayi di dalam kandungan, kekurangan zat besi juga bisa berdampak negatif pada IQ anak kelak, contoh makanan ber-Zat besi contohnya daging sapi dan unggas, telur, makanan laut, tahu, biji-bijian, kacang-kacangan, bayam, hingga telur. Serat merupakan nutrisi atau makanan untuk trimester pertama yang tak kalah pentingnya. Serat bisa membantu ibu untuk mengontrol kenaikan berat badan dan mencegah preeklamsia contohnya buah segar, kacang-kacangan, biji-bijian, hingga, sayur-sayuran yang dimasak. Susu atau produk olahannya kaya beragam nutrisi seperti protein, vitamin D, iodium asam folat, hingga kalsium. Kalsium ini baik untuk ibu dan pertumbuhan tulang janin, misalnya keju atau yoghurt. Lemon dan air kelapa bisa menjadi pilihan bagi bumil yang sering mengalami mual , selain itu air kelapa membantu memenuhi kebutuhan cairan tubuh dan mencegah dehidrasi. Mengonsumsi karbohidrat selama kehamilan juga baik untuk memenuhi kebutuhan energi janin yang sedang berkembang contohnya: pisang, sayur seperti brokoli dan bayam, serta kacang-kacangan dan oatmeal.",
            stimulation: "Pada trimester pertama Anda dapat memberikan stimulasi gizi dengan menjalani pola makan sehat. Selain itu, gerakan refleks pada janin juga mulai berkembang, sehingga Anda disarankan untuk mulai rutin menyentuh perut. Hal ini juga akan membantu mengembangkan ikatan emosional antara ibu dan janin.",
            tips: "Minum vitamin untuk ibu hamil, Jauhi asap rokok, Konsumsi makanan bergizi seimbang, Banyak minum air putih, Tidur lebih awal, Jauhi aktivitas yang membahayakan kehamilan",
            phase: "mgu0",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            title: "Hamil 1 minngu",
            description: "Perhitungan usia kehamilan dimulai dari hari pertama menstruasi terakhir (HPHT)–sebelum akhirnya menstruasi bisa dikatakan terlambat. Oleh karena itu, bisa dikatakan bahwa pada minggu pertama dan kedua, sebenarnya Anda belum mengalami kehamilan. Lalu apa yang terjadi pada minggu ini?\nMelansir dari WebMD, setelah mengalami proses pembuahan, yaitu bertemunya telur dengan sperma, maka akan terbentuk jaringan yang terdiri dari 100 sel yang nantinya akan menjadi cikal bakal janin. Setelah membelah dan memperbanyak sel, calon janin atau embrio tersebut akan menempel pada rahim, yaitu tempat tumbuh kembangnya selama kehamilan terjadi. Di sini perkembangan janin di dalam kandungan dimulai.",
            nutrition: "Asam folat adalah nutrisi penting dalam pembentukan sel otak bayi, ibu yang mengonsumsi asam folat empat minggu sebelum kehamilan dan delapan minggu setelah kehamilan, bisa meminimalkan risiko autis pada bayi sebanyak 40 persen, asam folat bisa mencegah keguguran, mencegah anemia, hingga menurunkan risiko preeklamsia, contohnya sayuran hijau (bayam, brokoli, kubis), buah-buahan (alpukat, pepaya, jeruk), kacang-kacangan, hati sapi, hingga telur. Protein punya peranan penting dalam membantu proses pembentukan jaringan tubuh pada ibu dan bayi selama masa kehamilan. Tidak hanya itu, protein bisa membantu ibu untuk meningkatkan daya tahan tubuh, sehingga bumil tidak mudah mengalami sakit, makanan berprotein contohnya daging tanpa lemak, ikan, telur, dan unggas. Zat besi bertujuan untuk mencegah terjadinya anemia, juga bermanfaat untuk membawa darah yang kaya akan oksigen pada bayi di dalam kandungan, kekurangan zat besi juga bisa berdampak negatif pada IQ anak kelak, contoh makanan ber-Zat besi contohnya daging sapi dan unggas, telur, makanan laut, tahu, biji-bijian, kacang-kacangan, bayam, hingga telur. Serat merupakan nutrisi atau makanan untuk trimester pertama yang tak kalah pentingnya. Serat bisa membantu ibu untuk mengontrol kenaikan berat badan dan mencegah preeklamsia contohnya buah segar, kacang-kacangan, biji-bijian, hingga, sayur-sayuran yang dimasak. Susu atau produk olahannya kaya beragam nutrisi seperti protein, vitamin D, iodium asam folat, hingga kalsium. Kalsium ini baik untuk ibu dan pertumbuhan tulang janin, misalnya keju atau yoghurt. Lemon dan air kelapa bisa menjadi pilihan bagi bumil yang sering mengalami mual , selain itu air kelapa membantu memenuhi kebutuhan cairan tubuh dan mencegah dehidrasi. Mengonsumsi karbohidrat selama kehamilan juga baik untuk memenuhi kebutuhan energi janin yang sedang berkembang contohnya: pisang, sayur seperti brokoli dan bayam, serta kacang-kacangan dan oatmeal.",
            stimulation: "Pada trimester pertama Anda dapat memberikan stimulasi gizi dengan menjalani pola makan sehat. Selain itu, gerakan refleks pada janin juga mulai berkembang, sehingga Anda disarankan untuk mulai rutin menyentuh perut. Hal ini juga akan membantu mengembangkan ikatan emosional antara ibu dan janin.",
            tips: "Minum vitamin untuk ibu hamil, Jauhi asap rokok, Konsumsi makanan bergizi seimbang, Banyak minum air putih, Tidur lebih awal, Jauhi aktivitas yang membahayakan kehamilan",
            phase: "mgu1",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            title: "Hamil 2 minggu",
            description: "Memasuki minggu kedua, perkembangan sel di dalam yang dimiliki embrio sebanyak kurang lebih 150 sel yang membentuk tiga lapisan, yaitu endoderm, mesoderm, dan ektoderm yang nantinya akan menjadi janin. Lapisan-lapisan yang dibentuk oleh sel inilah yang akan menjadi berbagai organ serta bagian tubuh dari bayi, seperti otot, tulang, jantung, sistem pencernaan, sistem reproduksi, dan sistem saraf.",
            nutrition: "Asam folat adalah nutrisi penting dalam pembentukan sel otak bayi, ibu yang mengonsumsi asam folat empat minggu sebelum kehamilan dan delapan minggu setelah kehamilan, bisa meminimalkan risiko autis pada bayi sebanyak 40 persen, asam folat bisa mencegah keguguran, mencegah anemia, hingga menurunkan risiko preeklamsia, contohnya sayuran hijau (bayam, brokoli, kubis), buah-buahan (alpukat, pepaya, jeruk), kacang-kacangan, hati sapi, hingga telur. Protein punya peranan penting dalam membantu proses pembentukan jaringan tubuh pada ibu dan bayi selama masa kehamilan. Tidak hanya itu, protein bisa membantu ibu untuk meningkatkan daya tahan tubuh, sehingga bumil tidak mudah mengalami sakit, makanan berprotein contohnya daging tanpa lemak, ikan, telur, dan unggas. Zat besi bertujuan untuk mencegah terjadinya anemia, juga bermanfaat untuk membawa darah yang kaya akan oksigen pada bayi di dalam kandungan, kekurangan zat besi juga bisa berdampak negatif pada IQ anak kelak, contoh makanan ber-Zat besi contohnya daging sapi dan unggas, telur, makanan laut, tahu, biji-bijian, kacang-kacangan, bayam, hingga telur. Serat merupakan nutrisi atau makanan untuk trimester pertama yang tak kalah pentingnya. Serat bisa membantu ibu untuk mengontrol kenaikan berat badan dan mencegah preeklamsia contohnya buah segar, kacang-kacangan, biji-bijian, hingga, sayur-sayuran yang dimasak. Susu atau produk olahannya kaya beragam nutrisi seperti protein, vitamin D, iodium asam folat, hingga kalsium. Kalsium ini baik untuk ibu dan pertumbuhan tulang janin, misalnya keju atau yoghurt. Lemon dan air kelapa bisa menjadi pilihan bagi bumil yang sering mengalami mual , selain itu air kelapa membantu memenuhi kebutuhan cairan tubuh dan mencegah dehidrasi. Mengonsumsi karbohidrat selama kehamilan juga baik untuk memenuhi kebutuhan energi janin yang sedang berkembang contohnya: pisang, sayur seperti brokoli dan bayam, serta kacang-kacangan dan oatmeal.",
            stimulation: "Pada trimester pertama Anda dapat memberikan stimulasi gizi dengan menjalani pola makan sehat. Selain itu, gerakan refleks pada janin juga mulai berkembang, sehingga Anda disarankan untuk mulai rutin menyentuh perut. Hal ini juga akan membantu mengembangkan ikatan emosional antara ibu dan janin.",
            tips: "Minum vitamin untuk ibu hamil, Jauhi asap rokok, Konsumsi makanan bergizi seimbang, Banyak minum air putih, Tidur lebih awal, Jauhi aktivitas yang membahayakan kehamilan",
            phase: "mgu2",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            title: "Hamil 3 minngu",
            description: "Di masa perkembangan janin dalam kandungan, embrio berhasil menempel dengan sempurna pada rahim. Pada masa ini, embrio masih melakukan pembelahan serta perbanyakan sel, oleh karena itu belum berbentuk seperti embrio atau bayi. Lapisan terluar dari embrio akan membentuk plasenta atau ari-ari.\nDi tahap ini juga, berbagai organ tubuh mulai dibentuk, seperti otak, tulang belakang, kelenjar tiroid, organ jantung, dan pembuluh-pembuluh darah. Ukuran embrio pada minggu ketiga masih sangat kecil, hanya sebesar 1,5 mm.\n",
            nutrition: "Asam folat adalah nutrisi penting dalam pembentukan sel otak bayi, ibu yang mengonsumsi asam folat empat minggu sebelum kehamilan dan delapan minggu setelah kehamilan, bisa meminimalkan risiko autis pada bayi sebanyak 40 persen, asam folat bisa mencegah keguguran, mencegah anemia, hingga menurunkan risiko preeklamsia, contohnya sayuran hijau (bayam, brokoli, kubis), buah-buahan (alpukat, pepaya, jeruk), kacang-kacangan, hati sapi, hingga telur. Protein punya peranan penting dalam membantu proses pembentukan jaringan tubuh pada ibu dan bayi selama masa kehamilan. Tidak hanya itu, protein bisa membantu ibu untuk meningkatkan daya tahan tubuh, sehingga bumil tidak mudah mengalami sakit, makanan berprotein contohnya daging tanpa lemak, ikan, telur, dan unggas. Zat besi bertujuan untuk mencegah terjadinya anemia, juga bermanfaat untuk membawa darah yang kaya akan oksigen pada bayi di dalam kandungan, kekurangan zat besi juga bisa berdampak negatif pada IQ anak kelak, contoh makanan ber-Zat besi contohnya daging sapi dan unggas, telur, makanan laut, tahu, biji-bijian, kacang-kacangan, bayam, hingga telur. Serat merupakan nutrisi atau makanan untuk trimester pertama yang tak kalah pentingnya. Serat bisa membantu ibu untuk mengontrol kenaikan berat badan dan mencegah preeklamsia contohnya buah segar, kacang-kacangan, biji-bijian, hingga, sayur-sayuran yang dimasak. Susu atau produk olahannya kaya beragam nutrisi seperti protein, vitamin D, iodium asam folat, hingga kalsium. Kalsium ini baik untuk ibu dan pertumbuhan tulang janin, misalnya keju atau yoghurt. Lemon dan air kelapa bisa menjadi pilihan bagi bumil yang sering mengalami mual , selain itu air kelapa membantu memenuhi kebutuhan cairan tubuh dan mencegah dehidrasi. Mengonsumsi karbohidrat selama kehamilan juga baik untuk memenuhi kebutuhan energi janin yang sedang berkembang contohnya: pisang, sayur seperti brokoli dan bayam, serta kacang-kacangan dan oatmeal.",
            stimulation: "Pada trimester pertama Anda dapat memberikan stimulasi gizi dengan menjalani pola makan sehat. Selain itu, gerakan refleks pada janin juga mulai berkembang, sehingga Anda disarankan untuk mulai rutin menyentuh perut. Hal ini juga akan membantu mengembangkan ikatan emosional antara ibu dan janin.",
            tips: "Minum vitamin untuk ibu hamil, Jauhi asap rokok, Konsumsi makanan bergizi seimbang, Banyak minum air putih, Tidur lebih awal, Jauhi aktivitas yang membahayakan kehamilan",
            phase: "mgu3",
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

describe('GET /tips', function() {
    it(`success fetching all tips`, function(done) {
        request(app)
            .get('/tips')
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

describe('GET /tips/:age', function() {
    it(`success fetching tips by phase age`, function(done) {
        request(app)
            .get('/tips/mgu3')
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


describe('POST /tips', function() {
    it(`success add medical records`, function(done) {
        request(app)
            .post('/tips')
            .set('Content-Type', 'application/json')
            .send({
            title: "Hamil 4 minggu", 
            description: "Jantung sudah terbentuk dan mulai berfungsi dan pembuluh-pembuluh darah sudah memiliki aliran darahnya sendiri. Selain itu, sudah mulai membentuk tangan dan kaki. Pada minggu ke-4 ukuran embrionya sebesar 5 mm, sesuai dengan perkembangan janin di dalam kandungan.",
            nutrition: "Asam folat adalah nutrisi penting dalam pembentukan sel otak bayi, ibu yang mengonsumsi asam folat empat minggu sebelum kehamilan dan delapan minggu setelah kehamilan, bisa meminimalkan risiko autis pada bayi sebanyak 40 persen, asam folat bisa mencegah keguguran, mencegah anemia, hingga menurunkan risiko preeklamsia, contohnya sayuran hijau (bayam, brokoli, kubis), buah-buahan (alpukat, pepaya, jeruk), kacang-kacangan, hati sapi, hingga telur. Protein punya peranan penting dalam membantu proses pembentukan jaringan tubuh pada ibu dan bayi selama masa kehamilan. Tidak hanya itu, protein bisa membantu ibu untuk meningkatkan daya tahan tubuh, sehingga bumil tidak mudah mengalami sakit, makanan berprotein contohnya daging tanpa lemak, ikan, telur, dan unggas. Zat besi bertujuan untuk mencegah terjadinya anemia, juga bermanfaat untuk membawa darah yang kaya akan oksigen pada bayi di dalam kandungan, kekurangan zat besi juga bisa berdampak negatif pada IQ anak kelak, contoh makanan ber-Zat besi contohnya daging sapi dan unggas, telur, makanan laut, tahu, biji-bijian, kacang-kacangan, bayam, hingga telur. Serat merupakan nutrisi atau makanan untuk trimester pertama yang tak kalah pentingnya. Serat bisa membantu ibu untuk mengontrol kenaikan berat badan dan mencegah preeklamsia contohnya buah segar, kacang-kacangan, biji-bijian, hingga, sayur-sayuran yang dimasak. Susu atau produk olahannya kaya beragam nutrisi seperti protein, vitamin D, iodium asam folat, hingga kalsium. Kalsium ini baik untuk ibu dan pertumbuhan tulang janin, misalnya keju atau yoghurt. Lemon dan air kelapa bisa menjadi pilihan bagi bumil yang sering mengalami mual , selain itu air kelapa membantu memenuhi kebutuhan cairan tubuh dan mencegah dehidrasi. Mengonsumsi karbohidrat selama kehamilan juga baik untuk memenuhi kebutuhan energi janin yang sedang berkembang contohnya: pisang, sayur seperti brokoli dan bayam, serta kacang-kacangan dan oatmeal.", 
            stimulation:"Pada trimester pertama Anda dapat memberikan stimulasi gizi dengan menjalani pola makan sehat. Selain itu, gerakan refleks pada janin juga mulai berkembang, sehingga Anda disarankan untuk mulai rutin menyentuh perut. Hal ini juga akan membantu mengembangkan ikatan emosional antara ibu dan janin.", 
            tips: "Minum vitamin untuk ibu hamil, Jauhi asap rokok, Konsumsi makanan bergizi seimbang, Banyak minum air putih, Tidur lebih awal, Jauhi aktivitas yang membahayakan kehamilan", 
            phase: "mgu4"})
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