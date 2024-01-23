import { toast, Zoom } from 'react-toastify';
import { useEffect, useState } from 'react';

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

    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [intervalId]);

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
                                                    }}
                                                    onMouseDown={() => {
                                                        setIntervalId(
                                                            setInterval(() => {
                                                                increaseQuantity(product);
                                                            }, 300)
                                                        );
                                                    }}
                                                    onMouseUp={() => {
                                                        clearInterval(intervalId);
                                                        setIntervalId(null);
                                                    }}
                                                    onMouseLeave={() => {
                                                        clearInterval(intervalId);
                                                        setIntervalId(null);
                                                    }}>
                                                    <i className='fa-solid fa-plus'></i>
                                                </button>
                                                <span
                                                    style={{
                                                        display: 'inline-block',
                                                        width: '20px',
                                                        textAlign: 'center',
                                                    }}>
                                                    {quantity}
                                                </span>

                                                <button
                                                    className='btn btn-success ms-1'
                                                    onClick={() => {
                                                        decreaseQuantity(product);
                                                    }}
                                                    onMouseDown={() => {
                                                        setIntervalId(
                                                            setInterval(() => {
                                                                decreaseQuantity(product);
                                                            }, 300)
                                                        );
                                                    }}
                                                    onMouseUp={() => {
                                                        clearInterval(intervalId);
                                                        setIntervalId(null);
                                                    }}
                                                    onMouseLeave={() => {
                                                        clearInterval(intervalId);
                                                        setIntervalId(null);
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
                                    <td>
                                        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
                                            total
                                        )}
                                    </td>
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
