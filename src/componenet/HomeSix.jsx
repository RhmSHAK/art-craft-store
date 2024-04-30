import { useEffect, useState } from "react";
import CardSix from "./CardSix";


const HomeSix = () => {
    const [cards,setCard]=useState([]);
    console.log(cards);
    useEffect(()=>{
           fetch('http://localhost:5000/craft') 
           .then(res=> res.json())
           .then(data=> setCard(data))   
    },[])
    return (
        <div className=" grid  gap-6 mt-10 mb-7 md:grid-cols-3 ">

                  {
                    cards.map(card => <CardSix
                     key={card._id}
                     card={card}
                    ></CardSix> )
                  }

            </div>
    );
};

export default HomeSix;