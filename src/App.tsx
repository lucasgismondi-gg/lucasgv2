import { Link } from "@/components/ui/link"

function App() {

  return (
    <div className="flex flex-col h-screen bg-border gap-[1px]">
      <div className="flex flex-row justify-between p-2 bg-background">
        <p className="text-xs">Lucas Gismondi</p>
        <div className="flex flex-row gap-1">
          <Link className="text-xs" href="/">Resume</Link>
          <Link className="text-xs" href="/">Contact</Link>
        </div>
      </div>
      <div className="flex flex-col h-1/2 gap-[1px]">
        <div className="flex w-full h-full border-animation bg-background">
          <p className="text-xs p-2">Experience</p>
        </div>
        <div className="flex w-full h-full border-animation bg-background">
          <p className="text-xs p-2">Frontend</p>
        </div>
        <div className="flex w-full h-full border-animation bg-background">
          <p className="text-xs p-2">Backend</p>
        </div>
        <div className="flex w-full h-full border-animation bg-background">
          <p className="text-xs p-2">Cloud</p>
        </div>
      </div>
      <div className="flex flex-row justify-between h-1/2 gap-[1px]">
        <div className="w-1/2 flex flex-col gap-[1px]">
          <div className="flex h-full w-full items-center justify-center p-2 bg-background">
            <p className="text-xs">About me</p>
          </div>
          <div className="p-2 bg-background">
            <p className="text-xs">Core principles</p>
          </div>
        </div>  
        <div className="w-1/2 flex justify-center items-center p-2 bg-background">
          <p className="text-xs">Interactive Globe</p>
        </div>
      </div>
      <div className="flex flex-row justify-between p-2 bg-background">
        <div className="flex flex-row gap-1">
          <Link className="text-xs" href="/">Github</Link>
          <Link className="text-xs" href="/">LinkedIn</Link>
          <Link className="text-xs" href="/">X</Link>
          <Link className="text-xs" href="/">Instagram</Link>
        </div>
        <p className="text-xs">{`< ${new Date().getFullYear()} >`}</p>
      </div>
    </div>
  )
}

export default App
