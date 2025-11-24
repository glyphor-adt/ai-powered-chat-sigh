import React from 'react'
import { Zap, Shield, TrendingUp, MessageSquare, Code, Layout } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

const featuresData = [
  {
    icon: Zap,
    title: 'Instant Responses, Zero Wait Time',
    description: 'Experience real-time AI conversations with lightning-fast responses. No more waiting, just instant results.',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security and Privacy',
    description: 'Your data is protected with robust security measures and strict privacy policies. Trust us to keep your conversations safe.',
  },
  {
    icon: TrendingUp,
    title: 'Boost Productivity by 40% or More',
    description: 'Streamline your workflow and achieve peak productivity with our AI-powered chat assistant. Reclaim your time and focus on what matters most.',
  },
  {
    icon: MessageSquare,
    title: 'Personalized AI Assistance Tailored to You',
    description: 'Get AI assistance that adapts to your unique needs and preferences. Experience a truly personalized and intelligent chat experience.',
  },
  {
    icon: Code,
    title: 'Seamless Integration with Your Existing Tools',
    description: 'Integrate our AI chat application with your favorite platforms and tools for a seamless and unified workflow.',
  },
  {
    icon: Layout,
    title: 'Cross-Platform Compatibility for Ultimate Flexibility',
    description: 'Access our AI chat application from any device, anywhere, anytime. Enjoy unparalleled flexibility and convenience.',
  },
]

const Features = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-balance animate-fade-in animate-slide-up">Empowering You with Intelligent Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <Card key={index} className="hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-fade-in animate-slide-up delay-" + (index * 50) + "ms">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-xl">
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span>{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
