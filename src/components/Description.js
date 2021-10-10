import React, { useEffect } from 'react';

const Description = () => {
    useEffect(() => {
        let tab=["ⴱⵓⵎⴰⵍ - ⵏ - ⴷⴰⴷⵙⵙ","Būmālen - Dādis"," س داد- نلاموب " ,"est- une - commune - urbaine - du - Maroc","située  -dans - la - région - de"," Drâa-Tafilalet","province - de - Tinghir"]
        let wordIndex=0
        let letterIndex=0

        const target = document.getElementById("text-target")
        const createLetter=() =>{
            const letter =document.createElement("span")
            target.appendChild(letter)
            letter.classList.add("letter")
            letter.style.opacity="1"
            letter.style.animation="anim 15s ease forwards"
            letter.textContent=tab[wordIndex][letterIndex]

            setTimeout(() => {
                letter.remove()
            },2030)
        }
        const loop=() =>{
            setTimeout(() => {
                if(wordIndex >= tab.length){
                    wordIndex=0
                    letterIndex=0
                    loop()
                }else if(letterIndex<tab[wordIndex].length){
                     createLetter()
                     letterIndex++
                     loop()

                }else{
                    letterIndex=0
                    wordIndex++
                    setTimeout(() => {
                        loop()
                    }, 2080)
                }
            }, 1)
        }
        loop()
    },[])
    return (
           <span className="text-dynamique">
               <span id="text-target"></span>
           </span>
    );
};

export default Description;