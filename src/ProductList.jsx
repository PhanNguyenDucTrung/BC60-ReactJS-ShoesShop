import ProductItem from './ProductItem.jsx';

const ProductList = props => {
    const { productsData: products, addToCart } = props;
    console.log(props);
    // console.log(productsData);
    console.log(products);
    return (
        <div className='row'>
            {products.map(product => {
                return <ProductItem key={product.id} {...{ product }} {...{ addToCart }} />;
            })}
        </div>
    );
};
export default ProductList;
