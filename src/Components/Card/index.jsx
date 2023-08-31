import React, { useContext } from 'react';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';

const Card = ({ data }) => {
    const context = useContext(ShoppingCartContext);
    const { id, category, image, title, price } = data;

    const showProduct = (productDetail) => {
        context.openProductDetail();
        context.setProductToShow(productDetail);
    };

    const addProductsToCart = (event, productData) => {
        event.stopPropagation();
        context.setCount(context.count + 1);
        context.setCartProducts([...context.cartProducts, productData]);
        context.openCheckoutSideMenu();
        context.closeProductDetail();
    };

    const renderIcon = () => {
        const isInCart = context.cartProducts.some(product => product.id === id);

        if (isInCart) {
            return (
                <div className="absolute top-2 right-2 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1">
                    <CheckIcon className='h-6 w-6 text-white' />
                </div>
            );
        } else {
            return (
                <div
                    className="absolute top-2 right-2 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 cursor-pointer"
                    onClick={(event) => addProductsToCart(event, data)}>
                    <PlusIcon className='h-6 w-6 text-black' />
                </div>
            );
        }
    };

    return (
        <div className="bg-white border border-gray-300 rounded-lg shadow-md cursor-pointer w-56 h-60 r" onClick={() => showProduct(data)}>
            <figure className="relative mb-2 h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={image} alt={title} />
                {renderIcon()}
            </figure> 
            <p className="flex justify-between">
                <span className="text-sm font-light truncate w-3/4">{title}</span>
                <span className="text-lg font-medium">${price}</span>
            </p>
        </div>
    );
};

export default Card;
