import useEmblaCarousel from 'embla-carousel-react'
import Autoscroll from 'embla-carousel-auto-scroll'

type MarqueeProps = {
    slides: {
        id: string,
        render: React.ReactNode
    }[],
    speed?: number;
    onMouseLeave?: () => void;
    onMouseEnter?: (id: string) => void;
    onClick?: (id: string) => void;
}

function Marquee({ slides, speed = 0.5, onMouseLeave, onMouseEnter, onClick }: MarqueeProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoscroll({ speed, playOnInit: true, stopOnMouseEnter: true, startDelay: 0 })])

    return (
        <div
            className="embla"
            ref={emblaRef}
            onMouseLeave={() => {
                emblaApi?.plugins().autoScroll.play()
                onMouseLeave && onMouseLeave()
            }}
        >
            <div className="embla__container">
                {slides.map((slide) => (
                    <div
                        className="embla__slide"
                        key={slide.id}
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