import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";
import { fetchProducts } from "../../store/slices/ProductSlice";
import { statuses } from "../../store/slices/ProductSlice";

export const Products = () => {
    const dispatch = useDispatch();
    const { product: products, status } = useSelector((store) => store.product);



    // Fetch products 
    useEffect(() => {
        const fetchProduct = async () => {
            dispatch(fetchProducts());
        };
        fetchProduct();
    }, [dispatch]);

    if (status === statuses.loading) {

        return <div className="flex justify-between container">
            <div className="loader mx-auto my-8"></div>
        </div>

    }
    if (status ===statuses.error) {
        return <h2 className="text-xl text-center my-6">
            something went wrong
        </h2>
    }
    return (
        <section className="product-sec">
            <h2 className="mb-8 lg:text-center">Our Products</h2>
            {
                <div className="product-container grid gap-4 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
                    {products.map((product, index) => (
                        <ProductCard key={product.id +Math.random() || index} product={product} />
                    ))}
                </div>

            }
        </section>
    );
};
