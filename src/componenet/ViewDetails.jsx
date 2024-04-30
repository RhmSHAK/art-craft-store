import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {

    const useList = useLoaderData();

    const {subCategory,item,description,photo,price,rating,customization,time,stockStatus,name,email}= useList;

    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img className="w-[200px]" src={photo} alt="Movie"/></figure>
        <div className=" flex justify-between w-full pl-5 pr-5 mt-3">
          <div>
                  <h2 className="card-title">Sub Category: {subCategory}</h2>
                    <p>Item: {item}</p>
                    <p> Short Description: {description}</p>
                    <p>Processing Time: {time}</p>
                   <p>Price: {price}</p>
                   <p>Rating: {rating}</p>
                  <p>Customization: {customization}</p>
                  <p>Stock Status: {stockStatus}</p>
                  <p>Name: {name}</p>
                  <p>Email: {email}</p>
          </div>


          </div>
            
        </div>
    );
};

export default ViewDetails;