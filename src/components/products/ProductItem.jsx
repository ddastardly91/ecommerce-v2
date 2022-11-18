import "./ProductItem.scss";

const ProductItem = ({ product }) => {
   return (
      <div className="product-container">
         <div className="product-bg" />
         <div className="product-body-container">
            <div className="product-body">
               <h2>{product.name}</h2>
               <p>${product.price}</p>
            </div>
            <div className="product-colors">
               {product.colors.map((color) => (
                  <div
                     className="round"
                     style={{ backgroundColor: `${color.hex}` }}
                  />
               ))}
            </div>
         </div>
         <div className="btn-container">
            <button className="btn">Add to bag</button>
         </div>
      </div>
   );
};
export default ProductItem;
