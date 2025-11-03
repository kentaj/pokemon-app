import { Routes, Route, Link } from "react-router-dom";
import ListPage from "./pages/List";
import DetailPage from "./pages/Detail";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto p-4 flex items-center gap-4">
          <Link to="/" className="font-semibold text-lg">
            Pokémon Gen 1 Explorer
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
