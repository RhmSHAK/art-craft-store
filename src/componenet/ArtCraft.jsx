import { Link } from "react-router-dom";


const ArtCraft = ({cat}) => {

    const {image,subcategory_name,info}=cat;

    return (
        <Link to={`/allList/${subcategory_name}`} className="card card-side bg-base-100 shadow-xl">
        <figure><img className="w-[200px]" src={image} alt="Movie"/></figure>
        <div className=" flex justify-between w-full pl-5 pr-5 mt-3">
          <div>
          <h2 className="card-title">Sub Category: {subcategory_name}</h2>
                    <p> {info}</p>
                    
                  
          </div>


          </div>
            
          

        </Link>
    );
};

export default ArtCraft;