import React from 'react'

const YouthProgramsGrid = ({ programs }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
    {programs.map((item, index) => (
      <div key={index + "programYouth"} className="bg-white rounded-2xl shadow-md p-6 border border-primary/10 space-y-4 flex flex-col">
        <div className="w-12 h-12 px-3 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg">
          ★
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-[#03383A]">{item.title}</h3>
          <p className="text-sm text-neutral-700 leading-relaxed">{item.desc}</p>
        </div>
        <div className="pt-2">
          <a href={item.link} className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition">
            Дізнатися більше
          </a>
        </div>
      </div>
    ))}
  </div>
  )
}

export default YouthProgramsGrid