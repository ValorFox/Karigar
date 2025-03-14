import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div
      className="flex flex-col min-h-screen bg-[#F2E9E1]"
      id="main-container"
    >
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
