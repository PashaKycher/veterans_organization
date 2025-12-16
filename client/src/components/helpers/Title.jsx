import React from 'react'

const colorMap = {
  'red': 'lg:text-red-500',
  'blue': 'lg:text-blue-500',
  'green': 'lg:text-green-500',
  'white': 'lg:text-white',
  'black': 'lg:text-black',
};

export const Title = ({ title, subtitle }) => {
  // const lgColorClass = colorMap[color] || colorMap['white'];

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-semibold text-title leading-tight">
        {title}
      </h1>

      <p className="mt-6 text-base md:text-lg text-subTitle leading-relaxed">
        {subtitle}
      </p>
    </div>
  )
}
