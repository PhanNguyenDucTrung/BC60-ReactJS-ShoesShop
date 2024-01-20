const Modal = () => {
    return (
        <div
            className='modal fade'
            id='modelId'
            tabIndex={-1}
            role='dialog'
            aria-labelledby='modelTitleId'
            aria-hidden='true'>
            <div className='modal-dialog modal-lg'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title' id='exampleModalLabel'>
                            My Cart
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
                                    <th>Đơn giá</th>
                                    <th>Thành tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>@</td>
                                    <td>@</td>
                                    <td>@</td>
                                    <td>2222</td>
                                    <td>222</td>
                                    <td>222</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='modal-footer'>
                        <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
                            Close
                        </button>
                        {/* <button type='button' className='btn btn-primary'>
                            Save changes
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Modal;
