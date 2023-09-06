const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

app.get("/", async () => {
    res.send("bye")
});

app.post("/gdp", async (req, res) => {

    try {
        const { country, gdp } = req.body
        const data = await pool.query(
            "INSERT INTO country(id,name,gdp) VALUES(nextval('country_id_seq'),$1,$2) RETURNING *",
            [country, gdp]
        );
        res.json(data.rows[0])

        console.log("work")

    } catch (error) {
        console.log(error)
    }

});


{
    const PORT = process.env.PORT || 5000
    app.listen(PORT, () => {
        console.log("we lit")
    })
}