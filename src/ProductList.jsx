import ProductItem from './ProductItem.jsx';

const ProductList = props => {
    const { productsData: products, addToCart, showDetail } = props;
    return (
        <div className='row gy-4'>
            {products.map(product => {
                return <ProductItem key={product.id} {...{ product }} {...{ addToCart }} {...{ showDetail }} />;
            })}
        </div>
    );
};
export default ProductList;
