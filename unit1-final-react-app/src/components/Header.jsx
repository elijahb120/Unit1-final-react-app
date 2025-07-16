import{Link} from "react-router-dom"
export default function Header() {
  return (
    <header>
      <h1 id="title">Camping planner</h1>
      <nav id="nav-bar">
         <p class="nav-button"><Link to="/">Home</Link></p>
         <p class="nav-button"><Link to="/about">About</Link></p>
         <p class="nav-button"><Link to="/packinglist">Packing</Link></p>
         <p class="nav-button"><Link to="/campsites">Campsites</Link></p>
         
      </nav>
    </header>
  );
}
