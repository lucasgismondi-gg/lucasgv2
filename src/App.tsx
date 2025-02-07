import { Link } from "@/components/ui/link"

function App() {

  return (
    <div className="flex flex-col h-screen gap-[1px]">
      <div className="flex flex-row justify-between p-2 bg-background">
        <p className="text-xs fade-in">Lucas Gismondi</p>
        <div className="flex flex-row gap-1 fade-in" style={{ animationDelay: '0.5s' }}>
          <Link className="text-xs" href="/">Resume</Link>
          <Link className="text-xs" href="/">Contact</Link>
        </div>
      </div>
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
      <div className="flex flex-row justify-between h-1/2 gap-[1px] border-animation border-animation-delay-4">
        <div className="w-1/2 flex flex-col gap-[1px]">
          <div className="flex h-full w-full items-center justify-center p-2 bg-background">
            <p className="text-xs fade-in" style={{ animationDelay: '0.5s' }}>About me</p>
          </div>
          <div className="p-2 bg-background">
            <p className="text-xs fade-in" style={{ animationDelay: '0.6s' }}>Core principles</p>
          </div>
        </div>  
        <div className="w-1/2 flex justify-center items-center p-2 bg-background">
          <p className="text-xs fade-in" style={{ animationDelay: '0.9s' }}>Interactive Globe</p>
        </div>
      </div>
      <div className="flex flex-row justify-between p-2 bg-background border-animation border-animation-delay-5">
        <div className="flex flex-row gap-1 fade-in" style={{ animationDelay: '0.7s' }}>
          <Link className="text-xs" href="/">Github</Link>
          <Link className="text-xs" href="/">LinkedIn</Link>
          <Link className="text-xs" href="/">X</Link>
          <Link className="text-xs" href="/">Instagram</Link>
        </div>
        <p className="text-xs fade-in" style={{ animationDelay: '1s' }}>{`< ${new Date().getFullYear()} >`}</p>
      </div>
    </div>
  )
}

export default App
