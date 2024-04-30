import { Link } from "react-router-dom";


const AllCategoryCart = ({card}) => {

    

    const{_id,photo,subCategory,item,time,price,rating,description}=card;


    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img className="w-[200px]" src={photo} alt="Movie"/></figure>
        <div className=" flex justify-between w-full pl-5 pr-5 mt-3">
          <div>
          <h2 className="card-title">SubCategory_name: {subCategory}</h2>
                    <p>Item_name: {item}</p>
                    <p>Short description: {description}</p>
                    <p>Processing Time: {time}</p>
                   <p>Price: {price}</p>
                   <p>Rating: {rating}</p>
                  
          </div>


          </div>
            
          <div className="card-actions justify-end">
             <div className="join join-vertical mt-32 space-y-4">
                 <Link to={`/view/${_id}`}>
                 <button className="btn ">View Details</button>
                 </Link>
                 
             </div>
          </div>

        </div>
    );
};

export default AllCategoryCart;