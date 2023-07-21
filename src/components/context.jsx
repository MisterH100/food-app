import { useState} from 'react'
import Meals from './meals'
import { data } from '../data/db'


function Context(){
    const [query, setQuery] = useState("")
    const [price, setPrice] = useState(200)
    const [rate, setRate] = useState(4)

    const searchName = (data) => {
        return data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()) && item.price < price && item.rate == rate)  
    }

    return (
        <section className="relative bg-[#bdbdbd]">
            <form className="w-full px-[10px]" onSubmit={(e) => e.preventDefault()}>
                <input
                    className="block w-[80%] md:w-[40%] h-[40px] bg-[#fff] text-black p-[10px] m-auto border-none outline-none"
                    type="search"
                    value={query}
                    placeholder="Search"
                    onChange={(e) => setQuery(e.target.value)}
                />

                <div className="w-full flex justify-center align-center gap-[40px] pt-[40px] pb-[10px]">

                    <label htmlFor="price" className="flex flex-col w-[100px] px-[10px] text-black text-[1rem] text-center bg-[#d9d9d9] cursor-pointer">
                        Price:
                        <select className=" bg-transparent outline-none cursor-pointer text-center" onChange={(e) => setPrice(e.target.value)}>
                            <option className="text-[1rem]" value={100} >RR</option>
                            <option className="text-[1rem]" value={250} >RRR</option>
                        </select>
                    </label>

                    <label htmlFor="rating" className="flex flex-col w-[100px] px-[10px] text-black text-[1rem] text-center bg-[#d9d9d9] cursor-pointer">
                        Rating:
                        <select className="bg-transparent pl-[10px] outline-none cursor-pointer text-center" onChange={(e) => setRate(e.target.value)}>
                            <option className="text-[1rem]" value={3}>3</option>
                            <option className="text-[1rem]" value={4}>4</option>
                            <option className="text-[1rem]" value={5}>5</option>
                        </select>
                    </label>
                </div>


            </form>
            
            <div className="flex flex-wrap justify-center gap-[40px] w-full h-full px-[40px] py-[20px] mb-[40px]">
                <Meals data={searchName(data)} />
            </div>
        </section>
    )
}

export default Context;