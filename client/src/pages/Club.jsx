import React from 'react'

import Hero from '../components/club/Hero'
import Mission from '../components/club/Mission'
import Leaders from '../components/club/Leaders'
import Principles from '../components/club/Principles'
import Join from '../components/club/Join'
import { AdditionalBlock } from '../components/helpers/AdditionalBlock'


const Club = () => {
    return (
        <main className="bg-bg min-h-screen text-text overflow-hidden">
            <Hero />

            <AdditionalBlock
                title="Клуб — це люди, які беруть відповідальність"
                subtitle="КЗУ — це спільнота лідерів, військових і цивільних, обʼєднаних досвідом війни, культурою служіння та готовністю діяти. Тут немає спостерігачів — лише учасники й співтворці."
            />

            <Mission />
            <Leaders />
            <Principles />
            <Join />
        </main>
    )
}


export default Club