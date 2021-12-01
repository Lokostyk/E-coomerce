import React from 'react'

function Info() {
    return (
        <section className="info" >
            <h1>Stack used:</h1>
            <div className="infoImgs">
                <div className="imgContainer">
                    <img src="/pictures/javascript.svg"/>
                    <p><b>Javascript</b></p>
                </div>
                <div className="imgContainer">
                    <img src="/pictures/react.svg"/>
                    <p><b>React</b></p>
                </div>
                <div className="imgContainer">
                    <img src="/pictures/redux.svg"/>
                    <p><b>React-redux</b></p>
                </div>
                <div className="imgContainer">
                    <img src="/pictures/router.png"/>
                    <p><b>React-router</b></p>
                </div>
                <div className="imgContainer">
                    <img src="/pictures/sass.svg"/>
                    <p><b>Sass</b></p>
                </div>
                <div className="imgContainer">
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
