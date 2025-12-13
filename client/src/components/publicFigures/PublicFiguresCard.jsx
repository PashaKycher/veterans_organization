import React from 'react'

const PublicFiguresCard = ({ figures }) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {figures.map((item, index) => (
                <div key={index + "card"} className="bg-white rounded-2xl shadow-md p-6 border border-primary/10 space-y-4 flex flex-col">
                    <div className="w-full h-40 bg-linear-to-br from-primary/15 to-white rounded-xl border border-primary/10 flex items-center justify-center text-primary font-semibold">
                        <img src={item.image} alt="Фото" className='w-full h-full object-cover'/>
                    </div>
                    <div className="space-y-1">
                        <p className="text-sm font-semibold text-primary">{item.role}</p>
                        <h3 className="text-xl font-bold text-[#03383A]">{item.name}</h3>
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed flex-1">{item.desc}</p>
                    <div>
                        <a href={item.link} className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition">
                            Дізнатися більше
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PublicFiguresCard