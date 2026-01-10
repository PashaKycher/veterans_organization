import React from 'react'

export const AdditionalBlock = ({ title, subtitle }) => {
  return (
    <section className="hidden md:block relative md:-mt-16 lg:-mt-20 xl:-mt-32 z-30">

      <div className="p-6 max-w-[600px] lg:max-w-[800px] xl:max-w-6xl mx-auto bg-primary text-white xl:p-16 shadow-2xl">

        <h3 className="text-medium lg:text-2xl font-semibold mb-6">
          {title}
        </h3>
        <p className="text-sm lg:text-medium text-white/90">
          {subtitle}
        </p>

      </div>

    </section>
  )
}

