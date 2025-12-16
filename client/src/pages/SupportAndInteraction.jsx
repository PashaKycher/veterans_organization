import React, { useState } from "react";

import Hero from "../components/supportAndInteraction/Hero";
import Principles from "../components/supportAndInteraction/Principles";
import SupportDirections from "../components/supportAndInteraction/SupportDirections";
import Partnership from "../components/supportAndInteraction/Partnership";
import CallToAction from "../components/supportAndInteraction/CallToAction";
import { AdditionalBlock } from "../components/helpers/AdditionalBlock";

const SupportAndInteraction = () => {
    return (
        <main className="bg-bg min-h-screen text-text overflow-hidden">
            <Hero />

            <AdditionalBlock
                title="Відповідальність спільноти за своїх"
                subtitle="Підтримка ветеранів, родин і проєктів КЗУ як елемент культури відповідальності. Не благодійність, а спільна дія, взаємна підтримка й залучення до розвитку."
            />

            <Principles />
            <SupportDirections />
            <Partnership />
            <CallToAction />
        </main>
    )
}


export default SupportAndInteraction