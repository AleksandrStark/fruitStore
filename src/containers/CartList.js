import React from "react";
import {
  useSelector,
  useDispatch
} from 'react-redux';
import Cart from "../components/Cart";
import {
  decrement,
  del
} from "../store/cartSlice";
import {
  selectCart
} from '../store/cartSlice';
import {
  selectGoods
} from '../store/goodsSlice';

function CartList() {
  const goods = useSelector(selectGoods);
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  let clickHandler = (e) => {
    e.preventDefault();
    let t = e.target;
    if (!t.classList.contains('minus') && !t.classList.contains('delete')) return true;
    if (t.classList.contains('minus')) {
      dispatch(decrement(t.getAttribute('data-key')));
    } else if (t.classList.contains('delete')) {
      dispatch(del(t.getAttribute('data-key')));
    }
  }

  return ( <
    div onClick = {
      clickHandler
    } >
    <
    Cart cart = {
      cart
    }
    goods = {
      goods
    }
    />
     </div>
  )
}

export default CartList;
