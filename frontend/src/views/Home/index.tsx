import "./styles.scss";

import { AiOutlineTeam } from 'react-icons/ai';

import SearchLayout from "shared/components/layouts/SearchLayout";
import Decorator from 'shared/components/common/Decorator';
import TimezoneLoadingSkeleton from 'shared/components/layouts/TimezoneLoadingSkeleton';
import TimezoneList from 'shared/components/layouts/TimezoneList';

import useHome from 'shared/hooks/useHome';

const Home = () => {
  const { list, state , removeCard } = useHome();

  let timezonesLength = state !== "loading" ? `(${list.length})` : "(...)";

  return <div className="home-view">
    <div className="home-view__container">
      <header className="home-view__header">
        <span className="home-view__global-title-icon"><AiOutlineTeam /></span>
        <h1 className="home-view__global-title">Reto Tecnico Team Coderio</h1>
      </header>
      <nav className="home-view__navigation">
        <SearchLayout />
      </nav>
      <aside className="home-view__aside">
        <p className="home-view__title">Zonas horarias registradas {timezonesLength}</p>
        <p className="home-view__subtitle">Aqui apareceran las zonas horarias que has registrado previamente.</p>
      </aside>
      <section className="home-view__section-card-content">
        {
          state === "loading" ?
            <TimezoneLoadingSkeleton /> :
            <TimezoneList
              list={list} 
              removeCard={removeCard}
            />
        }
      </section>
    </div>
    <Decorator />
  </div>
};

export default Home;