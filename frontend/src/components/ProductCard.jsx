import {  EditIcon, TrashIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/useProductStore'

const ProductCard = ({product}) => {
  const {deleteProduct}= useProductStore();
  // Use a 16:9 aspect ratio for the image container
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="w-full aspect-[16/9] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{product.name}</h2>
        <p className='text-lg'>${product.price}</p>
        <div className="card-actions items-center justify-end">
          <Link to={`/product/${product.id}`} className='btn btn-outline rounded-2xl'>
            <EditIcon className='size-5'/>
          </Link>
          <button className="btn rounded-2xl btn-warning">
            <TrashIcon onClick={()=> deleteProduct(product.id)} className="size-5"/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard