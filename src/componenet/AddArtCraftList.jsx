import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthOrovider/AuthProvider";


const AddArtCraftList = () => {

  const {user} = useContext(AuthContext)
            
    const handleAddArt = event => {

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
        const name = form.name.value;
        const email = form.email.value;

        const newArt = {subCategory,item,description,photo,price,rating,customization,time,stockStatus,name,email}

        console.log(newArt);


        //send data to the server
        fetch('https://assingment-10-art-server.vercel.app/art',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newArt)
           }) 
           .then(res => res.json())
           .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'ArtCraft Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  form.reset();
            }
           
           })  

        

      }


    

    return (
        <div className="bg-[#F4F3F0] p-24 ">
            <h2 className="text-3xl text-center font-bold mb-6">Add Art & Craft List</h2>
            <form onSubmit={handleAddArt}>
                
                {/* form subCategory name row */}
              <div className="mb-7">
                 <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text"> Subcategory Name</span>
                   </label>
                   <select name="subCategory" className="select select-bordered w-full ">
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

                     <input type="" name="item" placeholder="Enter Your Item Name" className="input input-bordered w-full" />
                     
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

                     <input type="text" name="description" placeholder="Enter Your Description" className="input input-bordered w-full" />
                     
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

                     <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                     
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

                     <input type="text" name="price" placeholder="Enter Your Price" className="input input-bordered w-full" />
                     
                     </label>
                </div>

                 <div className="form-control md:w-1/2 ml-7">
                    <label className="label">
                        <span className="label-text">Rating</span>
                   </label>
                     <label className="input-group" >

                     <input type="text" name="rating" placeholder="Enter Your Rating" className="input input-bordered w-full"  />

                     </label>
                </div>

            </div>

            {/* form  customization & processing_time row */}
              <div className="md:flex mb-7">
                 <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Customization </span>
                   </label>
                   <select name="customization" className="select select-bordered w-full ">
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

                     <input type="text" name="time" placeholder="Processing Time" className="input input-bordered w-full"  />

                    </label>
                </div>

            </div>

           

            {/* form stockStatus name row */}
            <div className="mb-7">
                 <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text"> Stock Status</span>
                   </label>
                   <select name="stockStatus" className="select select-bordered w-full ">
                         <option disabled selected>Choose</option>
                           <option> In stock</option>
                            <option>Made to Order</option>
                    </select>
                </div>
            </div>


             {/* form userName & userEmail row */}
              <div className="md:flex mb-7">
                 <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">User Name</span>
                   </label>
                     <label className="input-group" >

                     <input type="text" name="name" defaultValue={user.displayName} placeholder="Enter Your User Name" className="input input-bordered w-full" />
                     
                     </label>
                </div>

                 <div className="form-control md:w-1/2 ml-7">
                    <label className="label">
                        <span className="label-text">User Email</span>
                   </label>
                     <label className="input-group" >

                     <input type="text" name="email" defaultValue={user.email}  placeholder="Enter Your User Name" className="input input-bordered w-full"  />

                     </label>
                </div>

            </div>

                 

            

            
            <input type="submit" value="Add Coffee" className="btn btn-block" />
        
             </form>
        
    </div>
    );
};

export default AddArtCraftList;