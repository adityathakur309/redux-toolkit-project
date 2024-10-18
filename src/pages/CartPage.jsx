import { useDispatch, useSelector } from "react-redux"
import { CartCard } from "../components/UI/CartCart";


export const CartPage = () => {
    
    const products = useSelector((store) =>{
        return store.cart;
    })
if(products){
    return (
        <section className="cart-sec container">
            <h2 className="lg:text-center text-xl">cart products</h2>

            <div className="cart-container grid gap-4 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
                {

                    products.map((product,index) => {
                        return <CartCard product = {product} key={product.id ||index}/>
                       
                    })

                }

            </div>
        </section>
    )
    
}
    
   
}