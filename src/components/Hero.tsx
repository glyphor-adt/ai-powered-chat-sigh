import React from 'react'
import { Button } from './ui/button'
import { cn } from '../lib/utils'

const Hero = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1621964393794?w=800&h=600')` }}></div>
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-6 text-balance animate-fade-in animate-slide-up">Unlock the Power of AI-Driven Conversations</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-8 animate-fade-in animate-slide-up delay-100">Experience seamless and intelligent interactions with our cutting-edge AI chat application. Boost productivity, enhance communication, and unlock new possibilities.</p>
          <div className="flex justify-center space-x-4 animate-fade-in animate-slide-up delay-200">
            <Button className="bg-accent hover:bg-accent-foreground text-white px-8 py-4 rounded-xl text-lg shadow-xl transition-all duration-300">Get Started for Free</Button>
            <Button variant="outline" className="border-2 border-gray-300 hover:border-gray-100 text-white px-8 py-4 rounded-xl text-lg transition-all duration-300">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
