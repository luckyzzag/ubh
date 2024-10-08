import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Home } from 'lucide-react'

const ChapterPage: React.FC = () => {
  const { chapterNumber, pageNumber } = useParams<{ chapterNumber: string; pageNumber: string }>()
  const chapter = parseInt(chapterNumber || '0', 10)
  const page = parseInt(pageNumber || '1', 10)
  const navigate = useNavigate()

  const chapterContent = {
    0: {
      title: '',
      pageCount: 23,
    },
    1: {
      title: 'Blue Bird',
      pageCount: 68,
    }
  }

  const currentChapter = chapterContent[chapter as keyof typeof chapterContent]

  const goToNextPage = () => {
    if (page < currentChapter.pageCount) {
      navigate(`/chapter/${chapter}/page/${page + 1}`)
    } else if (chapter < Object.keys(chapterContent).length - 1) {
      navigate(`/chapter/${chapter + 1}/page/1`)
    }
  }

  const goToPreviousPage = () => {
    if (page > 1) {
      navigate(`/chapter/${chapter}/page/${page - 1}`)
    } else if (chapter > 0) {
      const previousChapter = chapterContent[(chapter - 1) as keyof typeof chapterContent]
      navigate(`/chapter/${chapter - 1}/page/${previousChapter.pageCount}`)
    }
  }

  const progressPercentage = (page / currentChapter.pageCount) * 100

  const chapterTitle = chapter === 0 ? `Chapter ${chapter}` : `Chapter ${chapter}: ${currentChapter.title}`

  const imagePath = `/images/chapter${chapter}/page${page}.jpg`

  return (
    <div className="min-h-screen comic-bg">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bangers text-brand-blue mb-4 drop-shadow-[0_2px_2px_rgba(255,0,51,0.8)]">
          {chapterTitle}
        </h1>
        <div className="mb-6">
          <img src={imagePath} alt={`Chapter ${chapter}, Page ${page}`} className="w-full max-w-2xl mx-auto rounded-lg comic-border" />
        </div>
        <div className="mb-6 bg-gray-200 rounded-full h-6 comic-border overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300 ease-in-out bg-gradient-to-r from-[#0013FE] via-[#F70068] to-[#08EB96]"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={goToPreviousPage}
            disabled={chapter === 0 && page === 1}
            className="inline-flex items-center px-4 py-2 bg-[#0013FE] text-white font-bangers text-xl rounded comic-border hover:bg-[#F70068] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="mr-2" />
            Previous Page
          </button>
          <Link to="/" className="inline-flex items-center px-4 py-2 bg-[#08EB96] text-[#0013FE] font-bangers text-xl rounded comic-border hover:bg-[#0983F7] hover:text-white transition duration-300">
            <Home className="mr-2" />
            Home
          </Link>
          <button
            onClick={goToNextPage}
            disabled={chapter === Object.keys(chapterContent).length - 1 && page === currentChapter.pageCount}
            className="inline-flex items-center px-4 py-2 bg-[#F70068] text-white font-bangers text-xl rounded comic-border hover:bg-[#0013FE] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next Page
            <ArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChapterPage