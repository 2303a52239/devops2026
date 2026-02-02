function ProductCard(props) {
  return (
    <div>
      <h3>{props.product.name}</h3>
      <p>Price: ₹{props.product.price}</p>
      <hr />
    </div>
  );
}

export default ProductCard;
