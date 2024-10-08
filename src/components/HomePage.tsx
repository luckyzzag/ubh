import React from 'react'
import { Link } from 'react-router-dom'
import { Book, Link as LinkIcon } from 'lucide-react'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen comic-bg">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-6xl font-bangers text-brand-blue mb-2 drop-shadow-[0_2px_2px_rgba(255,0,51,0.8)]">
            Unbreakable Hue
          </h1>
        </header>
        <main className="max-w-2xl mx-auto">
          <div className="bg-white comic-border rounded-lg p-6 mb-8">
            <h2 className="text-3xl font-bangers text-brand-blue mb-4">Start Your Journey</h2>
            <p className="mb-6 font-roboto">Begin your adventure with our captivating comic series. Start from the very beginning to fully immerse yourself in the story.</p>
            <Link
              to="/chapter/0/page/1"
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-red text-white font-bangers text-xl rounded-lg hover:bg-brand-blue transition duration-300 comic-border"
            >
              <Book className="mr-2" />
              Start Reading Chapter 0
            </Link>
          </div>
          <div className="bg-white comic-border rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-bangers text-brand-blue mb-4">Available Chapters</h3>
            <ul className="space-y-2 font-roboto">
              <li>
                <Link to="/chapter/0/page/1" className="text-brand-red hover:text-brand-blue hover:underline">Chapter 0</Link>
              </li>
              <li>
                <Link to="/chapter/1/page/1" className="text-brand-red hover:text-brand-blue hover:underline">Chapter 1: Blue Bird</Link>
              </li>
            </ul>
          </div>
          <div className="bg-white comic-border rounded-lg p-6">
            <h3 className="text-2xl font-bangers text-brand-blue mb-4">Learn more about Unbreakable Hue</h3>
            <p className="mb-4 font-roboto">Discover more about the Unbreakable Hue universe, follow us on social media, and stay updated with the latest news and releases.</p>
            <Link
              to="/links"
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-cyan text-brand-blue font-bangers text-xl rounded-lg hover:bg-brand-blue hover:text-white transition duration-300 comic-border"
            >
              <LinkIcon className="mr-2" />
              Unbreakable Links
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}

export default HomePage