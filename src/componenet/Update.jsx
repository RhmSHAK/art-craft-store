import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const updateCard = useLoaderData();
    console.log(updateCard);

    const {_id,subCategory,item,description,photo,price,rating,customization,time,stockStatus} = updateCard;

    const handleUpdate = event => {

        event.preventDefault();
        const form = event.target;
       
        const subCategory = form.subCategory.value;
        const item = form.item.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const time = form.time.value;
        const stockStatus = form.stockStatus.value;
       

        const newArt = {subCategory,item,description,photo,price,rating,customization,time,stockStatus}

        console.log(newArt);


        //send data to the server
        fetch(`http://localhost:5000/art/${_id}`,{
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newArt)
           }) 
           .then(res => res.json())
           .then(data => {
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'success!',
                    text: 'Update Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
           
           })  

        

      }
    return (
        <div className="bg-[#F4F3F0] p-24 ">
            <h2 className="text-3xl text-center font-bold mb-6">Update Art & Craft List</h2>
            <form onSubmit={handleUpdate}>
                
                {/* form subCategory name row */}
              <div className="mb-7">
                 <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text"> Subcategory Name</span>
                   </label>
                   <select  defaultValue={subCategory} name="subCategory" className="select select-bordered w-full ">
                         <option disabled selected>Choose</option>
                         <option>Landscape Painting</option>
                            <option>Portrait Drawing</option>
                            <option>Watercolour Painting</option>
                            <option>Oil Painting</option>
                            <option> Charcoal Sketching</option>
                            <option> Cartoon Drawing</option>
                    </select>
                </div>
            </div>

            {/* form Item Name row */}
            <div className="mb-7">
                 <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Item Name</span>
                   </label>
                     <label className="input-group" >

                     <input type="text" name="item" defaultValue={item}  placeholder="Enter Your Item Name" className="input input-bordered w-full" />
                     
                     </label>
                </div>
            </div>

            {/* form short description row */}
            <div className="mb-7">
                 <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                   </label>
                     <label className="input-group" >

                     <input type="text" name="description" defaultValue={description} placeholder="Enter Your Description" className="input input-bordered w-full" />
                     
                     </label>
                </div>
            </div>


              {/* form photo row */}
              <div className="mb-7">
                 <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                   </label>
                     <label className="input-group" >

                     <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                     
                     </label>
                </div>
            </div>
                
                
                {/* form price & rating row */}
              <div className="md:flex mb-7">
                 <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Price</span>
                   </label>
                     <label className="input-group" >

                     <input type="text" name="price" defaultValue={price} placeholder="Enter Your Price" className="input input-bordered w-full" />
                     
                     </label>
                </div>

                 <div className="form-control md:w-1/2 ml-7">
                    <label className="label">
                        <span className="label-text">Rating</span>
                   </label>
                     <label className="input-group" >

                     <input type="text" name="rating" defaultValue={rating} placeholder="Enter Your Rating" className="input input-bordered w-full"  />

                     </label>
                </div>

            </div>

            {/* form  customization & processing_time row */}
              <div className="md:flex mb-7">
                 <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Customization </span>
                   </label>
                   <select defaultValue={customization} name="customization" className="select select-bordered w-full ">
                         <option disabled selected>Select Customization</option>
                           <option>Yes</option>
                            <option>No</option>
                    </select>
                </div>

                 <div className="form-control md:w-1/2 ml-7">
                    <label className="label">
                        <span className="label-text">Processing Time</span>
                   </label>
                   <label className="input-group" >

                     <input type="text" name="time" defaultValue={time} placeholder="Processing time" className="input input-bordered w-full"  />

                     </label>
                </div>

            </div>

           

            {/* form stockStatus name row */}
            <div className="mb-7">
                 <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text"> Stock Status</span>
                   </label>
                   <select defaultValue={stockStatus} name="stockStatus" className="select select-bordered w-full ">
                         <option disabled selected>Choose</option>
                           <option> In stock</option>
                            <option>Made to Order</option>
                    </select>
                </div>
            </div>


             <input type="submit" value="Update Coffee" className="btn btn-block" />
        
             </form>
        
    </div>
    );
    
};

export default Update;