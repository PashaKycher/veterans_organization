import React from 'react'

import Hero from '../components/leaders/Hero'
import Manifest from '../components/leaders/Manifest'
import People from '../components/leaders/People'
import Cases from '../components/leaders/Cases'
import CTA from '../components/leaders/CTA'
import { AdditionalBlock } from '../components/helpers/AdditionalBlock'

const Leaders = () => {
    return (
        <main className="bg-bg min-h-screen text-text overflow-hidden">
            <Hero />

            <AdditionalBlock
                    title="Лідерство як дія і відповідальність"
                    subtitle="Досвід командирів, сержантів, солдатів і громадянських лідерів, які приймали рішення в умовах війни та несуть цю відповідальність у майбутнє держави."
                  />

            <Manifest />
            <People />
            <Cases />
            <CTA />
        </main>
    )
}


export default Leaders