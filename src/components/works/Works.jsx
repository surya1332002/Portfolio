import { useState } from "react";
import "./works.scss"

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
      {
        id: "1",
        icon: "./assets/mobile.png",
        title: "HTML CSS",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        img: "./assets/Screenshot (78).png",
          
      },
      {
        id: "2",
        icon: "./assets/globe.png",
        title: "Beans",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: "./assets/beans.jpg",
        
      },
      {
        id: "3",
        icon: "./assets/writing.png",
        title: "diabetes",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: "../assets/diabetes.jpg",
      },
    ];
    const handleClick = (way) => {
        way === "left"
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
          : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      };

    return (
        <div className="works" id="works">
            <div className = "slider" 
            style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {data.map(d=>(
                <div className="container">
                    <div className="items">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <div className="rightContainer">
                                <div className="imgContainer">
                                    <img src={d.img} alt="" />
                                </div>
                                
                                
                                
                            </div>
                        </div>      
                    </div>
                </div>
                ))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=> handleClick("left")}/>   
            <img src="assets/arrow.png" className="arrow right" alt=""onClick={()=> handleClick("right")}/>   
        </div>
    );
}
