import './CardStyle.css'
import { CartDetailsLogic, useCartDetailsLogic } from '../components/CartDetailsLogic';
import { Offcanvas,OffcanvasBody,OffcanvasHeader } from 'reactstrap';
import React from 'react';
const CartDetails = ({isOpen,onHide}) => {
  const { carts, totalQuantity, totalPrice, handleIncrement, handleDecrement, handleSingleDecrement, handleEmptyCart,handleOffCanves } = useCartDetailsLogic();

  return (
    <>
    {/* <div className="offcanvas offcanvas-start offCanvasDiv" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel" style={{ width: '650px' }}>
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Cart items Details</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body"style={{ overflowX: 'auto', overflowY: 'auto',width:'650px'}}> */}
<Offcanvas  isOpen={isOpen} toggle={onHide} style={{width:'630px'} }>
<OffcanvasHeader toggle={()=>onHide(handleOffCanves)}>Cart items Details</OffcanvasHeader> 
          <OffcanvasBody >
    <div className='row justify-content-center m-0 mt-5 '>
      <div className='col-md-12 mt-5 mb-5 cardsdetails'>
        <div className='card'>
          <div className='card-header bg-dark p-3'>
            <div className='card-header-flex'>
            <h5 className='text-white m-0'>Card Calculations{carts.length >0 ?`(${carts.length})`:""}</h5>
            {
              carts.length> 0? <button className='btn btn-danger mt-0 btn-sm' onClick={handleEmptyCart}><i className='fa fa-trash-alt mr-2' ></i><span>Empty card</span></button>
              : ""
            }
            </div>
            
          </div>
          <div className='card-body p-0'>
            {
              carts.length === 0 ? <table className='table cart-table mb-0'>
              <tbody>
                <tr>
                  <td colSpan={6}>
                    <div className='cart-empty'>
                      <i className='fa fa-shopping-cart'></i>
                      <p>Your Cart is Empty</p>
                    </div>
                  </td>
                </tr>
              </tbody>
              </table> : <table className='table cart-table mb-0 table-responsive-sm'>
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th className='text-right'><span id='amount' className='amount'>Total Amount</span></th>
                </tr>
              </thead>

             <tbody>
              {
                carts.map((data,index)=>{
                  return(
                    <>
                    <tr>
                      <td>
                        <button className='prdct-delete'
                        onClick={()=>handleDecrement(data.id)}
                        ><i className='fa fa-trash-alt mr-2'></i></button>
                      </td>
                      <td> <div className='product-img'><img src={data.thumbnail} alt=''></img></div></td>
                      <td> <div className='product-name'></div><p>{data.title}</p></td>
                      <td>{data.price}</td>
                      <td>
                        <div className='prdct-qty-container'>
                          <button className='prdct-qty-btn' type='button'
                          onClick={ data.qnty <=1 ? ()=>handleDecrement(data.id) :()=>handleSingleDecrement(data)}
                          >
                            <i className='fa fa-minus'></i>
                            </button>
                            <input type='text' className='qty-input-box' value={data.qnty} disabled name='' id=''/>
                            <button className='prdct-qty-btn' type='button'onClick={()=>handleIncrement(data)}>
                            <i className='fa fa-plus'></i>
                            </button>
                        </div>
                      </td>
                      <td className='text-right'>{data.qnty * data.price}</td>
                    </tr>
                    </>
                  )
                })
              }
             </tbody>
             <tfoot>
                  <tr>
                    <th>&nbsp;</th>
                    <th colSpan={3}>&nbsp;</th>
                    <th>
                      Items In Cart <span className='ml-2 mr-2'>:</span>
                      <span className='text-danger'>{totalQuantity}</span>
                    </th>
                    <th className='text-right'>
                      Total Price <span className='ml-2 mr-2'>:</span>
                      <span className='text-danger'>{totalPrice}</span>
                    </th>
                  </tr>
                </tfoot>
              </table>
            } 
          </div>
        </div>
      </div>
      </div>
       {/* </div>
       </div> */}
         </OffcanvasBody>
  </Offcanvas>
       </>
  )
};

export default CartDetails;

