// Frontend: Tailwind CSS, React Native

import { Marquee } from "@/components/ui/marquee"

type ExperienceProps = {
  setHoveredExperience: (experience: string | null) => void;
  setClickedExperience: (experience: string | null) => void;
}

export default function Experience({ setHoveredExperience, setClickedExperience }: ExperienceProps) {
    return (
      <div className="flex flex-col h-[50vh] md:h-1/2 gap-[1px]">
        <div className="w-full h-full border-animation bg-background flex flex-col">
          <p className="text-xs p-2 fade-in" style={{ animationDelay: '0.1s' }}>Experience</p>
          <Marquee
            onMouseEnter={(id: string) => setHoveredExperience(id)}
            onMouseLeave={() => setHoveredExperience(null)}
            onClick={(id: string) => setClickedExperience(id)}
            slides={[
              {
                id: 'lazer',
                render: <div className="px-6 h-full w-full flex items-center justify-center fade-in" style={{ animationDelay: '0.5s' }}>
                            <img src="/images/experience/lazer-logo.png" alt="Lazer Technologies Logo" className="max-h-[25px]"/>
                        </div>,
              },
              {
                id: 'unmet',
                render: <div className="px-6 h-full w-full flex items-center justify-center fade-in" style={{ animationDelay: '0.6s' }}>
                            <img src="/images/experience/unmet-logo.png" alt="Unmet Logo" className="max-h-[25px]"/>
                        </div>,
              },
              {
                id: 'wealthagile',
                render: <div className="px-6 h-full w-full flex items-center justify-center fade-in" style={{ animationDelay: '0.7s' }}>
                            <img src="/images/experience/wealthagile-logo.png" alt="WealthAgile Logo" className="max-h-[32px]"/>
                        </div>,
              },
              {
                id: 'bitbuy',
                render: <div className="px-6 h-full w-full flex items-center justify-center fade-in" style={{ animationDelay: '0.8s' }}>
                          <img src="/images/experience/bitbuy-logo.png" alt="Bitbuy Logo" className="max-h-[32px]"/>
                        </div>,
              },
              {
                id: 'tablo',
                render: <div className="px-6 h-full w-full flex items-center justify-center fade-in" style={{ animationDelay: '0.9s' }}>
                            <img src="/images/experience/tablo-logo.png" alt="Tablo Creative Logo" className="max-h-[30px]"/>
                        </div>,
              },
              {
                id: 'loopio',
                render: <div className="px-6 h-full w-full flex items-center justify-center fade-in" style={{ animationDelay: '1.0s' }}>
                            <img src="/images/experience/loopio-logo.png" alt="Loopio Logo" className="max-h-[30px]"/>
                        </div>,
              },
              {
                id: 'lazer',
                render: <div className="px-6 h-full w-full flex items-center justify-center fade-in" style={{ animationDelay: '0s' }}>
                  <img src="/images/experience/lazer-logo.png" alt="Lazer Technologies Logo" className="max-h-[25px]"/>
              </div>,
              },
              {
                id: 'unmet',
                render: <div className="px-6 h-full w-full flex items-center justify-center fade-in" style={{ animationDelay: '0s' }}>
                            <img src="/images/experience/unmet-logo.png" alt="Unmet Logo" className="max-h-[25px]"/>
                        </div>,
              },
              {
                id: 'wealthagile',
                render: <div className="px-6 h-full w-full flex items-center justify-center fade-in" style={{ animationDelay: '0.1s' }}>
                            <img src="/images/experience/wealthagile-logo.png" alt="WealthAgile Logo" className="max-h-[32px]"/>
                        </div>,
              },
              {
                id: 'bitbuy',
                render: <div className="px-6 h-full w-full flex items-center justify-center fade-in" style={{ animationDelay: '0.2s' }}>
                            <img src="/images/experience/bitbuy-logo.png" alt="Bitbuy Logo" className="max-h-[32px]"/>
                        </div>,
              },
              {
                id: 'tablo',
                render: <div className="px-6 h-full w-full flex items-center justify-center fade-in" style={{ animationDelay: '0.3s' }}>
                            <img src="/images/experience/tablo-logo.png" alt="Tablo Creative Logo" className="max-h-[30px]"/>
                        </div>,
              },
              {
                id: 'loopio',
                render: <div className="px-6 h-full w-full flex items-center justify-center fade-in" style={{ animationDelay: '0.4s' }}>
                            <img src="/images/experience/loopio-logo.png" alt="Loopio Logo" className="max-h-[30px]"/>
                        </div>,
              },
          ]} />
        </div>
        <div className="flex w-full h-full flex-col border-animation border-animation-delay-1 bg-background">
          <p className="text-xs p-2 fade-in" style={{ animationDelay: '0.2s' }}>Frontend</p>
          <div className="flex w-full h-full flex-row justify-center mt-2">
            <div className="px-6 fade-in" style={{ animationDelay: '0.2s' }}>
              <img src="/images/frontend/react-logo.png" alt="React Logo" className="max-h-[30px]"/>
            </div>
            <div className="px-6 fade-in" style={{ animationDelay: '0.3s' }}>
              <img src="/images/frontend/reactnative-logo.png" alt="React Native Logo" className="max-h-[30px]"/>
            </div>
            <div className="px-6 fade-in" style={{ animationDelay: '0.4s' }}>
              <img src="/images/frontend/typescript-logo.png" alt="Typescript Logo" className="max-h-[25px]"/>
            </div>
            <div className="px-6 fade-in" style={{ animationDelay: '0.5s' }}>
              <img src="/images/frontend/next-logo.png" alt="Nextjs Logo" className="max-h-[25px]"/>
            </div>
            <div className="px-6 fade-in" style={{ animationDelay: '0.6s' }}>
              <img src="/images/frontend/tailwind-logo.png" alt="Tailwind Logo" className="max-h-[30px]"/>
            </div>
          </div>
        </div>
        <div className="flex w-full h-full flex-col border-animation border-animation-delay-2 bg-background">
          <p className="text-xs p-2 fade-in" style={{ animationDelay: '0.3s' }}>Backend</p>
          <div className="flex w-full h-full flex-row justify-center mt-2">
            <div className="px-6 fade-in" style={{ animationDelay: '0.3s' }}>
              <img src="/images/backend/nodejs-logo.png" alt="Nodejs Logo" className="max-h-[35px]"/>
            </div>
            <div className="px-6 fade-in" style={{ animationDelay: '0.4s' }}>
              <img src="/images/backend/python-logo.png" alt="Python Logo" className="max-h-[30px]"/>
            </div>
            <div className="px-6 fade-in" style={{ animationDelay: '0.5s' }}>
              <img src="/images/backend/php-logo.png" alt="PHP Logo" className="max-h-[30px]"/>
            </div>
            <div className="px-6 fade-in" style={{ animationDelay: '0.6s' }}>
              <img src="/images/backend/postgresql-logo.png" alt="PostgreSQL Logo" className="max-h-[35px]"/>
            </div>
            <div className="px-6 fade-in" style={{ animationDelay: '0.7s' }}>
              <img src="/images/backend/mongodb-logo.png" alt="MongoDB Logo" className="max-h-[30px]"/>
            </div>
            <div className="px-6 fade-in" style={{ animationDelay: '0.8s' }}>
              <img src="/images/backend/docker-logo.png" alt="Docker Logo" className="max-h-[30px]"/>
            </div>
          </div>
        </div>
        <div className="flex w-full h-full flex-col border-animation border-animation-delay-3 bg-background">
          <p className="text-xs p-2 fade-in" style={{ animationDelay: '0.4s' }}>Cloud</p>
          <div className="flex w-full h-full flex-row justify-center mt-2">
            <div className="px-6 fade-in" style={{ animationDelay: '0.4s' }}>
              <img src="/images/cloud/aws-logo.png" alt="AWS Logo" className="max-h-[35px]"/>
            </div>
            <div className="px-6 fade-in" style={{ animationDelay: '0.5s' }}>
              <img src="/images/cloud/gcp-logo.png" alt="GCP Logo" className="max-h-[30px]"/>
            </div>
            <div className="px-6 fade-in" style={{ animationDelay: '0.6s' }}>
              <img src="/images/cloud/expo-logo.png" alt="Expo Logo" className="max-h-[30px]"/>
            </div>
          </div>
        </div>
      </div>
    )
  }