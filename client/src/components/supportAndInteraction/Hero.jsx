import { assets } from "../../assets/assets";
import { Blackout } from "../helpers/Blackout";
import { HeroText } from "../helpers/HeroText";

const Hero = () => {
    return (
        <section className="relative w-full overflow-hidden">

            <img src={assets.homeHero} alt="Hero" className="w-full h-auto lg:h-screen object-cover" />

            <Blackout />

            <HeroText
                title="Підтримка та взаємодія"
                subTitle="Клуб Захисників України розглядає підтримку не як благодійність, а як
                    відповідальність спільноти за своїх. Ми будуємо сталі механізми взаємодії,
                    що підсилюють людей, проєкти та середовище дії."
            />
        </section>
    )
}

export default Hero