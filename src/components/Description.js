import React, { useEffect, useState } from 'react';
import BtnSlider from './BtnSlider';
import dataSlider from '../data/dataSlider';


const Description = () => {

    const [slideIndex, setSlideIndex] = useState(1)

    useEffect(() => {
        let tab = ["ⴱⵓⵎⴰⵍ - ⵏ - ⴷⴰⴷⵙⵙ", "Būmālen - Dādis", " س داد- نلاموب ", "est- une - commune - urbaine - du - Maroc", "située  -dans - la - région - de", " Drâa-Tafilalet", "province - de - Tinghir"]
        let wordIndex = 0
        let letterIndex = 0

        const target = document.getElementById("text-target")
        const createLetter = () => {
            const letter = document.createElement("span")
            target.appendChild(letter)
            letter.classList.add("letter")
            letter.style.opacity = "1"
            letter.style.animation = "anim 15s ease forwards"
            letter.textContent = tab[wordIndex][letterIndex]

            setTimeout(() => {
                letter.remove()
            }, 2030)
        }
        const loop = () => {
            setTimeout(() => {
                if (wordIndex >= tab.length) {
                    wordIndex = 0
                    letterIndex = 0
                    loop()
                } else if (letterIndex < tab[wordIndex].length) {
                    createLetter()
                    letterIndex++
                    loop()

                } else {
                    letterIndex = 0
                    wordIndex++
                    setTimeout(() => {
                        loop()
                    }, 2080)
                }
            }, 1)
        }
        loop()
    }, [])

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    } 
    return (
        <div className="container-slider">
            {dataSlider.map((item, index) => {
                return (
                    <div key={item.id}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                        <img
                            src={process.env.PUBLIC_URL + `/assets/img/img${index + 1}.jpg`}
                            alt='bmln'
                        />
                    </div>
                )
            })}
            <span className="text-dynamique">
                <span id="text-target"></span>
            </span>
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            <div className="container-dots">
                {Array.from({ length: 16 }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
                </div> 
        </div>
    );
};

export default Description;