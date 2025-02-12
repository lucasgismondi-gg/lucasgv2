import Globe, { GlobeMethods } from 'react-globe.gl';
import { useEffect, useState, useRef, ReactHTMLElement } from "react";
import globeTopology from "@/globe-topology.json";
import { Hover3dEffect } from "@/components/ui/hover-3d-effect"
import { Marquee } from "@/components/ui/marquee"

const GLOBE_PRIMARY_COLOR = "#00FF88";
const GLOBE_BACKGROUND_COLOR = "#0A0A0A";
const GLOBE_INACTIVE_COLOR = "#303030";
const VISITED_COUNTRIES = ["Canada", "United States of America", "Thailand", "Malaysia", "Indonesia", "Portugal", "Spain", "France", "United Kingdom", "Dominican Rep.", "Vietnam"]
const VISITED_COUNTRY_IMAGES = {
    "Canada": [
        { src: "/images/about-me/bunkers.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/bunkers.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/bunkers.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/bunkers.jpg", alt: "Lucas at Bunkers" },
    ],
    "United States of America": [
        { src: "/images/about-me/united-states/friend.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/united-states/portrait.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/united-states/selfie.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/united-states/sunset.jpg", alt: "Lucas at Bunkers" },
    ],
    "Thailand": [
        { src: "/images/about-me/thailand/elephant.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/thailand/festival.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/thailand/fighting.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/thailand/friend.jpg", alt: "Lucas at Bunkers" },
    ],
    "Malaysia": [
        { src: "/images/about-me/malaysia/food.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/malaysia/mall.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/malaysia/sunset.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/malaysia/view.jpg", alt: "Lucas at Bunkers" },
    ],
    "Indonesia": [
        { src: "/images/about-me/indonesia/friend.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/indonesia/hike.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/indonesia/sunset-dance.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/indonesia/sunset.jpg", alt: "Lucas at Bunkers" },
    ],
    "Portugal": [
        { src: "/images/about-me/portugal/festival.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/portugal/selfie.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/portugal/view.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/portugal/work.jpg", alt: "Lucas at Bunkers" },
    ],
    "Spain": [
        { src: "/images/about-me/spain/food.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/spain/hike.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/spain/sagrada.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/spain/view.jpg", alt: "Lucas at Bunkers" },
    ],
    "France": [
        { src: "/images/about-me/france/bike.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/france/boats.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/france/deserts.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/france/monaco.jpg", alt: "Lucas at Bunkers" },
    ],
    "United Kingdom": [
        { src: "/images/about-me/united-kingdom/bridge.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/united-kingdom/lift.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/united-kingdom/market.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/united-kingdom/royal-palace.jpg", alt: "Lucas at Bunkers" },
    ],
    "Dominican Rep.": [
        { src: "/images/about-me/dominican-republic/boat.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/dominican-republic/gym.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/dominican-republic/ocean.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/dominican-republic/party.jpg", alt: "Lucas at Bunkers" },
    ],
    "Vietnam": [
        { src: "/images/about-me/vietnam/beach.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/vietnam/sign.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/vietnam/view-night.jpg", alt: "Lucas at Bunkers" },
        { src: "/images/about-me/vietnam/view.jpg", alt: "Lucas at Bunkers" },
    ]
}

export default function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row justify-between h-1/2 gap-[1px] border-animation border-animation-delay-4">
      <div className="w-full h-[50vh] md:h-auto md:w-1/2 flex flex-col gap-[1px]">
        <div className="flex flex-col h-full w-full bg-background">
          <div className="p-2">
            <p className="text-xs fade-in" style={{ animationDelay: '0.5s' }}>About me</p>
            <p className="text-xs fade-in" style={{ animationDelay: '0.6s' }}>Builder and explorer. University of Toronto graduate in computer science.</p>
          </div>
          <div className="h-full w-full grid grid-cols-3">
            <Hover3dEffect className="h-full">
              <div className="flex h-full w-full col-span-1 fade-in relative justify-center items-center overflow-hidden" style={{ animationDelay: '0.6s' }}>
                <img src="/images/about-me/bunkers.jpg" alt="Lucas at Bunkers" className="absolute object-cover" />
              </div>
            </Hover3dEffect>
            <Hover3dEffect className="h-full">
              <div className="flex h-full w-full col-span-1 fade-in relative justify-center items-center overflow-hidden" style={{ animationDelay: '0.7s' }}>
                <img src="/images/about-me/elephant.jpg" alt="Lucas with an elephant in Thailand" className="absolute object-cover" />
              </div>
            </Hover3dEffect>
            <Hover3dEffect className="h-full">
              <div className="flex h-full w-full col-span-1 fade-in relative justify-center items-center overflow-hidden" style={{ animationDelay: '0.8s' }}>
                <img src="/images/about-me/savaya.jpg" alt="Lucas at Savaya in Bali" className="absolute object-cover" />
              </div>
            </Hover3dEffect>
            <Hover3dEffect className="h-full">
              <div className="flex h-full w-full col-span-1 fade-in relative justify-center items-center overflow-hidden" style={{ animationDelay: '0.7s' }}>
                <img src="/images/about-me/surfing.jpg" alt="Lucas surfing" className="absolute object-cover" />
              </div>
            </Hover3dEffect>
            <Hover3dEffect className="h-full">
              <div className="flex h-full w-full col-span-1 fade-in relative justify-center items-center overflow-hidden" style={{ animationDelay: '0.8s' }}>
                <img src="/images/about-me/thailand.jpg" alt="Lucas in Thailand" className="absolute object-cover" />
              </div>
            </Hover3dEffect>
            <Hover3dEffect className="h-full">
              <div className="flex h-full w-full col-span-1 fade-in relative justify-center items-center overflow-hidden" style={{ animationDelay: '0.9s' }}>
                <img src="/images/about-me/waterfall.jpg" alt="Lucas at a waterfall in Thailand" className="absolute object-cover" />
              </div>
            </Hover3dEffect>
          </div>
        </div>
        <div className="p-2 bg-background">
          <div className="flex flex-row gap-2 fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-xs whitespace-nowrap">Core principles</p>
            <Marquee slides={[
                { id: 'occam', render: <p className="text-xs">Occam's Razor •</p> },
                { id: 'first-principles', render: <p className="text-xs">First Principles Thinking •</p> },
                { id: 'anti-fragility', render: <p className="text-xs">Anti-Fragility •</p> },
                { id: 'tragedy', render: <p className="text-xs">The Tragedy of the Commons •</p> },
                { id: 'north-star', render: <p className="text-xs">The North Star Principle •</p> },
                { id: 'occam', render: <p className="text-xs">Occam's Razor •</p> },
                { id: 'first-principles', render: <p className="text-xs">First Principles Thinking •</p> },
                { id: 'anti-fragility', render: <p className="text-xs">Anti-Fragility •</p> },
                { id: 'tragedy', render: <p className="text-xs">The Tragedy of the Commons •</p> },
                { id: 'north-star', render: <p className="text-xs">The North Star Principle •</p> }
            ]} />
          </div>
        </div>
      </div>  
      <div className="w-full md:w-1/2 bg-background">
        <BasedOnEarth />
      </div>
    </div>
  )
}

function BasedOnEarth() {
    const [globeWidth, setGlobeWidth] = useState(300);
    const [globeHeight, setGlobeHeight] = useState(300);
    const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const globeContainerRef = useRef<HTMLDivElement>(null);
    const globeRef = useRef<GlobeMethods>(undefined);

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
    }, [globeContainerRef.current, globeRef.current]);

    useEffect(() => {

        if (!hoveredCountry) return;

        const handlePointerMove = (event: PointerEvent) => {
            const { clientX, clientY } = event;
            const { left, top } = globeContainerRef.current?.getBoundingClientRect() ?? { width: 0, height: 0, left: 0, top: 0 };

            const tooltipWidth = 128 * 2; // 128 is the width of one image

            const x = clientX - left - tooltipWidth - 20;
            const y = clientY - top - tooltipWidth - 20;

            setTooltipPosition({ x, y });
        }

        window.addEventListener('pointermove', handlePointerMove);

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
        }
    }, [hoveredCountry]);

    const handleGetPolygonColor = (feature: any) => {
    if (VISITED_COUNTRIES.includes(feature.properties.NAME)) {
        return GLOBE_PRIMARY_COLOR;
    }

    return GLOBE_INACTIVE_COLOR;
    }

    const handlePolygonHover = (polygon: any | null, _: any | null) => {
        if (!globeRef.current) return;

        if (polygon && VISITED_COUNTRIES.includes(polygon.properties.NAME)) {
            globeRef.current.controls().autoRotate = false;
            setHoveredCountry(polygon.properties.NAME);
        } else {
            globeRef.current.controls().autoRotate = true;
            setHoveredCountry(null);
        }
        return;
    }

    const renderTooltip = () => {
        const images = VISITED_COUNTRY_IMAGES[hoveredCountry as keyof typeof VISITED_COUNTRY_IMAGES];

        return (
            <div className="grid grid-cols-2 gap-1 bg-transparent min-w-64 p-0 absolute fade-in" style={{ top: tooltipPosition.y, left: tooltipPosition.x, animationDuration: '0.2s' }}>
                {images.map((image, index) => (
                    <div className="col-span-1 relative h-32 w-32 flex justify-center items-center overflow-hidden rounded">
                        <img src={image.src} alt={image.alt} key={index} className="absolute w-full" />
                    </div>
                ))}
            </div>
        ) as ReactHTMLElement<HTMLElement>
    }

    return (
        <div ref={globeContainerRef} className="w-full h-full fade-in flex justify-center items-center relative" style={{ animationDelay: '0.9s' }}>
          <Globe 
            ref={globeRef}
            width={globeWidth} 
            height={globeHeight}
            backgroundColor={GLOBE_BACKGROUND_COLOR}
            polygonsData={globeTopology.features}
            polygonStrokeColor={handleGetPolygonColor}
            polygonSideColor={handleGetPolygonColor}
            polygonCapColor={() => 'transparent'}
            polygonAltitude={0.002}
            atmosphereColor={GLOBE_PRIMARY_COLOR}
            onPolygonHover={handlePolygonHover}
          />
          {hoveredCountry && renderTooltip()}
        </div>
    )
}