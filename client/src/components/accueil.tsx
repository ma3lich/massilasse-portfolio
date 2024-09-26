import { ArrowDownRight, Linkedin, Mail, Phone } from "lucide-react";

const Accuil: React.FC = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-between items-start p-10">
      <div>
        <img src="/logo.png" alt="" className="w-32"/>
      </div>

      <div className=" h-4/6 space-y-10">
        <div className="w-32 aspect-square rounded-full relative bg-[#68ba7f] p-1">
          <img src="/me.png" alt="" className="rounded-full aspect-square" />
        </div>
        <div className="w-2/3 space-y-4">
          <h1 className="text-5xl font-medium">
            Hey, je m'appelle Massilas,
          </h1>
          <p className="text-lg">
            Spécialiste en télécommunications avec une expertise en électronique
            et informatique, je suis passionné par les technologies connectées
            et l'innovation. Fort d'une expérience pratique dans la domotique et
            les systèmes connectés, je suis motivé par l'innovation et la
            résolution de problèmes techniques. Mon objectif est d'explorer en
            permanence l'évolution des technologies et d'apporter des
            perspectives nouvelles aux secteurs des télécommunications et de
            l'électronique.
          </p>
        </div>
      </div>

      <div className="w-full flex justify-between items-center text-[#68ba7f]">
        <div className="flex justify-start items-center gap-2">
          Plus d'informations <ArrowDownRight />
        </div>

        <div className="flex items-center gap-3">
          <a target="_blank" href="mailto:talaighilmassilas114@gmail.com">
            <Mail size={20} />
          </a>
          <a target="_blank" href="tel:+14387730789">
            <Phone size={20} />
          </a>
          <a target="_blank" href="">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Accuil;
