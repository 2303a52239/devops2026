import ProductCard from "./ProductCard";

function ProductList() {
  const products = [
    { id: 1, name: "Mobile", price: 15000 },
    { id: 2, name: "Laptop", price: 60000 },
    { id: 3, name: "Headphones", price: 2000 }
  ];

  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
