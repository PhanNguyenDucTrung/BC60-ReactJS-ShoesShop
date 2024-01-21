import { toast, Zoom } from 'react-toastify';

const Modal = ({ cart, clearCart, increaseQuantity, decreaseQuantity }) => {
    const notify = () =>
        toast(
            () => (
                <div>
                    <h6> Vui lòng xác nhận xóa giỏ hàng</h6>

                    <button
                        className='btn btn-success'
                        onClick={() => {
                            clearCart();
                            toast.dismiss();
                        }}>
                        Xác nhận
                    </button>
                </div>
            ),
            { transition: Zoom }
        );
    const total = cart.reduce((total, { product, quantity }) => {
        {
            total += product.price * quantity;
            return total;
        }
    }, 0);

    return (
        <div
            className='modal fade'
            id='modelId'
            tabIndex={-1}
            role='dialog'
            aria-labelledby='modelTitleId'
            aria-hidden='true'>
            <div className='modal-dialog modal-xl'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title' id='exampleModalLabel'>
                            My Cart ({cart.length} items)
                        </h5>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
                    </div>
                    <div className='modal-body'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Mã sản phẩm</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Hình ảnh</th>
                                    <th>Số lượng</th>
                                    <th></th>
                                    <th>Đơn giá</th>
                                    <th>Thành tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(({ product, quantity }) => {
                                    return (
                                        <tr key={product.id}>
                                            <td>{product.alias}</td>
                                            <td>{product.name}</td>
                                            <td>
                                                <img src={product.image} alt={product.name} width={50} />
                                            </td>
                                            <td colSpan={2}>
                                                <button
                                                    className='btn btn-success me-1'
                                                    onClick={() => {
                                                        increaseQuantity(product);
                                                    }}>
                                                    <i className='fa-solid fa-plus'></i>
                                                </button>
                                                {quantity}
                                                <button
                                                    className='btn btn-success ms-1'
                                                    onClick={() => {
                                                        decreaseQuantity(product);
                                                    }}>
                                                    <i className='fa-solid fa-minus'></i>
                                                </button>
                                            </td>
                                            <td>{product.price}</td>
                                            <td>{product.price * quantity} </td>
                                        </tr>
                                    );
                                })}
                                <tr>
                                    <td colSpan={6} style={{ textAlign: 'right' }}>
                                        Tổng tiền:
                                    </td>
                                    <td>{total}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='modal-footer'>
                        <button
                            type='button'
                            className='btn btn-secondary'
                            onClick={() => {
                                notify();
                            }}>
                            Xóa giỏ hàng <i className='fa fa-trash'></i>
                        </button>
                        <button className='btn btn-success'>
                            Thanh toán <i className='fa fa-shopping-cart'></i>
                        </button>
                        <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Modal;
