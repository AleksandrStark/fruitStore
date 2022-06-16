import React, {useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import Goods from "../components/Goods";
import { increment } from "../store/cartSlice";
import {
    selectGoods
} from '../store/goodsSlice';

// geting data from the store
// listing data

function GoodsList (){
        const goods = useSelector(selectGoods);
        const dispatch = useDispatch();
        let clickHandler = (e) => {
            e.preventDefault();
            let t = e.target;
            if(!t.classList.contains('add-to-cart')) return true;
            dispatch(increment(t.getAttribute('data-key')));
        }

        return(
            <>
                <div className="goods-field" onClick={clickHandler}>
                {goods.map(item=> <Goods key={item.title+item.articul}title={item.title} cost={item.cost} image={item.image} articul={item.articul}/>)}

                </div>
            </>
        )
}

export default GoodsList;