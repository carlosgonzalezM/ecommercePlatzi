
/*

import Layout from '../../Components/Layout'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'


function MyOrder() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      MyOrder
      <div className='px-6 overflow-y-scroll flex-1'>
                {
                 context.order?.slice(-1)[0].products.map(product => (
                    <OrderCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.images}
                        price={product.price}
                    />
                ))
                }
            </div>
    </Layout>
  )
}

export default MyOrder
*/

// import { useContext } from 'react'
// import { ShoppingCartContext } from '../../Context'
// import Layout from '../../Components/Layout'
// import OrderCard from '../../Components/OrderCard'
// import { ChevronLeftIcon } from '@heroicons/react/24/outline'
// import { Link } from 'react-router-dom'

// function MyOrder() {
//   const context = useContext(ShoppingCartContext)
//   const latestOrderProducts = context.order?.slice(-1)[0]?.products || []
//   const currentPath = window.location.pathname
//   const index = currentPath.substring
//   return (
//     <Layout>
//        <div className='flex mb-3 items-center justify-center relative w-80 '>
//         <Link to='/my-orders' className='absolute left-0'>
//         <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' ></ChevronLeftIcon>
//         </Link>
//         <h1>My Order</h1>

//       </div>
//       <div className='flex flex-col w-80'>
//         {
//           latestOrderProducts.map((product) => (
//             <OrderCard
//               key={product.id}
//               id={product.id}
//               title={product.title}
//               imageUrl={product.images}
//               price={product.price}
//             />
//           ))
//         }
//       </div>
//     </Layout>
//   )
// }

// export default MyOrder

import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard'

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') index = context.order?.length - 1

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-80'>
        {
          context.order?.[index]?.products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrder