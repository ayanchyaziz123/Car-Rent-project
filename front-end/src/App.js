import "../node_modules/bootstrap/dist/css/bootstrap.css";
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import $ from "jquery";
import Navbar from "./components/admin/layout/SideBar.jsx";

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Navbar/>
    </div>
  );
}

export default App;
