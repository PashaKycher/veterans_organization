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
    <div>
      <h2 className="text-primary font-semibold text-xl lg:text-3xl mb-4 underline underline-offset-8">
        {title}
      </h2>

      <p className="text-neutral-600 text-xs lg:text-sm leading-relaxed max-w-md">
        {subtitle}
      </p>
    </div>
  )
}
