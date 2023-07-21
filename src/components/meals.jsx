import Meal from "./meal";

function Meals({ data }) {
    if (data.length >= 1) {
        return (
            <>
                {data.map(meal=> (
                    <Meal 
                        key={meal.id}
                        id={meal.id}
                        img={meal.img}
                        name={meal.name}
                        dsc={meal.dsc}
                        rate={meal.rate}
                        price={meal.price}
                    />
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

export default Meals;