import { useState } from "react"

import Header from "@/components/Header"
import Experience from "@/components/Experience"
import AboutMe from "@/components/AboutMe"
import Footer from "@/components/Footer"

// TODO: Optimize for mobile

// TODO: Add stock price marquee to footer (potential feature)

function App() {
  const [hoveredExperience, setHoveredExperience] = useState<string | null>(null)
  const [clickedExperience, setClickedExperience] = useState<string | null>(null)

  return (
    <div className="flex flex-row md:h-screen">
      <div className="hidden md:flex flex-grow h-full bg-background border-r border-border" />
      <div className="flex flex-col max-w-6xl min-w-0 h-full gap-[1px] min-h-screen">
        <Header />
        <Experience
          setHoveredExperience={(experience: string | null) => setHoveredExperience(experience)}
          setClickedExperience={(experience: string | null) => setClickedExperience(experience)}
          experience={clickedExperience || hoveredExperience}
        />
        <AboutMe
          clickedExperience={clickedExperience}
          hoveredExperience={hoveredExperience}
          onCloseExperienceFeature={() => setClickedExperience(null)}
        />
        <Footer />
      </div>
      <div className="hidden md:flex flex-grow h-full border-l border-border bg-background" />
    </div>
  )
}

export default App
