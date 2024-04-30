import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtCraft = ({list}) => {
     //console.log(list);
    
    const {_id,subCategory,item,description,price,rating,customization,time,photo,stockStatus,name,email} = list;

    const handleDelete = _id =>{
      console.log(_id);

      //sweet alert
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

            fetch(`http://localhost:5000/art/${_id}`,{
                method: 'delete'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "ArtCraft has been deleted.",
                        icon: "success"
                     });

                    //  const remaining = newList.filter( list => list._id !== _id );
                    //  setNewList(remaining);
                }
            })

        
        }
      });

    }



    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img className="w-[200px]" src={photo} alt="Movie"/></figure>
        <div className=" flex justify-between w-full pl-5 pr-5 mt-3">
          <div>
                  <h2 className="card-title">Item Name: {item}</h2>
                   <p>Price: {price}</p>
                   <p>Rating: {rating}</p>
                  <p>Customization: {customization}</p>
                  <p>Stock Status: {stockStatus}</p>
          </div>
      
          <div className="card-actions justify-end">
             <div className="join join-vertical space-y-4">
                 <Link to={`/update/${_id}`}>
                 <button className="btn ">Update</button>
                 </Link>
                 <button
                  onClick={() => handleDelete(_id)}
                 className="btn bg-orange-500">Delete</button>
             </div>
          </div>
      
        </div>
      </div>
    );
};

export default MyArtCraft;