import classnames from 'classnames';
import "./styles.scss";

import Card from "shared/components/common/Card";
import SearchLayout from "shared/components/layouts/SearchLayout";
import Spinner from 'shared/components/common/Spinner';
import Decorator from 'shared/components/common/Decorator';

import useHome from 'shared/hooks/useHome';

const Home = () => {
  const { list, state , removeCard } = useHome();
  const grid_card_class = classnames(
    "home-view__grid-card-content",
    { loading : state === "loading" }
  );

  return <div className="home-view">
    <div className="home-view__container">
      <div className="home-view__input-search-container">
        <SearchLayout />
      </div>
      <div className={grid_card_class}>
        {
          state === "loading" ?
            <Spinner /> :
            <>
              {
                list.map(v => (
                  <Card
                    key={v._id}
                    cardData={v}
                    onClickIconDelete={removeCard(v._id)}
                  />
                ))
              }
            </>
        }
      </div>
    </div>
    <Decorator />
  </div>
};

export default Home;