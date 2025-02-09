import Header from "@/components/Header"
import Experience from "@/components/Experience"
import AboutMe from "@/components/AboutMe"
import Footer from "@/components/Footer"

// TODO: Add a nice cursor
// TODO: Optimize for mobile
// TODO: Get all images for experience, frontend, backend, cloud, about me
// TODO: Add experience section interactions
// TODO: Add better font
// TODO: Get images for Italy, Austria, Mexico, Canada

// TODO: Add stock price marquee to footer (potential)
// TODO: Add spotify widget on footer (potential)

function App() {
  return (
    <div className="flex flex-col md:h-screen gap-[1px]">
      <Header />
      <Experience />
      <AboutMe />
      <Footer />
    </div>
  )
}

export default App
