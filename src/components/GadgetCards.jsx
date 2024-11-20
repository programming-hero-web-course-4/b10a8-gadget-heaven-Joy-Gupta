import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const GadgetCards = () => {
    const data = useLoaderData();
    // console.log(data);
    const { category } = useParams();
    // console.log(category);
    const [gadgets, setGadgets] = useState([]);
    useEffect(()=>{
        if (category) {
            const filteredByCategory = [...data].filter(
                gadget => gadget.category === category
            )
            setGadgets(filteredByCategory)
        } else{
            setGadgets(data.slice(0,6))
        }
    }, [category, data])
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto md:px-2'>
            {
                // data.map(gadget => <Card key={gadget.id} gadget={gadget}></Card>)
                gadgets.map(gadget => <Card key={gadget.id} gadget={gadget}></Card>)
            }
        </div>

    );
};

export default GadgetCards;