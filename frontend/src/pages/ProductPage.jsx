import { CategoryWiseProductPage } from "../components/CategoryWiseProductPage"
import { Navbar } from "../components/Navbar"

export const ProductPage = (additionalProp) => {
    return (
        <section className="px-4 py-4">
            <Navbar />
            <hr />
            <br />
            <CategoryWiseProductPage category={additionalProp}/>
        </section>
    )
}