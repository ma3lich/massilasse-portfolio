import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Linkedin, Mail, Phone } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-between items-center p-10 gap-10">
      <div className="w-1/2 space-y-4">
        <span className="text-2xl font-medium">A propos de moi : </span>

        <div className="flex flex-col">
          <p className="mb-5">
            Je suis Massilas Tala Ighil, diplômé en télécommunications d'Algérie
            🇩🇿, passionné par la technologie et l'innovation dans les domaines
            de la gestion des systèmes et du développement. J'adore relever des
            défis et collaborer sur des projets qui repoussent les limites du
            possible.
          </p>
          <div className="space-y-2">
            <span className="font-medium"> Un Peu de Contexte</span>

            <p>
              Après avoir obtenu ma licence en télécommunications et un DEP en
              électronique et informatique au Canada, j'ai acquis une expérience
              pratique précieuse grâce à des stages axés sur les systèmes
              domotiques et les technologies connectées. Ce parcours a nourri
              mon désir d'explorer l'évolution du paysage technologique et de
              développer des solutions innovantes.
            </p>
            <p>
              Avec une solide formation en langages de programmation tels que
              HTML, CSS et Python, ainsi qu'une maîtrise des outils de gestion
              des réseaux, j'ai réussi à réaliser des projets tels que la mise
              en place de home labs et l'automatisation de systèmes avec
              Arduino.
            </p>
            <p>
              Je suis toujours avide d'apprendre et de grandir dans ce domaine
              dynamique.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end gap-5 w-1/2 h-auto">
        <Swiper
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <img src="/swiper1.png" alt="" className=" rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/swiper2.png" alt="" className=" rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/swiper3.png" alt="" className=" rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/swiper4.png" alt="" className=" rounded-2xl" />
          </SwiperSlide>
        </Swiper>
        <div className="flex items-center gap-3 text-[#68ba7f] pr-5">
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

export default About;
