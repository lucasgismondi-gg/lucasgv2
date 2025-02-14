import { Link } from "@/components/ui/link"

export default function Footer() {
    return (
      <div className="flex flex-row justify-between p-2 bg-background border-animation border-animation-delay-5">
        <div className="flex flex-row gap-1 fade-in" style={{ animationDelay: '0.7s' }}>
          <Link className="text-xs font-medium" href="https://github.com/lucasgismondi-gg">Github</Link>
          <Link className="text-xs font-medium" href="https://www.linkedin.com/in/lucasgismondi/">LinkedIn</Link>
          <Link className="text-xs font-medium" href="https://x.com/lucasg_dev">X</Link>
          <Link className="text-xs font-medium" href="https://www.instagram.com/lucas.gismondi/">Instagram</Link>
        </div>
        <p className="text-xs font-medium fade-in" style={{ animationDelay: '1s' }}>{`< ${new Date().getFullYear()} >`}</p>
      </div>
    )
  }