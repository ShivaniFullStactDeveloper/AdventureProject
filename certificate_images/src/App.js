
// import './App.css';
import Home from "../src/pages/Home";
import CertificatePage from "./pages/certificate/CertificatePage";
import Sidebar from "./common/header/Sidebar";
function App() {
  return (
    <div className="">
      <header >
        <Sidebar/>
        <CertificatePage/>        
      </header>
    </div>              
  );
}

export default App;
