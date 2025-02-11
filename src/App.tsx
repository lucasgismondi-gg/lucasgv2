import { useState } from "react"

import Header from "@/components/Header"
import Experience from "@/components/Experience"
import AboutMe from "@/components/AboutMe"
import Footer from "@/components/Footer"

// TODO: Add experience section interactions

// TODO: Look at larger screen widths
// TODO: Optimize for mobile
// TODO: Add better font
// TODO: Add analytics
// TODO: Get images for Italy, Austria, Mexico, Canada

// TODO: Add stock price marquee to footer (potential)
// TODO: Add spotify widget on footer (potential)

function App() {
  const [hoveredExperience, setHoveredExperience] = useState<string | null>(null)
  const [clickedExperience, setClickedExperience] = useState<string | null>(null)

  return (
    <div className="flex flex-col md:h-screen gap-[1px]">
      <Header />
      <Experience setHoveredExperience={(experience: string | null) => setHoveredExperience(experience)} setClickedExperience={(experience: string | null) => setClickedExperience(experience)} />
      <AboutMe />
      <Footer />
      {(clickedExperience || hoveredExperience) && (
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-background fade-in" style={{ animationDuration: '0.2s' }}>
          {clickedExperience || hoveredExperience}
          {clickedExperience && <button onClick={() => setClickedExperience(null)}>Close</button>}
        </div>
      )}
    </div>
  )
}

export default App
