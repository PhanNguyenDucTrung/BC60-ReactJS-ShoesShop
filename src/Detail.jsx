const Detail = ({ currentProduct }) => {
    const { id, name, alias, price, description, shortDescription, quantity, image } = currentProduct;
    console.log(id, name, alias, price, description, shortDescription, quantity, image);
    return (
        <div
            className='modal fade'
            id='modelDetailId'
            tabIndex={-1}
            role='dialog'
            aria-labelledby='modelTitleId'
            aria-hidden='true'>
            <div className='modal-dialog modal-lg'>
                <div className='modal-content' style={{ height: '100%' }}>
                    <div className='modal-header'>
                        <h5 className='modal-title' id='exampleModalLabel'>
                            Product Detail
                        </h5>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
                    </div>
                    <div className='modal-body'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>ID:</td>
                                            <td>{id}</td>
                                        </tr>
                                        <tr>
                                            <td>Name:</td>
                                            <td>{name}</td>
                                        </tr>
                                        <tr>
                                            <td>Alias:</td>
                                            <td>{alias}</td>
                                        </tr>
                                        <tr>
                                            <td>Price:</td>
                                            <td>{price}</td>
                                        </tr>
                                        <tr>
                                            <td>Description:</td>
                                            <td>{description}</td>
                                        </tr>
                                        <tr>
                                            <td>Short Description:</td>
                                            <td>{shortDescription}</td>
                                        </tr>
                                        <tr>
                                            <td>Quantity:</td>
                                            <td>{quantity}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='col-md-6'>
                                <img src={image} alt={name} style={{ display: 'block', width: '100%' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Detail;
