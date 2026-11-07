export default function CarritoPanel({ carrito, total, onQuitar, onVaciar }) {
  return (
    <aside className="carrito">
      <h2>Carrito ({carrito.length})</h2>
      {carrito.map((p) => (
        <div className="carrito-item" key={p.id}>
          <img src={p.thumbnail} alt={p.title} width="40" />
          <span>
            {p.title} - $ {p.price.toFixed(2)}
          </span>
          <button onClick={() => onQuitar(p.id)}>Quitar</button>
        </div>
      ))}
      <h3 className="total">Total: $ {total.toFixed(2)}</h3>
      <button onClick={onVaciar}>Vaciar carrito</button>
    </aside>
  );
}