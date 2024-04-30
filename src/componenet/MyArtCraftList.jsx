// import { Link } from "react-router-dom";

//import { useLoaderData } from "react-router-dom";
import MyArtCraft from "./MyArtCraft";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthOrovider/AuthProvider";
import Loader from "./Loader";

// const handleDelete = _id =>{

// }


const MyArtCraftList = () => {

    const {user}= useContext(AuthContext);
      const [loaderArtList, setLoaderArtList] = useState([]);
      const [loading, setLoading] = useState(true);

      //const[ newList, setNewList ]= useState(loaderArtList);

      useEffect(()=>{
            fetch(`https://assingment-10-art-server.vercel.app/art/${user?.email}`)
            .then(res=> res.json())
            .then(data=>{
                console.log(data);
                setLoaderArtList(data);
                setLoading(false);
            })
      },[user])

      if(loading){
        return  <Loader></Loader>
      }

    return (
        <div className='grid md:grid-cols-2 gap-4'>
           {
            loaderArtList.map(list => <MyArtCraft 
                key={list._id}
                list = {list}
                newList={loaderArtList}
                setNewList={setLoaderArtList}
            >

            </MyArtCraft> )
           }
        </div>
    );
};

export default MyArtCraftList;