import { Link } from "@/components/ui/link"

export default function Footer() {
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