

const ItemList = ({ products }) => {
    console.log(products)
    return (
    <div>
    {products.map((Product) => (
    <h2>{Product.title}</h2>
    ))}
    </div>
    );
    };