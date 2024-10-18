import { useDispatch } from "react-redux"
import {add, remove} from "../../store/slices/CartSlice"

export const ProductCard = ({ product}) => {
    const dispatch = useDispatch();


    const handleAddToCart = (product) =>{
        dispatch(add(product))
       
       
        

    }

    return (
        <div className="card">
            <img src={product.image
            } alt={product.image + "image"} className="w-full h-40 rounded-sm object-cover object-center" />
            <h2 className="text-white">{product.title.slice(0,10)}</h2>
            <h4>{`price:${product.price}`}</h4>
            <button className ="btn text-lg" onClick={() =>{
                handleAddToCart(product)
            }}>
              add to cart
            </button>

        </div>
    )

}