import { Link } from "@/components/ui/link"

export default function Header() {
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