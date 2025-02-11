import React from 'react';
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { addToCart, addToWishList, getCart, getWishList } from "../Database/AddToDB";




const GadgetInfo = () => {

    const data = useLoaderData();
    const { id } = useParams();
    const [gadget, setGadget] = useState({})
    const [isFavorite, setIsFavorite] = useState(false);
    const [isInCart, setIsInCart] = useState(false);

    useEffect(() => {
        // Find the gadget by ID
        const singleData = data.find(gadget => gadget.id === id)
        setGadget(singleData)

        // Check if gadget is in the wishlist
        const favorites = getWishList();
        const isExistInWishlist = favorites.find(item => item.id == singleData.id)
        if (isExistInWishlist) {
            setIsFavorite(true)
        }

        // Check if gadget is in the cart
        const cart = getCart();
        const isExistInCart = cart.find(item => item.id == singleData.id)
        if (isExistInCart) {
            setIsInCart(true)
        }

    }, [data, id])

    //   Handle wishlist btn click
    const handleWishList = gadget => {
        addToWishList(gadget)
        setIsFavorite(true)
    }

    // handle add to cart btn link
    const handleAddToCart = gadget => {
        addToCart(gadget)
        setIsInCart(true)
    }

    const { description,
        specification = [],
        availability,
        rating,
        image,
        price, 
     } = gadget;


    return (
        <div className="">
             <div className="text-center bg-[#9538E2] text-white py-10">
                <h1 className='lg:text-5xl font-bold'>Product details</h1>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
             </div>
            

            <div className="flex flex-col md:flex-row gap-20 border rounded-lg w-3/4 mx-auto my-6 p-12">
                <div className="flex justify-center w-1/2 h-full">
                    <img src={image} alt="" className="h-[200px] md:h-auto flex-grow rounded-lg" />
                </div>
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">{gadget?.title || "Gadget Details"}</h2>
                    <p className='opacity-60 font-medium text-xl'>Price: ${price} </p>
                    <p className={`btn btn-outline  ${availability ? 'btn-success' : 'btn-warning'}`}>{`${availability ? 'In Stock' : 'Out of Stock'}`} </p>
                    <p>{description}</p>
                    <p>Specifications: {specification.map((item, idx) => <li className='list-disc' key={idx}>
                        {item}
                    </li>)}</p>
                    <p>Availability: {availability}</p>
                    
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    
                    <p>Rating: {rating} </p>

                    {/* 2 button  */}
                    
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => handleAddToCart(gadget)}
                            disabled={isInCart}
                            className="btn bg-[#9538E2] text-white">

                            {isInCart ? "In Cart" : "Add to Cart"}<IoCartOutline size={24} /></button>

                        <button
                            onClick={() => handleWishList(gadget)} // Use an arrow function here
                            disabled={isFavorite}
                            className="btn">
                            {isFavorite ? "In Wishlist" : "Add to Wishlist"} <CiHeart size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default GadgetInfo;