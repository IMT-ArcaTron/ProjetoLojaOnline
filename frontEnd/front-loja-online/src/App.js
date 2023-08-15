import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Auth from "./components/Auth";
import { ProductProvider } from "./controllers/productContext";

function App() {
  return (
    <div>
      <Auth />
    </div>
  );
}
export default App;
