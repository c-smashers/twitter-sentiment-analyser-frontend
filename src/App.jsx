import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import About from './pages/about/About'
import YoutubeCommentAnalyser from './pages/youtubeCommentAnalyser/YoutubeCommentAnalyser'
import TextSentimentAnalyser from './pages/textSentiment/TextSentimentAnalyser'

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/youtube-comment-sentiment-analyser" element={<YoutubeCommentAnalyser />} />
        <Route path="/text-sentiment-analyser" element={<TextSentimentAnalyser />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App
