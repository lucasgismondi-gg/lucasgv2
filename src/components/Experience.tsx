// Frontend: React, Next.js, Tailwind CSS, Typescript, React Native, Svelte
// Backend: Node.js, Express, Python, FastAPI, PHP, PostgreSQL, MySQL, MongoDB, Docker, Redis, Github Actions
// Cloud: AWS, Google Cloud, Expo EAS

export default function Experience() {
    return (
      <div className="flex flex-col h-1/2 gap-[1px]">
        <div className="flex w-full h-full border-animation bg-background flex flex-col">
          <p className="text-xs p-2 fade-in" style={{ animationDelay: '0.1s' }}>Experience</p>
          <div className="flex flex-row justify-around grid grid-cols-5 items-center">
            <img src="/images/lazer-logo.png" alt="Lazer Technologies Logo" className="col-span-1"/>
            <img src="/images/wealthagile-logo.png" alt="WealthAgile Logo" className="col-span-1"/>
            <img src="/images/bitbuy-logo.png" alt="Bitbuy Logo" className="col-span-1"/>
            <img src="/images/tablo-logo.png" alt="Tablo Creative Logo" className="col-span-1"/>
            <img src="/images/loopio-logo.png" alt="Loopio Logo" className="col-span-1"/>
          </div>
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