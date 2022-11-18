import { Route, Routes } from "react-router-dom";

import CardsPage from "./pages/CardsPage";
import NotFound from "./pages/NotFound";
import { CardContextProvider } from "./context/CardProvidergit";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      {/*<Navbar />*/}
      <div className="container mx-auto py-4 px-20">
        <CardContextProvider>
          <Routes>
            <Route path="/" element={<CardsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CardContextProvider>
      </div>
    </div>
  );
}

export default App;
