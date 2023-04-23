import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import About from './pages/about/About'
import YoutubeCommentAnalyser from './pages/youtubeCommentAnalyser/YoutubeCommentAnalyser'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/youtube-comment-sentiment-analyser" element={<YoutubeCommentAnalyser />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
