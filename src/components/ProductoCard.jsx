export default function ProductoCard({ producto, enCarrito, onAgregar, onQuitar }) {
  return (
    <div className={`card ${enCarrito ? "seleccionada" : ""}`}>
      <img src={producto.thumbnail} alt={producto.title} />
      <h3>{producto.title}</h3>
      <span className="categoria">{producto.category}</span>
      <p className="precio">$ {producto.price.toFixed(2)}</p>
      {enCarrito ? (
        <button onClick={() => onQuitar(producto.id)}>Quitar</button>
      ) : (
        <button onClick={() => onAgregar(producto)}>Agregar</button>
      )}
    </div>
  );
}