import "./intro.scss"
import { init } from "ityped"
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed:60,
            strings: ["Developer"],
        });
    },[]);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/IMG_0493.jpg" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2> <span> Hi There, </span> I'm </h2>
                    <h1>P. Surya Vardhan Reddy</h1>
                    <h3>Frontend <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt=""/>
                </a>
            </div>

        </div>
    )
}
