import { Routes, Route, Link } from "react-router-dom";
import ListPage from "./pages/List";
import DetailPage from "./pages/Detail";
import dentmonLogo from "./assets/dentmon.png";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto p-4 flex items-center justify-center relative">
          <div className="absolute left-4">
            <Link
              to="/"
              className="font-semibold text-lg text-brand-700 hover:text-brand-600 transition"
            >
              Dentmon
            </Link>
          </div>
          <Link to="/" className="flex items-center justify-center">
            <img
              src={dentmonLogo}
              alt="Dentmon logo"
              className="w-14 h-14 drop-shadow-md hover:scale-110 transition-transform duration-300"
            />
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/pokemon/:name" element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}
