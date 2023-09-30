import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNotes from "./screens/MyNotes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mynotes" element={<MyNotes />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
