import "./App.css";
import { Header, Footer } from "./Components";
import { AllRoutes } from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App dark:bg-slate-800">
      <Header></Header>
      <AllRoutes></AllRoutes>
      <Footer></Footer>
    </div>
  );
}

export default App;
