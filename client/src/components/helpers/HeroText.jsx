import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from "framer-motion";
import { AddToUsBtn } from './AddToUsBtn'

export const HeroText = ({ title, subTitle }) => {
    const isPosition = useLocation().pathname.includes("/position")
    const isLeaders = useLocation().pathname.includes("/leaders")

    const [isAddBtn, setIsAddBtn] = useState(true)

    useEffect(() => {
        if (isPosition || isLeaders) {
            setIsAddBtn(false)
        } else {
            setIsAddBtn(true)
        }
    }, [isPosition])

    return (
        < motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-20 flex flex-col items-center gap-4 px-4 md:absolute md:top-16 lg:top-26 md:left-1/2 md:-translate-x-1/2 md:w-160 lg:w-200" >

            <h1 className="mt-6 text-3xl lg:text-5xl font-bold text-black md:text-white max-w-4xl">
                {title}
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-text md:text-white/85 max-w-3xl">
                {subTitle}
            </p>

            {isAddBtn &&<AddToUsBtn />}
        </motion.div >
    )
}
