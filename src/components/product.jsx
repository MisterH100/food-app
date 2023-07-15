
function Product({data}) {
    return (
        <div className="flex flex-wrap justify-center gap-[40px] w-full h-full px-[10px] pt-[40px] bg-[#242424]">

            {data.map(meal=> {
                return (
                    <div key={meal.id} className="w-[300px] h-[450px] bg-[#bddd9c] px-[10px] py-[20px] rounded-[4px]">
                        <div className="relative w-[280] h-[250px] object-cover m-auto bg-[#000]">
                            <img
                                className="w-full h-full object-cover"
                                src={meal.img}
                                alt={meal.name}
                            />
                        </div>
                        <h1 className="text-[20px] text-black pt-[10px]">{meal.name}</h1>
                        <p className="text-[12px] text-black truncate"><strong>Description:</strong><br/>{meal.dsc}</p>

                        <div className="flex justify-between items-center">
                            <p className="text-[10px] text-black underline">Rating: {meal.rate}/5</p>
                            <h2 className="text-[16px] text-[#f00] text-bold">R{meal.price},00</h2>
                        </div>

                        <div className="flex justify-between pt-[20px]">
                            <button className="block w-[100px] h-[40px] border-2 text-black text-[16px]">Contact</button>
                            <button className="block w-[100px] h-[40px] bg-[#213508] text-white text-[16px]">Add to cart</button>
                        </div>
                    </div>
                )
            } )}
        </div>
    )
}

export default Product;