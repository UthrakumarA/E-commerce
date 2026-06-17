const ProductCard=({ product })=>
{
   return (
    <div className="card">
      <img
        src={product.image}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <p>₹{product.price}</p>

      <button>Add To Cart</button>
    </div>
  );
}

export default ProductCard;