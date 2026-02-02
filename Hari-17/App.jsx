import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./homework/Login";
import Dashboard from "./homework/Dashboard";
import Products from "./homework/Products";
import NotFound from "./homework/NotFound";
import PrivateRoute from "./homework/PrivateRoute";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Routes>
      <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute isAuth={isAuth}>
            <Dashboard setIsAuth={setIsAuth} />
          </PrivateRoute>
        }
      />

      <Route path="/products" element={<Products />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;