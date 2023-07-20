import { useState } from "react";

export const ScrollButton = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () =>{
        if (window.scrollY > 500) {
            setVisible(true)
        }
        else if(window.scrollY <500){
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const buttonStyle = {
        visibility: visible ? "visible": "hidden"
    }

    window.addEventListener("scroll", toggleVisible)

    return (
        <div className="sticky w-[100px] m-auto p-[10px] flex justify-center z-10 scroll-button">
            <button className="w-full h-[50px] bg-[#f00] rounded-full opacity-[0.5]"
            style={buttonStyle} onClick={scrollToTop}>
            top
            </button>
        </div>
    )
    
}
    

  