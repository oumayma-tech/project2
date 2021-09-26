const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors");
const dbConfig = require("./server/config/db.config");
const emploiRoutes = require("./server/routes/emploi.routes")
const productRoutes = require("./server/routes/product.routes")
const app = express();

app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./server/models");
const Role = db.role;

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to test authentificate application." });
});

// routes
require("./server/routes/auth.routes")(app);
require("./server/routes/user.routes")(app);
// require("./server/routes/emploi.routes")(app);

app.use('/api/emploi', emploiRoutes)

app.use('/api/product',productRoutes)


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "client"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'client' to roles collection");
      });

      new Role({
        name: "pp"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'Proteur Projet' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });

      new Role({
        name: "rh"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'RH' to roles collection");
      });
    }
  });
}
