import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <main id="home-content">
        <div id="top-box">
          <img src="https://www.mthigh.com/site/connect/blog/authors/john_mccolly/camping-at-mountain-high/pictures/camping-rev/fullsize"></img>
          <p>
            Welcome to Camp Buddy! <Link to="/packinglist">Plan!</Link>
          </p>
        </div>
        <div id="middle-box">
          <p>
            babababba <Link to="/about">About!</Link>
          </p>
          <img src="https://www.mthigh.com/site/connect/blog/authors/john_mccolly/camping-at-mountain-high/pictures/camping-rev/fullsize"></img>
        </div>
        <div id="bottom-box">
          <img src="https://www.mthigh.com/site/connect/blog/authors/john_mccolly/camping-at-mountain-high/pictures/camping-rev/fullsize"></img>
          <p>sfsdfdfdfd</p>
        </div>
      </main>
    </>
  );
}
