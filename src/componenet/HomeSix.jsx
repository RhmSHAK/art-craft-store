import { useEffect, useState } from "react";
import CardSix from "./CardSix";
import Loader from "./Loader";


const HomeSix = () => {
    const [cards,setCard]=useState([]);
    console.log(cards);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
           fetch('https://assingment-10-art-server.vercel.app/craft') 
           .then(res=> res.json())
           .then(data=> {

            setCard(data)
            setLoading(false);
          }) 

    },[])

    if(loading){
      return  <Loader></Loader>
    }

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