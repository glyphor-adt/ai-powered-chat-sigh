import React from 'react'
import { Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">Features</a></li>
              <li><a href="#" className="hover:text-primary">Pricing</a></li>
              <li><a href="#" className="hover:text-primary">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
              <li><a href="#" className="hover:text-primary">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">Documentation</a></li>
              <li><a href="#" className="hover:text-primary">Support</a></li>
              <li><a href="#" className="hover:text-primary">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-2">Subscribe to our newsletter for the latest news and updates.</p>
            <div className="flex items-center border rounded-md overflow-hidden">
              <input type="email" placeholder="Your email address" className="w-full px-4 py-2 focus:outline-none text-sm" />
              <button className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/80 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 py-4 border-t border-border flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>Copyright © {new Date().getFullYear()} AI Chat App. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="hover:text-primary" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="hover:text-primary" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="hover:text-primary" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
            <a href="#" className="hover:text-primary" aria-label="Email"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
