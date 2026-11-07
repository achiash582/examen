import { useState } from "react";
import { useProductos } from "./hooks/useProductos";
import ProductoList from "./components/ProductoList";
import CarritoPanel from "./components/CarritoPanel";

export default function TiendaApp() {
  const { productos, cargando, error } = useProductos();
  const [carrito, setCarrito] = useState([]);

  const agregar = (producto) => {
    setCarrito((prev) =>
      prev.some((p) => p.id === producto.id) ? prev : [...prev, producto]
    );
  };
  const quitar = (id) => setCarrito((prev) => prev.filter((p) => p.id !== id));
  const vaciar = () => setCarrito([]);

  const total = carrito.reduce((suma, p) => suma + p.price, 0);

  return (
    <div className="tienda">
      <h1>Mini Tienda</h1>
      {cargando && <p>Cargando...</p>}
      {error && <p className="error">Error: {error}</p>}
      {!cargando && !error && (
        <div className="layout">
          <ProductoList
            productos={productos}
            carrito={carrito}
            onAgregar={agregar}
            onQuitar={quitar}
          />
          <CarritoPanel
            carrito={carrito}
            total={total}
            onQuitar={quitar}
            onVaciar={vaciar}
          />
        </div>
      )}
    </div>
  );
}