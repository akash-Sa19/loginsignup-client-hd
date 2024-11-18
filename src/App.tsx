import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Signup />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/signup"
        element={<Welcome />}
      />
    </Routes>
  );
}

export default App;
