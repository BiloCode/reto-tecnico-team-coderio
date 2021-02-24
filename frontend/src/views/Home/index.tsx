import classnames from 'classnames';
import "./styles.scss";

import Card from "shared/components/common/Card";
import SearchLayout from "shared/components/layouts/SearchLayout";
import Spinner from 'shared/components/common/Spinner';
import Decorator from 'shared/components/common/Decorator';

const loading = false;

const Home = () => {
  const grid_card_class = classnames(
    "home-view__grid-card-content",
    { loading }
  );

  return <div className="home-view">
    <div className="home-view__container">
      <div className="home-view__input-search-container">
        <SearchLayout />
      </div>
      <div className={grid_card_class}>
        {
          loading ?
            <Spinner /> :
            <>
              <Card />
              <Card />
              <Card />
            </>
        }
      </div>
    </div>
    <Decorator />
  </div>
};

export default Home;