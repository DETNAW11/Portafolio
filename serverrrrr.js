const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Configura el transporte de correo electrónico
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'alejito.prieto05@gmail.com', // Coloca tu dirección de correo electrónico aquí
    pass: 'Alejandro#0', // Coloca tu contraseña aquí
  },
});

// Ruta para manejar las solicitudes POST del formulario
app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Configura el contenido del correo electrónico
  const mailOptions = {
    from: 'tucorreo@gmail.com', // Dirección de correo electrónico del remitente
    to: 'tuemail@gmail.com', // Dirección de correo electrónico de destino
    subject: 'Mensaje de contacto desde tu sitio web',
    text: `Nombre: ${name}\nCorreo electrónico: ${email}\nMensaje: ${message}`,
  };

  // Envía el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo electrónico:', error);
      res.status(500).json({ message: 'Error al enviar el correo electrónico' });
    } else {
      console.log('Correo electrónico enviado:', info.response);
      res.status(200).json({ message: 'Correo electrónico enviado con éxito' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
