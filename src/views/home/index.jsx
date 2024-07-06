import { memo } from "react";
import { Link } from "react-router-dom";

const Home = memo(() => {
  return (
    <div className="home">
      Home
      <Link to="/detail">go to detail</Link>
    </div>
  );
});

export default Home;
