import useEmblaCarousel from 'embla-carousel-react'
import Autoscroll from 'embla-carousel-auto-scroll'
import { cn } from '@/lib/utils'
type MarqueeProps = {
    className?: string;
    slides: {
        id: string,
        render: React.ReactNode
    }[],
    speed?: number;
    onMouseLeave?: () => void;
    onMouseEnter?: (id: string) => void;
    onClick?: (id: string) => void;
}

function Marquee({ slides, speed = 0.5, onMouseLeave, onMouseEnter, onClick, className }: MarqueeProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoscroll({ speed, playOnInit: true, stopOnMouseEnter: true, startDelay: 0 })])

    return (
        <div
            className={cn("embla", className)}
            ref={emblaRef}
            onMouseLeave={() => {
                emblaApi?.plugins().autoScroll.play()
                onMouseLeave && onMouseLeave()
            }}
        >
            <div className="embla__container">
                {slides.map((slide, index) => (
                    <div
                        className="embla__slide"
                        key={index}
                        onClick={() => onClick && onClick(slide.id)}
                        onMouseEnter={() => onMouseEnter && onMouseEnter(slide.id)}
                    >
                            {slide.render}
                    </div>
                ))}
            </div>
        </div>
    )
}

export { Marquee }