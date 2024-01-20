const ProductItem = ({ product }) => {
    const { name, image, price } = product;
    return (
        <div className='col-md-4'>
            <div className='card'>
                <img src={image} alt='' />
                <div className='card-body'>
                    <p>{name}</p>
                    <p>{price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                </div>
                <div className='card-footer'>
                    <button className='btn btn-danger'>
                        Add to Cart <i className='fa-solid fa-cart-plus'></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ProductItem;
