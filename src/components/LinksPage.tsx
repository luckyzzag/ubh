import React from 'react'
import { Link } from 'react-router-dom'
import { Book, Twitter, Instagram } from 'lucide-react'

const LinksPage: React.FC = () => {
  return (
    <div className="min-h-screen comic-bg">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bangers text-brand-blue mb-8 text-center drop-shadow-[0_2px_2px_rgba(255,0,51,0.8)]">
          Unbreakable Links
        </h1>
        <div className="max-w-md mx-auto bg-white comic-border rounded-lg p-6">
          <ul className="space-y-4">
            <li>
              <Link 
                to="/" 
                className="flex items-center p-3 bg-brand-red text-white font-bangers text-xl rounded hover:bg-brand-blue transition duration-300"
              >
                <Book className="mr-2" />
                Read the Comic
              </Link>
            </li>
            <li>
              <a 
                href="https://twitter.com/UnbreakableHue" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center p-3 bg-brand-cyan text-brand-blue font-bangers text-xl rounded hover:bg-brand-blue hover:text-white transition duration-300"
              >
                <Twitter className="mr-2" />
                Follow on Twitter
              </a>
            </li>
            <li>
              <a 
                href="https://www.instagram.com/unbreakablehue/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center p-3 bg-brand-blue text-white font-bangers text-xl rounded hover:bg-brand-red transition duration-300"
              >
                <Instagram className="mr-2" />
                Follow on Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-8 text-center">
          <Link to="/" className="text-brand-blue hover:text-brand-red hover:underline font-bangers text-xl">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LinksPage