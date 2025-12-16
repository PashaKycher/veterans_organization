import React from 'react'

import Hero from '../components/position/Hero'
import Intro from '../components/position/Intro'
import Grid from '../components/position/Grid'

import { AdditionalBlock } from '../components/helpers/AdditionalBlock'


const Position = () => {
    return (
        <main className="bg-bg min-h-screen text-text overflow-hidden">
            <Hero />

            <AdditionalBlock
                title="Позиція Клубу Захисників України"
                subtitle="Коротко й принципово. Наші оцінки, рамки та заяви щодо ключових подій війни, безпеки й державотворення. Ми говоримо як субʼєкт і беремо відповідальність за сказане."
            />

            <Intro />
            <Grid />
        </main>
    )
}


export default Position