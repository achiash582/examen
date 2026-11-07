export async function fetchProductos() {
  const res = await fetch("https://dummyjson.com/products?limit=12");
  if (!res.ok) throw new Error("Error al cargar los productos");
  const data = await res.json();
  return data.products;
}