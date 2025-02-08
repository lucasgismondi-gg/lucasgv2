import { Link } from "@/components/ui/link"
import Globe, { GlobeMethods } from 'react-globe.gl';
import { useEffect, useState, useRef } from "react";
import globeTopology from "./globe-topology.json";
import useEmblaCarousel from 'embla-carousel-react'
import Autoscroll from 'embla-carousel-auto-scroll'
import { Hover3dEffect } from "@/components/ui/hover-3d-effect"

// TODO: Get all images for experience, frontend, backend, cloud, about me
// TODO: Add links where appropriate
// TODO: Optimize for mobile
// TODO: Globe component
// TODO: Add experience section interactions
// TODO: Add better font
// TODO: Add a nice cursor
// TODO: Add stock price marquee to footer

const GLOBE_PRIMARY_COLOR = "#00FF88";
const GLOBE_BACKGROUND_COLOR = "#0A0A0A";
const GLOBE_INACTIVE_COLOR = "#303030";
const VISITED_COUNTRIES = ["Canada", "United States of America", "Mexico", "Thailand", "Malaysia", "Indonesia", "Portugal", "Spain", "France", "United Kingdom", "Italy", "Austria", "Dominican Rep.", "Bahamas", "Vietnam"]

function Header() {
  return (
    <div className="flex flex-row justify-between p-2 bg-background">
      <p className="text-xs fade-in">Lucas Gismondi</p>
      <div className="flex flex-row gap-1 fade-in" style={{ animationDelay: '0.5s' }}>
        <Link className="text-xs" href="/">Resume</Link>
        <Link className="text-xs" href="/">Contact</Link>
      </div>
    </div>
  )
}

function Experience() {
  return (
    <div className="flex flex-col h-1/2 gap-[1px]">
      <div className="flex w-full h-full border-animation bg-background">
        <p className="text-xs p-2 fade-in" style={{ animationDelay: '0.1s' }}>Experience</p>
      </div>
      <div className="flex w-full h-full border-animation border-animation-delay-1 bg-background">
        <p className="text-xs p-2 fade-in" style={{ animationDelay: '0.2s' }}>Frontend</p>
      </div>
      <div className="flex w-full h-full border-animation border-animation-delay-2 bg-background">
        <p className="text-xs p-2 fade-in" style={{ animationDelay: '0.3s' }}>Backend</p>
      </div>
      <div className="flex w-full h-full border-animation border-animation-delay-3 bg-background">
        <p className="text-xs p-2 fade-in" style={{ animationDelay: '0.4s' }}>Cloud</p>
      </div>
    </div>
  )
}

function AboutMe() {
  const [globeWidth, setGlobeWidth] = useState(300);
  const [globeHeight, setGlobeHeight] = useState(300);
  const globeContainerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<GlobeMethods>(undefined);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoscroll({ speed: 0.5, playOnInit: true, stopOnMouseEnter: true, startDelay: 0 })])

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = -1;

      globeRef.current.pointOfView({ lat: 40, lng: -105.2551, altitude: 2 }, 0);
    }

    if (globeContainerRef.current) {
      setGlobeWidth(globeContainerRef.current.clientWidth);
      setGlobeHeight(globeContainerRef.current.clientHeight);
    }

    const handleResize = () => {
      if (globeContainerRef.current) {
        setGlobeWidth(globeContainerRef.current.clientWidth);
        setGlobeHeight(globeContainerRef.current.clientHeight);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [globeContainerRef.current, globeRef.current])

  const handleGetPolygonColor = (feature: any) => {
    if (VISITED_COUNTRIES.includes(feature.properties.NAME)) {
      return GLOBE_PRIMARY_COLOR;
    }

    return GLOBE_INACTIVE_COLOR;
  }

  const handlePolygonHover = () => {
    return;
  }

  return (
    <div className="flex flex-row justify-between h-1/2 gap-[1px] border-animation border-animation-delay-4">
      <div className="w-1/2 flex flex-col gap-[1px]">
        <div className="flex flex-col h-full w-full bg-background">
          <p className="text-xs fade-in" style={{ animationDelay: '0.5s' }}>About me</p>
          <div className="h-full w-full grid grid-cols-3">
            <Hover3dEffect className="h-full">
              <div className="flex h-full w-full col-span-1 bg-red-500 fade-in" style={{ animationDelay: '0.6s' }} />
            </Hover3dEffect>
            <Hover3dEffect className="h-full">
              <div className="flex h-full w-full col-span-1 bg-blue-500 fade-in" style={{ animationDelay: '0.7s' }} />
            </Hover3dEffect>
            <Hover3dEffect className="h-full">
              <div className="flex h-full w-full col-span-1 bg-green-500 fade-in" style={{ animationDelay: '0.8s' }} />
            </Hover3dEffect>
            <Hover3dEffect className="h-full">
              <div className="flex h-full w-full col-span-1 bg-blue-500 fade-in" style={{ animationDelay: '0.7s' }} />
            </Hover3dEffect>
            <Hover3dEffect className="h-full">
              <div className="flex h-full w-full col-span-1 bg-green-500 fade-in" style={{ animationDelay: '0.8s' }} />
            </Hover3dEffect>
            <Hover3dEffect className="h-full">
              <div className="flex h-full w-full col-span-1 bg-red-500 fade-in" style={{ animationDelay: '0.9s' }} />
            </Hover3dEffect>
          </div>
        </div>
        <div className="p-2 bg-background">
          <div className="flex flex-row gap-2 fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-xs whitespace-nowrap">Core principles</p>
            <div className="embla" ref={emblaRef} onMouseLeave={() => emblaApi?.plugins().autoScroll.play()}>
              <div className="embla__container">
                <div className="embla__slide"><p className="text-xs">Occam's Razor •</p></div>
                <div className="embla__slide"><p className="text-xs">First Principles Thinking •</p></div>
                <div className="embla__slide"><p className="text-xs">Anti-Fragility •</p></div>
                <div className="embla__slide"><p className="text-xs">The Tragedy of the Commons •</p></div>
                <div className="embla__slide"><p className="text-xs">The North Star Principle •</p></div>
                <div className="embla__slide"><p className="text-xs">Occam's Razor •</p></div>
                <div className="embla__slide"><p className="text-xs">First Principles Thinking •</p></div>
                <div className="embla__slide"><p className="text-xs">Anti-Fragility •</p></div>
                <div className="embla__slide"><p className="text-xs">The Tragedy of the Commons •</p></div>
                <div className="embla__slide"><p className="text-xs">The North Star Principle •</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>  
      <div className="w-1/2 bg-background">
        <div ref={globeContainerRef} className="w-full h-full fade-in flex justify-center items-center" style={{ animationDelay: '0.9s' }}>
          <Globe 
            ref={globeRef}
            width={globeWidth} 
            height={globeHeight}
            backgroundColor={GLOBE_BACKGROUND_COLOR}
            polygonsData={globeTopology.features}
            polygonStrokeColor={handleGetPolygonColor}
            polygonCapColor={() => 'transparent'}
            polygonAltitude={0}
            atmosphereColor={GLOBE_PRIMARY_COLOR}
            onPolygonHover={handlePolygonHover}
          />
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className="flex flex-row justify-between p-2 bg-background border-animation border-animation-delay-5">
      <div className="flex flex-row gap-1 fade-in" style={{ animationDelay: '0.7s' }}>
        <Link className="text-xs" href="/">Github</Link>
        <Link className="text-xs" href="/">LinkedIn</Link>
        <Link className="text-xs" href="/">X</Link>
        <Link className="text-xs" href="/">Instagram</Link>
      </div>
      <p className="text-xs fade-in" style={{ animationDelay: '1s' }}>{`< ${new Date().getFullYear()} >`}</p>
    </div>
  )
}

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
