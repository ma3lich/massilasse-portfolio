const Projects: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start p-10 gap-5">
      <div className="w-2/3 space-y-2">
        <span className="text-2xl font-medium">
          Quelques Projets Réalisés :{" "}
        </span>
        <p>
          Grâce aux compétences en développement et en gestion des systèmes et
          réseaux acquises lors de mon DEP et de ma licence, j'ai pu réaliser
          plusieurs projets, tels que...
        </p>
      </div>

      <div className="w-full">
        <div className="w-full flex justify-between items-center p-6 hover:bg-[#68ba7f]/25 transition-all">
          <span className="font-medium">Installation d'un HomeLab</span>
          <span className="text-gray-400">
            Mise en place d'un environnement de virtualisation avec Proxmox pour
            gérer des serveurs virtuels.
          </span>
        </div>
        <hr />
        <div className="w-full flex justify-between items-center p-6 hover:bg-[#68ba7f]/25 transition-all">
          <span className="font-medium">Système de Domotique</span>
          <span className="text-gray-400">
            Développement d'un système de contrôle d'éclairage et de température
            utilisant Arduino.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
