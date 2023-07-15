import { useEffect, useState } from 'react';
import { data } from '../data/db';

function Banner() {
    const [randFirstImg, setRandFirstImg] = useState("")
    const [randSecondImg, setRandSecondImg] = useState("")
    const [randThirdImg, setRandThirdImg] = useState("")
    const max = data.length;
    let randNum;

    const getRandFirstImg = () => {
        randNum = Math.floor(Math.random() * max);
        setRandFirstImg(data[randNum].img) 
    }

    const getRandSecondImg = () => {
        randNum = Math.floor(Math.random() * max);
        setRandSecondImg(data[randNum].img) 
    }

    const getRandThirdImg = () => {
        randNum = Math.floor(Math.random() * max);
        setRandThirdImg(data[randNum].img) 
    }

    useEffect(() => {
        getRandFirstImg();
        getRandSecondImg();
        getRandThirdImg();
    },[])
    
    return (
        <article className="w-[98%] m-auto mt-[40px] py-[20px]">
            <h1 className="w-[90%] h-[30px] text-black m-auto px-[10px] rounded-tl-[10px] rounded-tr-[10px]">Randomized mouth watering images from our gallery</h1>
            <div className="w-full flex justify-center gap-[20px]">
                <div className="w-[350px] h-[400px] bg-[#000]">
                    <img
                        className="w-full h-full object-cover"
                        src={randFirstImg}
                        alt="banner image"
                    />
                </div>  
                <div className="w-[450px] h-[400px] bg-[#000]">
                    <img
                        className="w-full h-full object-cover"
                        src={randSecondImg}
                        alt="banner image"
                    />
                </div>
                <div className="w-[350px] h-[400px] bg-[#000]">
                    <img
                        className="w-full h-full object-cover"
                        src={randThirdImg}
                        alt="banner image"
                    />
                </div>
            </div>
        </article>
    )
}

export default Banner;