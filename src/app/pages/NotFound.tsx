import { Link } from "react-router";
const logo = "/images/logo.svg";

export function NotFound() {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="mb-6">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-royal/15 blur-2xl rounded-full" />
            <img
              src={logo}
              alt="Eastside Colts"
              className="relative w-20 h-20 object-contain drop-shadow-2xl mx-auto"
            />
          </div>
        </div>
        <h1 className="text-6xl text-royal mb-4" style={{ fontWeight: 800 }}>404</h1>
        <p className="text-soft-gray mb-6">Page not found — but the Colts are always here.</p>
        <Link to="/" className="px-6 py-3 rounded-lg bg-royal text-white text-sm" style={{ fontWeight: 600 }}>
          Go Home
        </Link>
      </div>
    </div>
  );
}