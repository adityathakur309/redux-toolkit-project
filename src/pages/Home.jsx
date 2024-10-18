import { Products } from "../components/UI/Products"

export const HomePage = () => {

    return (
        <main>
            <section className="container">
                <h1 className="mb-4 lg:text-center">welcome to our redux toolkit store</h1>
                <Products />

            </section>
        </main>
    )
}