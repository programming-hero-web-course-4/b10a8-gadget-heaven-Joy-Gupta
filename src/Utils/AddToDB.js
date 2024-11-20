import toast from "react-hot-toast";

const getWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        return JSON.parse(storedWishListStr);
    } else {
        return [];
    }
}

const addToWishList = gadget => {

    const storedWishList = getWishList();
    const isExist = storedWishList.find(item => item.id === gadget.id)
    if (isExist) {
        alert('already exists in the wish list.')
    } else {
        storedWishList.push(gadget);
        // console.log(gadget)
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr)
        toast.success('Added to the wishlist')
    }
}


// Retrieve the cart from localStorage
const getCart = () => {
    const storedCartStr = localStorage.getItem('cart');
    if (storedCartStr) {
        return JSON.parse(storedCartStr);
    } else {
        return [];
    }
}

// Add a gadget to the cart
const addToCart = gadget => {
    const storedCart = getCart();
    // Check if gadget already exists in the cart
    const isExist = storedCart.find(item => item.id === gadget.id)
    if (isExist) {
        return toast.error('already exists!')
    }

    else {
        storedCart.push(gadget);
        // console.log(gadget)
        const storedCartStr = JSON.stringify(storedCart);
        localStorage.setItem('cart', storedCartStr);
        toast.success(`Added to the cart.`);
    }
}

export { addToCart, getCart };


export { addToWishList, getWishList }
