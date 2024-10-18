import { useDispatch } from "react-redux";
import { remove } from "../../store/slices/CartSlice";

export const CartCard = ({ product }) => {
  let dispatch = useDispatch();
  return (
    <div className="card my-8">
    <img src={product.image
    } alt={product.image + "image"} className="w-full h-40 rounded-sm object-cover object-center" />
    <h2 className="text-white">{product.title.slice(0,10)}</h2>
    <h4>{`price:${product.price}`}</h4>
    <button className ="btn text-lg" onClick={() =>{
        dispatch(remove(product.id))
    }}>
      remove cart product
    </button>

</div>
  )
}