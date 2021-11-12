import React from 'react'

function Info() {
    return (
        <section className="info" >
            <h1>Stack used:</h1>
            <div className="infoImgs">
                <img src="/pictures/js.png"/>
                <img src="/pictures/sass.png"/>
                <img src="/pictures/redux.png"/>
                <img src="/pictures/react.png"/>
                <img src="/pictures/router.png"/>
                <div>
                    <img src="/pictures/gsap.svg"/>
                    <p><b>Gsap</b></p>
                </div>
            </div>
            <h1>Contact:</h1>
            <a href="https://www.facebook.com/marcin.ziemba.79/" target="_blank"><img src="/pictures/fb.png" style={{height:"15vw"}}/></a>
        </section>
    )
}

export default Info
