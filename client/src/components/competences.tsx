const Competences: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start p-10 gap-5">
      <div className="w-2/3 space-y-2">
        <span className="text-2xl font-medium">Mes compétences</span>
        <p>
          Après avoir obtenu ma licence en télécommunications et un DEP en
          électronique et informatique, j'ai acquis des compétences solides en
          gestion des systèmes, des réseaux et en développement...
        </p>
      </div>

      <div className="w-full">
        <div className="w-full flex justify-between items-center p-6 hover:bg-[#68ba7f]/25 transition-all">
          <span className="font-medium">Langages informatiques :</span>
          <span className="text-gray-400">
            HTML - CSS - MatLab - Pyhton - Arduino - Lutron - G code - Lynx
          </span>
        </div>
        <hr />
        <div className="w-full flex justify-between items-center p-6 hover:bg-[#68ba7f]/25 transition-all">
          <span className="font-medium">Systèmes / Réseaux :</span>
          <span className="text-gray-400">
            Cisco Packet Tracer - GNS3 - Hyperviseurs - VMware - Proxmox
          </span>
        </div>
      </div>
    </div>
  );
};

export default Competences;
