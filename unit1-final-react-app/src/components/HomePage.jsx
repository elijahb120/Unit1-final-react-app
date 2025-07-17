import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <main>
        <h1 className="home-title">Welcome to Camp Buddy!</h1>
        <div className="home-boxes">
          <img src="https://www.mthigh.com/site/connect/blog/authors/john_mccolly/camping-at-mountain-high/pictures/camping-rev/fullsize"></img>
          <ul>
            <li>Camp Buddy is your all in one camping planner!</li>
            <li></li>
            <li>Making sure you don't forget to bring bug spray since 2025!</li>
            <li>
              Plan your trip <Link to="/packinglist">Here!</Link>
            </li>
          </ul>
        </div>
        <div className="home-boxes">
          <p>
            Preparing for a camping trip can be stressful At camp buddy we offer an interactive packing list with note taking features check it out <Link to="/packinglist">here!</Link>
          </p>
          <img id="car" src="https://images2.minutemediacdn.com/image/upload/c_fill,w_1200,ar_4:3,f_auto,q_auto,g_auto/shape/cover/sport/de3093833-01-car-trunk-full-high-res-624ccc39d59f8e8c64e82226cf3891ed.jpg"></img>
        </div>
        <div className="home-boxes">
          <img src="https://www.mthigh.com/site/connect/blog/authors/john_mccolly/camping-at-mountain-high/pictures/camping-rev/fullsize"></img>
          <p>To view your saved packing list and custom notes head over to the <Link to="/packinglist">MyTrip</Link> page.</p>
        </div>
      </main>
    </>
  );
}
