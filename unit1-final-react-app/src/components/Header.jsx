import{Link} from "react-router-dom"
export default function Header() {
  return (
    <header>
      <h1 id="header-title">Camping planner</h1>
      <nav id="nav-bar">
         <Link className="nav-button" to="/">Home</Link>
         <Link className="nav-button" to="/about">About</Link>
         <Link className="nav-button" to="/packinglist">Packing</Link>
        <Link className="nav-button" to="/mytrip">MyTrip</Link>
         
      </nav>
    </header>
  );
}
