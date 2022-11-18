import ProductItem from "./ProductItem";
import "./Products.scss";

const Products = ({ products }) => {
   return (
      <div className="products-container">
         {products.map((product) => (
            <ProductItem product={product} />
         ))}
      </div>
   );
};
export default Products;
