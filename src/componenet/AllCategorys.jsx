
import { useLoaderData } from "react-router-dom";
import AllCategoryCart from "./AllCategoryCart";


const AllCategorys = () => {

    const useLoade = useLoaderData();

    return (
        <div className=" grid  gap-6 mt-10 mb-7 md:grid-cols-2 ">

                  {
                    useLoade.map(card => <AllCategoryCart
                        key={card._id}
                        card={card}
                    ></AllCategoryCart> )
                  }

            </div>
    );
};

export default AllCategorys;