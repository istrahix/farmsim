import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion'
import { useEffect } from 'react'
import Home from './pages/1-Home'
import NotFound from './pages/NotFound'
import CustomCursor from './components/CustomCursor'
import './App.scss'

const COLORS = ['#CE84CF', '#13FFAA', '#1E67C6', '#DD335C']
function App() {
  const color = useMotionValue(COLORS[0])
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0, #020617 50%,${color})`

  useEffect(() => {
    animate(color, COLORS, { ease: 'easeInOut', duration: 10, repeat: Infinity, repeatType: 'mirror' })
  }, [])
  return (
    <Router>
      <CustomCursor />
      <motion.div
        className="min-h-screen relative overflow-hidden "
        style={{
          backgroundImage,
        }}
      >
        <div className="relative z-10">
          <main className="max-w-6xl mx-auto px-4 py-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </motion.div>
    </Router>
  )
}

export default App
