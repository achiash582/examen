import { useEffect, useState } from "react";
import { fetchProductos } from "../services/fetchProductos";

export function useProductos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let activo = true;
    fetchProductos()
      .then((data) => {
        if (activo) setProductos(data);
      })
      .catch((err) => {
        if (activo) setError(err.message || "No se pudo conectar");
      })
      .finally(() => {
        if (activo) setCargando(false);
      });
    return () => {
      activo = false;
    };
  }, []);

  return { productos, cargando, error };
}