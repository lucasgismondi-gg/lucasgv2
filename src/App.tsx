import Header from "@/components/Header"
import Experience from "@/components/Experience"
import AboutMe from "@/components/AboutMe"
import Footer from "@/components/Footer"

// TODO: Get all images for experience, frontend, backend, cloud, about me
// TODO: Add links where appropriate
// TODO: Optimize for mobile
// TODO: Globe component
// TODO: Add experience section interactions
// TODO: Add better font
// TODO: Add a nice cursor
// TODO: Add stock price marquee to footer

function App() {

  return (
    <div className="flex flex-col h-screen gap-[1px]">
      <Header />
      <Experience />
      <AboutMe />
      <Footer />
    </div>
  )
}

export default App
