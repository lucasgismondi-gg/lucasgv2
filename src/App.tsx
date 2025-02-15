import { useState } from "react"

import Header from "@/components/Header"
import Experience from "@/components/Experience"
import AboutMe from "@/components/AboutMe"
import Footer from "@/components/Footer"

// TODO: Add experience section
// TODO: Add better font
// TODO: Get images for Italy, Austria, Canada
// TODO: Optimize for mobile
// TODO: Add analytics

// TODO: Add stock price marquee to footer (potential)

function App() {
  const [hoveredExperience, setHoveredExperience] = useState<string | null>(null)
  const [clickedExperience, setClickedExperience] = useState<string | null>(null)

  return (
    <div className="flex flex-row md:h-screen">
      <div className="hidden md:flex flex-grow h-full bg-background border-r border-border" />
      <div className="flex flex-col max-w-6xl min-w-0 h-full gap-[1px]">
        <Header />
        <Experience
          setHoveredExperience={(experience: string | null) => setHoveredExperience(experience)}
          setClickedExperience={(experience: string | null) => setClickedExperience(experience)}
          experience={clickedExperience || hoveredExperience}
        />
        <AboutMe />
        <Footer />
        {(clickedExperience || hoveredExperience) && (
          <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-background fade-in" style={{ animationDuration: '0.2s' }}>
            <div className="max-w-6xl mx-auto border-r border-border border-l h-full box-content">
              {clickedExperience || hoveredExperience}
              {clickedExperience && <button onClick={() => setClickedExperience(null)}>Close</button>}
            </div>
          </div>
        )}
      </div>
      <div className="hidden md:flex flex-grow h-full border-l border-border bg-background" />
    </div>
  )
}

export default App
