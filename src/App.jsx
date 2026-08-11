import { useEffect, useState } from "react";
import { classifyOrderSize } from "./widgets";

// SaaS Platform: React only calls the /api/customer/* namespace.
// The Angular admin app (TD_Frontend_angularjs, same branch name)
// only calls /api/admin/*. See TD_Backend_nodejs's saasplatform
// branches for the real backend enforcing that boundary.
export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/customer/products")
      .then((r) => r.json())
      .then((data) => setProducts(data.products))
      .catch(() => setProducts([]));
  }, []);

  return (
    <div>
      <h1>SaaS Platform — Customer App (React)</h1>
      <p>Order size bucket example: {classifyOrderSize(products.length)}</p>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
