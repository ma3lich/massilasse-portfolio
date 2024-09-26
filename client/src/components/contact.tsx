import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [colorError, setColorError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du message");
      }

      const data = await response.json();
      setResponseMessage(data.message);
      setColorError("text-[#68ba7f]");
      // Réinitialiser le formulaire
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Erreur:", error);
      setResponseMessage("Erreur lors de l'envoi du message");
      setColorError("text-red-600");
    }
  };

  return (
    <div className="w-full flex justify-between items-center p-10 gap-10">
      <div className="w-1/2 space-y-3">
        <span className="text-2xl font-medium">Me contacter :</span>
        <p>
          Vous avez un projet en tête ou des questions sur les systèmes
          connectés et le développement ? N'hésitez pas à me contacter ! Je suis
          toujours prêt à échanger des idées et à explorer comment je peux vous
          aider à transformer vos concepts en réalité.
        </p>

        <ul className="p-10 space-y-5">
          <li className="flex items-center gap-3">
            <Mail color="#68ba7f" /> talaighilmassilas114@gmail.com
          </li>
          <li className="flex items-center gap-3">
            <Phone color="#68ba7f" /> +1 438 773 0789
          </li>
        </ul>
      </div>
      <div className="w-1/2">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="w-full flex items-center justify-between gap-5">
            <Input
              label="Nom"
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
            />
            <Input
              label="Prénom"
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
            />
          </div>
          <Input
            label="E-mail"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="w-full flex flex-col">
            <span className="text-md p-1">Message :</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent rounded-xl border border-[#68ba7f] focus:outline-[#68ba7f] transition-all px-3 py-2"
              rows={10}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#68ba7f] text-white font-medium rounded-xl py-2 hover:bg-[#5ba370] transition-all"
          >
            Envoyer
          </button>

          <p className={`mt-3 ${colorError}`}>{responseMessage}</p>
        </form>
      </div>
    </div>
  );
};

const Input: React.FC<{
  label: string;
  type: "text" | "email";
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ label, type, name, value, onChange }) => {
  return (
    <div className="w-full flex flex-col">
      <span className="text-md p-1">{label} :</span>
      <input
        type={type}
        name={name}
        id={label}
        value={value}
        onChange={onChange}
        required
        className="w-full bg-transparent rounded-xl border border-[#68ba7f] outline-none focus:border-2 transition-all px-2 py-1"
      />
    </div>
  );
};

export default Contact;
