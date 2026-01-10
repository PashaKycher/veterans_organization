import { assets } from "../../assets/assets";
import { Blackout } from "../helpers/Blackout";
import { HeroText } from "../helpers/HeroText";

const Hero = () => {
    return (
        <section className="relative w-full overflow-hidden">

            <img src={assets.homeHero} alt="Hero" className="aspect-video lg:w-full lg:h-screen object-cover" />

            <Blackout />

            <HeroText
                title="Клуб Захисників України"
                subTitle="Інтелектуальний і лідерський центр оборонної нації. Простір людей дії, відповідальності та стратегічного мислення."
            />
        </section>
    );
};

export default Hero;
