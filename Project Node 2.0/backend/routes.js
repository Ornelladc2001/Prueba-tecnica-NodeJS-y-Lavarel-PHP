const express = require("express");
const router = express.Router();
const db = require("./db");
const transporter = require("./email");

router.post("/contacto", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Guardar en la base de datos
    const query = "INSERT INTO contactos (name, address, subject, message) VALUES (?, ?, ?, ?)";
    await db.query(query, [name, email, subject, message]);

    // Enviar correo
    const mailOptions = {
      from: "Sensitive",
      to: email,
      subject: "Formulario de contacto recibido",
      html: `
        <h1>Hola ${name}</h1>
        <br>
        <h2>Gracias por contactarnos</h2>
        <br>
        <p>Pronto nos pondremos en contacto contigo</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Formulario enviado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al procesar la solicitud" });
  }
});

module.exports = router;
