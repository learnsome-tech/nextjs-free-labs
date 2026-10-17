interface Product { id: string; name: string; price: number; }
async function fetchCatalog(): Promise<Product[]> {
  return [
    { id: "prod-1", name: "Enterprise Gateway", price: 499 },
    { id: "prod-2", name: "Edge Node Daemon", price: 199 },
  ];
}
async function ServerCatalogPage() {
  const products = await fetchCatalog();
  return {
    type: "main",
    props: { count: products.length, items: products.map((p) => p.name) },
  };
}
const vdom = await ServerCatalogPage();
console.log(`Rendered root tag: ${vdom.type}`);
console.log(`Resolved item count: ${vdom.props.count}`);
console.log(`Products: ${vdom.props.items.join(", ")}`);
