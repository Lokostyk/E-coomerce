import React,{useRef,useEffect} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

export default function AboutUs() {
    let itemRef = useRef(null)
    useEffect(() => {
        const items = itemRef.getElementsByTagName("h1")
        for(let item of items){
            gsap.to(item,{scrollTrigger:{trigger:item,start:"top center",end:"top 40%",scrub:1},transform:"scale(1.02)",duration:1})
        }
    }, [itemRef])
    return (
            <div ref={e=>itemRef=e}className="aboutUs">
                <article>
                    <div className="textContainer">
                        <h1>Best fabric on the market</h1>
                        <p>
                            Our high-quality fabrics feature fibers that are closely and tightly woven together. There should be no obvious gaps between fibers as that’s often an indication of weakness in the fiber quality. These fabrics can tear easily. High quality fabrics have a more well-balanced combination of vertical and horizontal weaves, which make for a stronger fabric surface.
                        </p>
                    </div>
                    <img src="pictures/fabric.webp" alt="Image of a fabric"/>
                </article>
                <article>
                    <img src="pictures/snowy-mountains.jpg" alt="Walking people on snowy mountains"/>
                    <div className="textContainer">
                        <h1>Endurant in every environment</h1>
                        <p>
                            Warm clothing for Antarctica or any cold conditions, these principles apply to anywhere when the temperature starts to drop and the wind to blow. The "layer method" of dressing is more effective than a single bulky garment. Several layers are built up, each of which has its own part to contribute, insulating air is trapped between as well as within layers, flexibility is maintained as conditions change.
                        </p>
                    </div>
                </article>
                <article>
                    <div className="textContainer">
                        <h1>Comfort and quality</h1>
                        <p>
                            If there’s one thing every traveler should have, it’s high quality clothing from one of the best outdoor brands on the market.

When I think about great outdoor clothing companies, I look to see if they have three things: comfort, durability, and style.

The last of these often tend to be the hardest to find. There’s no point in having a warm coat that lasts a lifetime if it looks terrible.
                        </p>
                    </div>
                    <img src="pictures/man-jacket.jpg" alt="Man weraing a jacket"/>
                </article>
            </div>
    )
}
