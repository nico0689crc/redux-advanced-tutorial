import ProductItem from "./ProductItem";
import "./Products.css";

const PRODUCTS = [
  {
    id: 0,
    price: 9,
    title: "Book 1",
    description:
      "Fugiat ea cillum reprehenderit aliquip ullamco cillum veniam reprehenderit ex exercitation enim sint velit.",
  },
  {
    id: 1,
    price: 15,
    title: "Book 2",
    description:
      "Fugiat ea cillum reprehenderit aliquip ullamco cillum veniam reprehenderit ex exercitation enim sint velit.",
  },
  {
    id: 2,
    price: 16,
    title: "Book 3",
    description:
      "Fugiat ea cillum reprehenderit aliquip ullamco cillum veniam reprehenderit ex exercitation enim sint velit.",
  },
  {
    id: 3,
    price: 94,
    title: "Book 4",
    description:
      "Fugiat ea cillum reprehenderit aliquip ullamco cillum veniam reprehenderit ex exercitation enim sint velit.",
  },
  {
    id: 4,
    price: 19,
    title: "Book 5",
    description:
      "Fugiat ea cillum reprehenderit aliquip ullamco cillum veniam reprehenderit ex exercitation enim sint velit.",
  },
];

const Products = () => {
  return (
    <section className="products">
      <h2>Buy your favorite products</h2>
      <ul>
        {PRODUCTS.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
