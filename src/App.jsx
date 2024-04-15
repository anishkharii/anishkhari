
import "./App.css";
import SideBar from "./Components/sidebar";
import NavBar from "./Components/navbar";
import MainPage from "./Components/detailsPage";

function App() {
  return (
    <>
      <div className="App">
        <SideBar/>
        <MainPage/>
        <NavBar/>
      </div>
    </>
  );
}

export default App;
