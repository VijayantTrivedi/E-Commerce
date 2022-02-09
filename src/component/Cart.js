import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { delCart } from '../redux/action/index';
import { adjustQty } from '../redux/action/index';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
const Cart = () => {

  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  // const [totalPrice,setTotalPrice] = useState(0);
  // const [totalItems,setTotalItems] = useState(0);

  // useEffect(()=>{
  //   let items = 0;
  //   let price = 0;

  //   state.forEach((item)=>{
  //     items += item.quantity;
  //     price += item.quantity * item.price;
  //   });
  //   setTotalItems(items);
  //   setTotalPrice(price);
  // },[state,totalPrice,totalItems,setTotalPrice,setTotalItems]);
  const [quantity, setQuantity] = useState(1);
  var Count = 0;
  let Res = 1;

  const handleClose = (item) => {
    dispatch(delCart(item));
  }
  // const [input,Setinput] = useState(state.qty);
  // const onChangeHandler = (e) => {
  //   console.log(e.target.value);
  //   Setinput(e.target.value);
  //   adjustQty(state.id,e.target.value);
  // }

  const handleDecrement = () => {
    if(quantity>=1){
      setQuantity(quantity-1);
    }

  }

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  }

  // const grandTotal = () => {
  //   var total = product.price * quantity;
  //   return total;
  // }

  const cartItems = (product) => {
    return (

      <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
        <div className="container py-4">
          <button onClick={() => handleClose(product)} className="btn-close float-end" aria-label="Close"></button>
          <div className="row justify-content-center">
            <div className="col-md-3">
              <img src={product.image} alt={product.title} height="200px" width="180px" />
            </div>
            <div className="col-md-3 text-center">
              <h3>{product.title}</h3>
              <p className="lead fw-bold"> Price : ${product.price * quantity}</p>
              {/* <p className="lead fw-bold"> amount :{product.price * product.quantity}</p> */}
            </div>
            <div className="col-md-3 text-center" >
              <button className="btn btn-outline-dark me-4"
                onClick={() => handleDecrement()}>
                <i className="fa fa-minus"></i>
              </button>
              <span>{quantity}</span>
              <button className="btn btn-outline-dark me-4"
                onClick={() => handleIncrement()}
              >
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }


  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row text-center">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  }

  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <Link to="/checkout" className="btn btn-outline-primary mb-5 w-25 text-center">
            Proceed To checkout
          </Link>
        </div>
      </div>
    );
  }



  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  )
};

const mapDispatchtoProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};

export default connect(null, mapDispatchtoProps)(Cart);
