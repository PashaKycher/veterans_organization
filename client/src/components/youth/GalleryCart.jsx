import React from 'react'

const GalleryCart = ({ gallery }) => {
    return (
        <div className="grid md:grid-cols-3 gap-5">
            {gallery.map((item, idx) => (
                <div key={item.title} className="bg-white rounded-2xl shadow-md p-4 border border-primary/10 space-y-3">
                    <div className="w-full h-32 bg-linear-to-br from-primary/15 to-white rounded-xl border border-primary/10 flex items-center justify-center text-primary font-semibold">
                        <img src={item.image} alt='Фото' className='w-full h-full object-cover'/>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-primary">{item.title}</p>
                        <p className="text-xs text-neutral-700 leading-relaxed">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GalleryCart