import { useState, useEffect} from 'react'
import Product from './product'
import { data } from '../data/db'

function Food() {
    const [query, setQuery] = useState("")

    const keys = ["name", "price", "rate"]

    const searchName = (data) => {
        return data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
    }

    return (
        <>
            <form className="flex w-full bg-[#242424] mt-[40px] px-[10px]">
                <input
                    className="block w-[40%] h-[40px] bg-white text-black p-[10px]"
                    type="search"
                    value={query}
                    placeholder="Search"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <input
                    type="radio"
                />
                <input
                    type="radio"
                />
            </form>
            <Product data={searchName(data)}/>

        </>
    )
}

export default Food;