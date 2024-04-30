// import { Link } from "react-router-dom";

//import { useLoaderData } from "react-router-dom";
import MyArtCraft from "./MyArtCraft";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthOrovider/AuthProvider";

// const handleDelete = _id =>{

// }


const MyArtCraftList = () => {

    const {user}= useContext(AuthContext);
      const [loaderArtList, setLoaderArtList] = useState([]);

      //const[ newList, setNewList ]= useState(loaderArtList);

      useEffect(()=>{
            fetch(`https://assingment-10-art-server.vercel.app/art/${user?.email}`)
            .then(res=> res.json())
            .then(data=>{
                console.log(data);
                setLoaderArtList(data);
            })
      },[user])

    return (
        <div className='grid md:grid-cols-2 gap-4'>
           {
            loaderArtList.map(list => <MyArtCraft 
                key={list._id}
                list = {list}
                //newList={newList}
                //setNewList={setNewList}
            >

            </MyArtCraft> )
           }
        </div>
    );
};

export default MyArtCraftList;