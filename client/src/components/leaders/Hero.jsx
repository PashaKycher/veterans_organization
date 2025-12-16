import { assets } from "../../assets/assets";
import { Blackout } from "../helpers/Blackout";
import { HeroText } from "../helpers/HeroText";


const Hero = () => {
    return (


        <section className="relative w-full overflow-hidden">

            <img src={assets.leadersHero} alt="Hero" className="w-full h-auto lg:h-screen object-cover" />

            <Blackout />
            
            <HeroText
                title="Лідерство — це відповідальність діяти"
                subTitle="Цей розділ — про людей, які пройшли війну або кризу і здатні брати на себе
                    рішення. Про досвід командирів, сержантів, солдатів і цивільних лідерів,
                    що формують новий український клас відповідальності."
            />
        </section>
    )
}


export default Hero