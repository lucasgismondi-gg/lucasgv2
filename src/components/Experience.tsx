import { useState, useEffect } from "react"
import { Marquee } from "@/components/ui/marquee"
import { cn } from "@/lib/utils"

const EXPERIENCE_TO_LOGO_MAP = {
  "lazer": {
    "react": true,
    "reactnative": true,
    "typescript": true,
    "next": true,
    "tailwind": true,
    "nodejs": true,
    "python": true,
    "postgresql": true,
    "docker": true,
    "aws": true,
    "gcp": true,
    "expo": true,
  },
  "unmet": {
    "react": true,
    "reactnative": true,
    "typescript": true,
    "next": true,
    "tailwind": true,
    "expo": true,
  },
  "wealthagile": {
    "react": true,
    "reactnative": true,
    "typescript": true,
    "next": true,
    "tailwind": true,
    "nodejs": true,
    "mongodb": true,
    "aws": true,
    "expo": true,
  },
  "bitbuy": {
    "react": true,
    "reactnative": true,
    "typescript": true,
    "python": true,
    "postgresql": true,
    "expo": true,
  },
  "tablo": {
    "react": true,
    "typescript": true,
    "nodejs": true,
  },
  "loopio": {
    "react": true,
    "typescript": true,
    "php": true,
    "postgresql": true,
    "docker": true,
    "aws": true,
  },
}

type ExperienceProps = {
  setHoveredExperience: (experience: string | null) => void;
  setClickedExperience: (experience: string | null) => void;
  experience: string | null;
}

export default function Experience({ setHoveredExperience, setClickedExperience, experience }: ExperienceProps) {
    const [hasLoaded, setHasLoaded] = useState(false)

    // Prevents fade in animation from happening after initial load
    useEffect(() => {
      setTimeout(() => {
        setHasLoaded(true)
      }, 2000)
    }, [])

    const getExperienceItem = ({ id, animationDelay, image, imageClassName }: { id: string, animationDelay: string, image: string, imageClassName: string }) => {
      return {
        id,
        render: <div className={cn("px-3 md:px-6 h-full w-full flex items-center justify-center", !hasLoaded && "fade-in")} style={{ animationDelay }}>
                    <img src={`/images/experience/${image}`} alt={`${id} logo`} className={imageClassName}/>
                </div>,
      }
    }

    const FrontendLogo = ({ id, image, alt, animationDelay, className }: { id: string, image: string, alt: string, animationDelay: string, className: string }) => (
      <div className={cn(!hasLoaded && "fade-in")} style={{ animationDelay }}>
        {/* @ts-ignore */}
        <img src={`/images/frontend/${image}`} alt={alt} className={cn(className, experience && !EXPERIENCE_TO_LOGO_MAP[experience][id] ? "opacity-5" : "opacity-100")}/> 
      </div>
    )

    const BackendLogo = ({ id, image, alt, animationDelay, className }: { id: string, image: string, alt: string, animationDelay: string, className: string }) => (
      <div className={cn(!hasLoaded && "fade-in")} style={{ animationDelay }}>
        {/* @ts-ignore */}
        <img src={`/images/backend/${image}`} alt={alt} className={cn(className, experience && !EXPERIENCE_TO_LOGO_MAP[experience][id] ? "opacity-5" : "opacity-100")}/>
      </div>
    )

    const CloudLogo = ({ id, image, alt, animationDelay, className }: { id: string, image: string, alt: string, animationDelay: string, className: string }) => (
      <div className={cn(!hasLoaded && "fade-in")} style={{ animationDelay }}>
        {/* @ts-ignore */}
        <img src={`/images/cloud/${image}`} alt={alt} className={cn(className, experience && !EXPERIENCE_TO_LOGO_MAP[experience][id] ? "opacity-5" : "opacity-100")}/>
      </div>
    )

    return (
      <div className="flex flex-col h-[50vh] md:h-1/2 gap-[1px]">
        <div className="w-full h-full border-animation bg-background flex flex-col relative">
          <p className="text-xs font-medium px-2 py-1 md:p-2 fade-in absolute top-0 left-0" style={{ animationDelay: '0.1s' }}>Experience</p>
          <div className="flex w-full h-full">
            <Marquee
              className="flex justify-center"
              onMouseEnter={(id: string) => setHoveredExperience(id)}
              onMouseLeave={() => setHoveredExperience(null)}
              onClick={(id: string) => setClickedExperience(id)}
              slides={[
                getExperienceItem({ id: 'lazer', animationDelay: '0.5s', image: 'lazer-logo.png', imageClassName: 'max-h-[25px]' }),
                getExperienceItem({ id: 'unmet', animationDelay: '0.6s', image: 'unmet-logo.png', imageClassName: 'max-h-[25px]' }),
                getExperienceItem({ id: 'wealthagile', animationDelay: '0.7s', image: 'wealthagile-logo.png', imageClassName: 'max-h-[32px]' }),
                getExperienceItem({ id: 'bitbuy', animationDelay: '0.8s', image: 'bitbuy-logo.png', imageClassName: 'max-h-[32px]' }),
                getExperienceItem({ id: 'tablo', animationDelay: '0.9s', image: 'tablo-logo.png', imageClassName: 'max-h-[30px]' }),
                getExperienceItem({ id: 'loopio', animationDelay: '1.0s', image: 'loopio-logo.png', imageClassName: 'max-h-[30px]' }),
                getExperienceItem({ id: 'lazer', animationDelay: '0s', image: 'lazer-logo.png', imageClassName: 'max-h-[25px]' }),
                getExperienceItem({ id: 'unmet', animationDelay: '0s', image: 'unmet-logo.png', imageClassName: 'max-h-[25px]' }),
                getExperienceItem({ id: 'wealthagile', animationDelay: '0.1s', image: 'wealthagile-logo.png', imageClassName: 'max-h-[32px]' }),
                getExperienceItem({ id: 'bitbuy', animationDelay: '0.2s', image: 'bitbuy-logo.png', imageClassName: 'max-h-[32px]' }),
                getExperienceItem({ id: 'tablo', animationDelay: '0.3s', image: 'tablo-logo.png', imageClassName: 'max-h-[30px]' }),
                getExperienceItem({ id: 'loopio', animationDelay: '0.4s', image: 'loopio-logo.png', imageClassName: 'max-h-[30px]' }),
            ]} />
          </div>
        </div>
        <div className="flex w-full h-full flex-col border-animation border-animation-delay-1 bg-background relative justify-center">
          <p className="text-xs font-medium px-2 py-1 md:p-2 fade-in absolute top-0 left-0" style={{ animationDelay: '0.2s' }}>Frontend</p>
          <div className="flex w-full flex-row justify-center flex-wrap items-center gap-3 md:gap-6 px-2">
            <FrontendLogo id="react" image="react-logo.png" alt="React Logo" animationDelay="0.2s" className="max-h-[25px] md:max-h-[30px]"/>
            <FrontendLogo id="reactnative" image="reactnative-logo.png" alt="React Native Logo" animationDelay="0.3s" className="max-h-[25px] md:max-h-[30px]"/>
            <FrontendLogo id="typescript" image="typescript-logo.png" alt="Typescript Logo" animationDelay="0.4s" className="max-h-[25px]"/>
            <FrontendLogo id="next" image="next-logo.png" alt="Nextjs Logo" animationDelay="0.5s" className="max-h-[20px] md:max-h-[25px]"/>
            <FrontendLogo id="tailwind" image="tailwind-logo.png" alt="Tailwind Logo" animationDelay="0.6s" className="max-h-[25px] md:max-h-[30px]"/>
          </div>
        </div>
        <div className="flex w-full h-full flex-col border-animation border-animation-delay-2 bg-background relative justify-center">
          <p className="text-xs font-medium px-2 py-1 md:p-2 fade-in absolute top-0 left-0" style={{ animationDelay: '0.3s' }}>Backend</p>
          <div className="flex flex-wrap w-full flex-row justify-center items-center gap-3 md:gap-6 px-2">
            <BackendLogo id="nodejs" image="nodejs-logo.png" alt="Nodejs Logo" animationDelay="0.3s" className="max-h-[25px] md:max-h-[35px]"/>
            <BackendLogo id="python" image="python-logo.png" alt="Python Logo" animationDelay="0.4s" className="max-h-[25px] md:max-h-[30px]"/>
            <BackendLogo id="php" image="php-logo.png" alt="PHP Logo" animationDelay="0.5s" className="max-h-[25px] md:max-h-[30px]"/>
            <BackendLogo id="postgresql" image="postgresql-logo.png" alt="PostgreSQL Logo" animationDelay="0.6s" className="max-h-[25px] md:max-h-[35px]"/>
            <BackendLogo id="mongodb" image="mongodb-logo.png" alt="MongoDB Logo" animationDelay="0.7s" className="max-h-[25px] md:max-h-[30px]"/>
            <BackendLogo id="docker" image="docker-logo.png" alt="Docker Logo" animationDelay="0.8s" className="max-h-[25px] md:max-h-[30px]"/>
          </div>
        </div>
        <div className="flex w-full h-full flex-col border-animation border-animation-delay-3 bg-background relative justify-center">
          <p className="text-xs font-medium px-2 py-1 md:p-2 fade-in absolute top-0 left-0" style={{ animationDelay: '0.4s' }}>Cloud</p>
          <div className="flex w-full flex-row justify-center items-center gap-3 md:gap-6 px-2">
            <CloudLogo id="aws" image="aws-logo.png" alt="AWS Logo" animationDelay="0.4s" className="max-h-[35px]"/>
            <CloudLogo id="gcp" image="gcp-logo.png" alt="GCP Logo" animationDelay="0.5s" className="max-h-[30px]"/>
            <CloudLogo id="expo" image="expo-logo.png" alt="Expo Logo" animationDelay="0.6s" className="max-h-[30px]"/>
          </div>
        </div>
      </div>
    )
  }