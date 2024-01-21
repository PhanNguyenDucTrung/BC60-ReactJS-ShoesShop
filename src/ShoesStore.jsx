import { useState } from 'react';
import Modal from './Modal.jsx';
import ProductList from './ProductList.jsx';
import products from './data.json';
import Detail from './Detail.jsx';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ShoesStore = () => {
    const notify = () => toast('Đã thêm sản phẩm vào giỏ hàng!', { closeOnClick: true, pauseOnHover: false });

    const [currentProduct, setCurrentProduct] = useState(products[0]);
    const [cart, setCart] = useState([]);
    console.log(cart);
    const handleAddToCart = product => {
        notify();
        const cartItem = cart.find(cartItem => cartItem.product.id == product.id);
        if (cartItem) {
            cartItem.quantity += 1;
            setCart([...cart]);
            return;
        }
        const newCartItem = { product: { ...product }, quantity: 1 };
        setCart([...cart, newCartItem]);

        console.log(product);
        console.log(cart);
    };

    const clearCart = () => {
        setCart([]);
    };

    const showDetail = product => {
        setCurrentProduct(product);
    };

    const increaseQuantity = product => {
        const cartItem = cart.find(cartItem => cartItem.product.id === product.id);
        if (cartItem) {
            cartItem.quantity += 1;
            setCart([...cart]);
        }
    };

    const decreaseQuantity = product => {
        const cartItem = cart.find(cartItem => cartItem.product.id === product.id);
        if (cartItem && cartItem.quantity > 1) {
            cartItem.quantity -= 1;
            setCart([...cart]);
        }
    };
    return (
        <div className='container'>
            <ToastContainer />
            <div className='container'>
                <button className='btn btn-danger mb-4' data-bs-toggle='modal' data-bs-target='#modelId'>
                    My Cart ({cart.length} items)
                </button>
            </div>
            <ProductList productsData={products} addToCart={handleAddToCart} {...{ showDetail }} />
            <Modal {...{ cart }} {...{ clearCart }} {...{ decreaseQuantity }} {...{ increaseQuantity }} />
            <Detail {...{ currentProduct }} />
        </div>
    );
};
export default ShoesStore;
