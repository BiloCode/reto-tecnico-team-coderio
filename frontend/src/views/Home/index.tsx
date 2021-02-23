import "./styles.scss";

import Card from "shared/components/common/Card";
import SearchLayout from "shared/components/layouts/SearchLayout";

const Home = () => (
  <div className="home-view">
    <div className="home-view__container">
      <div className="home-view__input-search-container">
        <SearchLayout />
      </div>
      <div className="home-view__grid-card">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </div>
);

export default Home;