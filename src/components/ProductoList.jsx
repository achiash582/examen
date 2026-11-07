import ProductoCard from "./ProductoCard";

export default function ProductoList({ productos, carrito, onAgregar, onQuitar }) {
  return (
    <div className="grid">
      {productos.map((p) => (
        <ProductoCard
          key={p.id}
          producto={p}
          enCarrito={carrito.some((c) => c.id === p.id)}
          onAgregar={onAgregar}
          onQuitar={onQuitar}
        />
      ))}
    </div>
  );
}