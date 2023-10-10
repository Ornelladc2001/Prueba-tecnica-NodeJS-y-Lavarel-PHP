require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');


const app = express();
const port = process.env.APP_PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/contacto', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: 'Sensitive',
      to: email,
      subject: 'Formulario de contacto recibido',
      html: `
        <h1>Hola ${name}</h1>
        <h2>Gracias por contactarnos</h2>
        <p>Pronto nos pondremos en contacto usted.</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('Correo electrónico enviado exitosamente:', info);

    res.status(200).json({ message: 'Formulario guardado y correo electrónico enviado correctamente' });
  } catch (error) {
    console.error('Error al procesar el formulario y enviar el correo electrónico:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
