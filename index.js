const server = require("./api/server.js");
const db = require("./data/dbConfig");
const knex = require("knex")

const PORT = process.env.PORT || 5000;

server.get("/cars", (req, res) => {
   db.select('*')
        .from('cars')
        .then((cars) => {
            console.log(res)
            res.status(200).json(cars)
        })
        .catch((err) => {
            console.log(err) 
            res.status(500).json(err)
        })
})

server.post("/cars", (req, res) => {
    const {make, model, mileage, vin} = req.body;

    console.log(req.body)
    if (make && model && mileage && vin) {
        db("cars")
            .insert(req.body)
            .then((response) => {
                console.log(response)
                res.status(200).json(response)
            })
            .catch((err) => {
                console.log(err)
                res.status(500).json(err)
            })
    }

})

server.listen(PORT, () => {
    console.log(`\n== API running on port ${PORT} ==\n`);
  });