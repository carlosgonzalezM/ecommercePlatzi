import { useContext } from 'react'
import './style.css'
import {XMarkIcon} from '@heroicons/react/24/outline'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../Utils'
import { Link } from 'react-router-dom'

const CheckoutSideMenu = () =>{
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setCount(0)
        context.setSearchByTitle(null)
    }


    return (
        <aside  className={ `${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white}`}>
            <div className='flex justify-between items-center P-6'>
                <h2 className='font-medium text-xl'>My order</h2>
                <div className='w-8 h-8 cursor-pointer' onClick={()=>context.closeCheckoutSideMenu()} ><XMarkIcon/></div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                 context.cartProducts.map(product => (
                    <OrderCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.images}
                        price={product.price}
                        handleDelete={handleDelete}
                    />
                )   )
                }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex mb-2 justify-between items-center'>
                    <span className=' font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                <button className='bg-black py-3 text-white rounded-lg w-full ' onClick={()=> handleCheckout()}>Checkout
                </button>
                </Link>
            </div>
            
           
        </aside>
    )
}

export default CheckoutSideMenu