const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Rutas
app.use("/home", (req, res) => res.send("Página de inicio"));
app.use("/tos", (req, res) => res.send("Términos de servicio"));
app.use("/", routes);

const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
