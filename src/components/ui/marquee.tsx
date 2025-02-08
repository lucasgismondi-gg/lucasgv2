import useEmblaCarousel from 'embla-carousel-react'
import Autoscroll from 'embla-carousel-auto-scroll'

type MarqueeProps = {
    slides: React.ReactNode[],
    speed?: number;
}

function Marquee({ slides, speed = 0.5 }: MarqueeProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoscroll({ speed, playOnInit: true, stopOnMouseEnter: true, startDelay: 0 })])

    return (
        <div className="embla" ref={emblaRef} onMouseLeave={() => emblaApi?.plugins().autoScroll.play()}>
            <div className="embla__container">
                {slides.map((slide, index) => (
                    <div className="embla__slide" key={index}>{slide}</div>
                ))}
            </div>
        </div>
    )
}

export { Marquee }