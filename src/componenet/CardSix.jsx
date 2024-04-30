import { Link, useLoaderData } from "react-router-dom";


const CardSix = ({card}) => {

    

    const {_id,subCategory,item,photo,price,rating,time}= card;

    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img className="w-[200px]" src={photo} alt="Movie"/></figure>
        <div className=" flex justify-between w-full pl-5 pr-5 mt-3">
          <div>
          <h2 className="card-title">Sub Category: {subCategory}</h2>
                    <p>Item: {item}</p>
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

export default CardSix;