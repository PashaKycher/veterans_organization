import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets } from '../../assets/assets'

const PositionCard = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    return (
        <div className='bg-sand-500/20'>
            {/* HEADER BACKGROUND */}
            <div className='w-full py-10 md:py-16'></div>

            <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-6'>

                {/* Back button */}
                <button
                    onClick={() => navigate(-1)}
                    className='flex items-center gap-2 mb-8 text-primary font-medium'
                >
                    <img src={assets.arrow_icon} className="rotate-180 opacity-70" />
                    Назад
                </button>
            </div>
            <div>{id}</div>
        </div>
    )
}

export default PositionCard