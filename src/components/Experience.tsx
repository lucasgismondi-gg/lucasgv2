// Frontend: React, Next.js, Tailwind CSS, Typescript, React Native, Svelte
// Backend: Node.js, Express, Python, FastAPI, PHP, PostgreSQL, MySQL, MongoDB, Docker, Redis, Github Actions
// Cloud: AWS, Google Cloud, Expo EAS

import { Marquee } from "@/components/ui/marquee"

type ExperienceProps = {
  setHoveredExperience: (experience: string | null) => void;
  setClickedExperience: (experience: string | null) => void;
}

export default function Experience({ setHoveredExperience, setClickedExperience }: ExperienceProps) {
    return (
      <div className="flex flex-col h-[50vh] md:h-1/2 gap-[1px]">
        <div className="flex w-full h-full border-animation bg-background flex flex-col">
          <p className="text-xs p-2 fade-in" style={{ animationDelay: '0.1s' }}>Experience</p>
          <Marquee
            onMouseEnter={(id: string) => setHoveredExperience(id)}
            onMouseLeave={() => setHoveredExperience(null)}
            onClick={(id: string) => setClickedExperience(id)}
            slides={[
              {
                id: 'lazer',
                render: <div className="px-6 h-full w-full flex items-center justify-center">
                            <img src="/images/experience/lazer-logo.png" alt="Lazer Technologies Logo" width={100}/>
                        </div>,
              },
              {
                id: 'unmet',
                render: <div className="px-6 h-full w-full flex items-center justify-center">
                            <img src="/images/experience/unmet-logo.png" alt="Unmet Logo" width={100}/>
                        </div>,
              },
              {
                id: 'wealthagile',
                render: <div className="px-6 h-full w-full flex items-center justify-center">
                            <img src="/images/experience/wealthagile-logo.png" alt="WealthAgile Logo" width={150}/>
                        </div>,
              },
              {
                id: 'bitbuy',
                render: <div className="px-6 h-full w-full flex items-center justify-center">
                          <img src="/images/experience/bitbuy-logo.png" alt="Bitbuy Logo" width={120}/>
                        </div>,
              },
              {
                id: 'tablo',
                render: <div className="px-6 h-full w-full flex items-center justify-center">
                            <img src="/images/experience/tablo-logo.png" alt="Tablo Creative Logo" width={100}/>
                        </div>,
              },
              {
                id: 'loopio',
                render: <div className="px-6 h-full w-full flex items-center justify-center">
                            <img src="/images/experience/loopio-logo.png" alt="Loopio Logo" width={100}/>
                        </div>,
              },
              {
                id: 'lazer',
                render: <div className="px-6 h-full w-full flex items-center justify-center">
                  <img src="/images/experience/lazer-logo.png" alt="Lazer Technologies Logo" width={100}/>
              </div>,
              },
              {
                id: 'unmet',
                render: <div className="px-6 h-full w-full flex items-center justify-center">
                            <img src="/images/experience/unmet-logo.png" alt="Unmet Logo" width={100}/>
                        </div>,
              },
              {
                id: 'wealthagile',
                render: <div className="px-6 h-full w-full flex items-center justify-center">
                            <img src="/images/experience/wealthagile-logo.png" alt="WealthAgile Logo" width={150}/>
                        </div>,
              },
              {
                id: 'bitbuy',
                render: <div className="px-6 h-full w-full flex items-center justify-center">
                            <img src="/images/experience/bitbuy-logo.png" alt="Bitbuy Logo" width={120}/>
                        </div>,
              },
              {
                id: 'tablo',
                render: <div className="px-6 h-full w-full flex items-center justify-center">
                            <img src="/images/experience/tablo-logo.png" alt="Tablo Creative Logo" width={100}/>
                        </div>,
              },
              {
                id: 'loopio',
                render: <div className="px-6 h-full w-full flex items-center justify-center">
                            <img src="/images/experience/loopio-logo.png" alt="Loopio Logo" width={100}/>
                        </div>,
              },
          ]} />
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