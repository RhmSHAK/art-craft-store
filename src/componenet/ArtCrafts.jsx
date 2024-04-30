import { useEffect, useState } from "react";
import ArtCraft from "./ArtCraft";


const ArtCrafts = () => {

    const [art, setArt] = useState([])
    console.log(art)

    useEffect(()=>{
        fetch('http://localhost:5000/category') 
        .then(res=> res.json())
        .then(data=>{
            console.log(data) 
            setArt(data)})
          
 },[])

    return (
        <div className=" grid  gap-6 mt-10 mb-7 md:grid-cols-3 ">

           {
            art.map(cat => <ArtCraft
                key={cat._id}
               cat={cat}
            ></ArtCraft>)
           }
        

  </div>
    );
};

export default ArtCrafts;