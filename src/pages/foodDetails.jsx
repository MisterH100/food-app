import { useParams, Link } from "react-router-dom";
import cartIcon from '../assets/cart.svg';
import mailIcon from '../assets/mail.svg';
import { data } from "../data/db";

function FoodDetails() {
    let { meal_id } = useParams();
    const meal = data.find(item => item.id === meal_id)
    return (
        <section className="relative w-[60%] h-auto m-auto mb-[40px] p-[40px] flex flex-col md:flex-row justify-center items-center gap-[40px] bg-[#efefef]">  
            <div className="w-[300px] md:w-[400px] h-[300px] md:h-[400px] ">
                <img
                    className="w-full h-full object-cover"
                    src={meal.img}
                    alt={meal.name}
                />
            </div>
            <div>
                <h1 className="pl-[20px] text-[1.5rem] text-black pt-[10px] truncate">{ meal.name}</h1>
                <p className="pl-[20px] text-[0.9rem] text-black truncate"><strong>Description:</strong><br/> {meal.dsc}</p>
                <p className="pl-[20px] text-[0.7rem] text-black underline">Rating: {meal.rate}</p>
                <h1 className="pl-[20px] mt-[20px] text-[1rem] text-[#f00] text-bold">R{meal.price},00</h1>

                <div className="flex gap-[40px] pt-[20px]">
                    <button className="block w-[100px] h-[40px] text-black text-[1rem] outline-1 overflow-hidden pt-[10px] contact-button">Contact
                        <img
                            className=" mt-[6px] text-white w-fit m-auto"
                            src={mailIcon}
                            alt="mail icon"
                        />
                    </button>

                    <button className="block w-[100px] h-[40px] bg-[#f00] text-white text-[1rem] overflow-hidden pt-[10px] add-to-cart">Add to cart
                        <img
                            className=" mt-[6px] text-white w-fit m-auto"
                            src={cartIcon}
                            alt="cart icon"
                        />
                    </button>
                </div>
            </div>
            <Link to="/" className="absolute top-[90%] left-[90%] text-black">Back</Link>
        </section>
    )
}

export default FoodDetails;