import { useState } from 'react';
import Modal from './Modal.jsx';
import ProductList from './ProductList.jsx';
import products from './data.json';

const ShoesStore = () => {
    const [cart, setCart] = useState([]);
    console.log(cart);
    const handleAddToCart = product => {
        setCart([...cart, product]);
        console.log(product);
    };

    console.log(products);
    return (
        <div className='container'>
            <div className='container'>
                <button className='btn btn-danger mb-4' data-bs-toggle='modal' data-bs-target='#modelId'>
                    Modal
                </button>
            </div>
            <ProductList productsData={products} addToCart={handleAddToCart} />
            <Modal />
        </div>
    );
};
export default ShoesStore;
