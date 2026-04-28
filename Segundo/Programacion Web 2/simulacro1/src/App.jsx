import "./App.css";
import Header from "./modules/header.jsx";
import Footer from "./modules/footer.jsx";
import Product from "./modules/product.jsx";
import productsJSON from "./data/products.json";

const products = productsJSON.productos;

function App() {
    const productCards = products.map((e) => {
        return <Product producto={e} />;
    });

    return (
        <div>
            <Header />
            {productCards}
            <Footer />
        </div>
    );
}

export default App;
