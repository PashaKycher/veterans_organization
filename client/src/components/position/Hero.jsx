import { assets } from "../../assets/assets";
import { Blackout } from "../helpers/Blackout";
import { HeroText } from "../helpers/HeroText";

const Hero = () => {
    return (
        <section className="relative w-full overflow-hidden">

            <img src={assets.positionHero} alt="Hero" className="w-full h-auto lg:h-screen object-cover" />

            <Blackout />

            <HeroText
                title="Позиція Клубу Захисників України"
                subTitle="Субʼєктна позиція у ключових питаннях війни, держави та відповідальності"
            />
        </section>
    )
}


export default Hero