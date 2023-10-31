import { useContext } from 'react'
import './style.css'
import {XMarkIcon} from '@heroicons/react/24/outline'
import { ShoppingCartContext } from '../../Context'

const ProductDetail = ()=>{
    const context = useContext(ShoppingCartContext)

    return (
        <aside  className={ `${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white}`}>
            <div className='flex justify-between items-center P-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div className='w-8 cursor-pointer' onClick={()=>context.closeProductDetail()} ><XMarkIcon/></div>
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg'
                 src={context.productToShow.images[0]} 
                 alt={context.productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>{context.productToShow.price}</span>
                <span className='font-medium text-md'>{context.productToShow.title}</span>
                <span className='font-medium text-sm' >{context.productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail