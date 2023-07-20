
import { Link } from 'react-router-dom';
import cartIcon from '../assets/cart.svg';
import mailIcon from '../assets/mail.svg';

function Meal({ data }) {
    if (data.length >= 1) {
        return (
            <>
                {data.map(meal=> (
                    <div key={meal.id} className="w-[300px] h-[450px] bg-[#efefef] px-[10px] py-[20px] rounded-[4px] shadow-lg meal-card" >
                        <Link to={`/food-details/${meal.id}`}>
                            <div className="relative meal-image-wrapper w-[280] h-[250px] m-auto bg-[#000]">
                            
                                <img
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    src={meal.img}
                                    alt={meal.name} 
                                />
                            </div>
                        </Link>
                        <h1 className="text-[1.5rem] text-black pt-[10px] truncate">{meal.name}</h1>
                        <p className="text-[0.9rem] text-black truncate"><strong>Description:</strong><br/>{meal.dsc}</p>
    
                        <div className="flex justify-between items-center">
                            <p className="text-[0.7rem] text-black underline">Rating: {meal.rate}/5</p>
                            <h2 className="text-[1rem] text-[#f00] text-bold">R{meal.price},00</h2>
                        </div>
    
                        <div className="flex justify-between pt-[20px]">
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
                )
                )}
    
            </>
    
        )
    }
    else if (data.length < 1) {
        return (
            <h1 className="text-[#f00] text-[2rem] h-[100px]">No results found!</h1>
        )
    }

}

export default Meal;