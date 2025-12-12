import React from 'react'
import Hero from '../components/news/Hero'
import NewsBody from '../components/news/NewsBody'

const News = () => {
  return (
    <main className="bg-[#F1F4F4] min-h-screen text-dark">
      <Hero />
      <NewsBody />
    </main>
  )
}

export default News