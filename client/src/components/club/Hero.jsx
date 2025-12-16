import { assets } from "../../assets/assets";
import { Blackout } from "../helpers/Blackout";
import { HeroText } from "../helpers/HeroText";

const Hero = () => {
    return (
        <section className=" relative w-full overflow-hidden">

            <img src={assets.clubHero} alt="Hero" className="w-full h-auto lg:h-screen object-cover" />

            <Blackout />

            <HeroText
                title="Клуб Захисників України — це люди"
                subTitle="КЗУ — не опис і не формальна організація. Це спільнота людей, сформованих війною,
                    які мають досвід, авторитет і готовність брати відповідальність за майбутнє держави."
            />
        </section>
    )
}


export default Hero