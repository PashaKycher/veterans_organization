import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'motion/react'
import { assets, analyticalReviews, analyticalCategories } from '../assets/assets'


const AnalyticalArticle = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [article, setArticle] = useState(null)
    const [category, setCategory] = useState(null)

    const feathData = async () => {
        if (!id) navigate("/analytical")
        const data = await analyticalReviews.find(item => item._id === id)
        setArticle(data)

        if (data.category_id) {
            const catData = await analyticalCategories.filter(item => item._id === data.category_id)
            setCategory(catData)
        }
    }

    useEffect(() => {
        feathData()
    }, [id])

    if (!article) {
        return (
            <div className="w-full py-32 text-center text-gray-500">
                Завантаження...
            </div>
        )
    }

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

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>

                    {/* MAIN CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className='lg:col-span-2'
                    >
                        {/* Big Image */}
                        {article.image && (
                            <motion.img
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                src={article.image}
                                alt={article.title}
                                className="w-full h-auto rounded-xl shadow mb-6 object-cover"
                            />
                        )}

                        <div className="space-y-8">

                            {/* Title */}
                            <div>
                                <h1 className='text-3xl font-bold text-gray-900'>
                                    {article.name}
                                </h1>
                                <p className='text-gray-500 text-sm mt-1'>
                                    Категорія: {category[0].name}
                                </p>
                            </div>

                            <hr className='border-gray-300 my-6' />

                            {/* Short description */}
                            <div>
                                <h2 className='text-xl font-semibold text-primary mb-3'>
                                    Короткий опис
                                </h2>
                                <p className='text-gray-600 leading-relaxed'>
                                    {article.disc}
                                </p>
                            </div>

                            {/* FULL CONTENT */}
                            <div>
                                <h2 className='text-xl font-semibold text-primary mb-3'>
                                    Повний аналіз
                                </h2>

                                <div
                                    className="prose prose-gray max-w-none leading-relaxed pb-12"
                                    dangerouslySetInnerHTML={{ __html: article.content }}
                                />
                            </div>

                        </div>
                    </motion.div>

                    {/* RIGHT SIDEBAR (optional future blocks) */}
                    <div className="hidden lg:block">
                        <div className="sticky top-20 space-y-4 bg-white shadow p-6 rounded-xl">
                            <h3 className="font-semibold text-lg">Інформація</h3>
                            <p className="text-gray-600 text-sm">
                                Аналітичний матеріал базується на офіційних джерелах, відкритих даних та експертних оцінках.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AnalyticalArticle

