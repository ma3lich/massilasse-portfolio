const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configurez le transporteur nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "talaighilmassilas@gmail.com", // Remplacez par votre adresse Gmail
    pass: "wcij cyef lxxh hkbp", // Remplacez par votre mot de passe ou un mot de passe d'application
  },
});

// Servir les fichiers statiques de Vite
app.use(express.static(path.join(__dirname, "../client/dist")));

// Point de terminaison pour traiter le formulaire de contact
app.post("/api/contact", (req, res) => {
  const { nom, prenom, email, message } = req.body;

  // Validation simple
  if (!nom || !prenom || !email || !message) {
    return res.status(400).json({ error: "Tous les champs sont requis." });
  }

  // Vérification de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Adresse e-mail invalide." });
  }

  // Logique pour envoyer le message
  const mailOptions = {
    from: `Mon protfolio ${email}`, // Remplacez par votre adresse Gmail
    to: "talaighilmassilas@gmail.com", // Remplacez par l'adresse e-mail de destination
    sender: email,
    replyTo: email,
    subject: `Nouveau message de ${nom} ${prenom}`,
    text: `Nom: ${nom}\nPrénom: ${prenom}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: "Erreur lors de l'envoi de l'e-mail." });
    }

    console.log(`E-mail envoyé: ${info.response}`);
    res
      .status(200)
      .json({ message: "Votre message a été envoyé avec succès !" });
  });
});

// Servir le fichier HTML principal
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
