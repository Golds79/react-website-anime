import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/App.css';
import AnimePageSinglePage from './pages/AnimeSinglePage';
import HayaoMiyazaki from './pages/HayaoMiyazaki';
import Home from './pages/Home';
import IsaoTakahata from './pages/IsaoTakahata';
import MakotoShinkai from './pages/MakotoShinkai';
import MamoruHosoda from './pages/MamoruHosoda';
import NaokoYamada from './pages/NaokoYamada';
import AkageNoAn from './pages/posts/AkageNoAn';
import BarefootGen from './pages/posts/BarefootGen';
import FurandasuNoInu from './pages/posts/FurandasuNoInu';
import HeidiJapan from './pages/posts/HeidiJapan';
import NightIsShort from './pages/posts/NightIsShort';
import RecommendedAnime from './pages/RecommendedAnime';
import SatoshiKon from './pages/SatoshiKon';
import StudioGhibli from './pages/StudioGhibli';
import StudioGhibliSingle from './pages/StudioGhibliSingle';
import Add from './pages/Add';
import Watchlist from './pages/Watchlist';
import Watched from './pages/Watched';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <>
      <GlobalProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/isao-takahata" element={<IsaoTakahata />} />
            <Route path="/satoshi-kon" element={<SatoshiKon />} />
            <Route path="/makoto-shinkai" element={<MakotoShinkai />} />
            <Route path="/studio-ghibli" element={<StudioGhibli />} />
            <Route path="/recommended-anime" element={<RecommendedAnime />} />
            <Route path="/hayao-miyazaki" element={<HayaoMiyazaki />} />
            <Route path="/naoko-yamada" element={<NaokoYamada />} />
            <Route path="/mamoru-hosoda" element={<MamoruHosoda />} />
            <Route path="/akage-no-an" element={<AkageNoAn />} />
            <Route path="/heidi-japan" element={<HeidiJapan />} />
            <Route path="/banned-barefoot-gen" element={<BarefootGen />} />
            <Route
              path="/furandasu-no-inu-children"
              element={<FurandasuNoInu />}
            />
            <Route path="/night-short" element={<NightIsShort />} />
            <Route path="/studio-ghibli/:id" element={<StudioGhibliSingle />} />
            <Route path="/:id" element={<AnimePageSinglePage />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/watched" element={<Watched />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
