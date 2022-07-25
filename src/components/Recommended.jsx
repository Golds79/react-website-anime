import React from 'react';
import '../css/Recommended.css';
import RecommendedItem from './RecommendedItem';
import image1 from '../media/images/violet_evergarden.webp';
import image2 from '../media/images/clannad.webp';
import image3 from '../media/images/erased.webp';
import image4 from '../media/images/yawara.webp';
import image5 from '../media/images/a_silent_voice.webp';
import image6 from '../media/images/your_name.webp';
import image7 from '../media/images/kimi_no.webp';
import image8 from '../media/images/akira.webp';
import image9 from '../media/images/candy_candy.webp';

function Recommended() {
  return (
    <div className="recomm">
      <div className="recomm-container">
        <div className="header-recomm">
          <h3>Recommended</h3>
        </div>
        <div className="recomm-box">
          <main className="grid">
            <RecommendedItem
              src={image1}
              title="Violet Evergarden (TV Series)"
              studios="Studios: Kyoto Animation"
              directed="Directed by Taichi Ishidate"
              composer="Music by Evan Call"
              premiered="Premiered: Winter 2018"
              path="/33352"
            />
            <RecommendedItem
              src={image2}
              title="Clannad (TV Series)"
              studios="Studios: Kyoto Animation"
              directed="Directed by Tatsuya Ishihara"
              composer="Music by Jun Maeda"
              premiered="Premiered: Fall 2007"
              path="/2167"
            />
            <RecommendedItem
              src={image3}
              title="Boku dake ga Inai Machi (Erased)"
              studios="Studios: A-1 Pictures"
              directed="Directed by Tomohiko Ito"
              composer="Music by Yūki Kajiura"
              premiered="Premiered: Winter 2016"
              path="/31043"
            />
            <RecommendedItem
              src={image4}
              title="Yawara!"
              studios="Studios: Madhouse"
              directed="Directed by Hiroko Tokita"
              composer="Music by Hideharu Mori"
              premiered="Premiered: Fall 1989"
              path="/691"
            />
            <RecommendedItem
              src={image5}
              title="Koe no katachi (A Silent Voice)"
              studios="Studios: Kyoto Animation"
              directed="Directed by Naoko Yamada"
              composer="Music by Kensuke Ushio"
              premiered="Premiered: Sep 17, 2016"
              path="/28851"
            />
            <RecommendedItem
              src={image6}
              title="Kimi no Na wa (Your Name)"
              studios="Studios: CoMix Wave Films"
              directed="Directed by Makoto Shinkai"
              composer="Music by Radwimps"
              premiered="Premiered: Aug 26, 2016"
              path="/32281"
            />
            <RecommendedItem
              src={image7}
              title="Kimi no Suizou wo Tabetai"
              studios="Studios: Studio VOLN"
              directed="Directed by Shin'ichirô Ushijima"
              composer="Music by Hiroko Sebu"
              premiered="Premiered: Sep 1, 2018"
              path="/36098"
            />
            <RecommendedItem
              src={image8}
              title="Akira"
              studios="Studios: Tokyo Movie Shinsha"
              directed="Directed by Katsuhiro Ōtomo"
              composer="Music by Shoji Yamashiro"
              premiered="Premiered: Jul 16, 1988"
              path="/47"
            />
            <RecommendedItem
              src={image9}
              title="Kyandi Kyandi (Candy Candy)"
              studios="Studios: CoMix Wave Films"
              directed="Directed by Hiroshi Shidara"
              composer="Music by Takeo Watanabe"
              premiered="Premiered: Fall 1976"
              path="/2800"
            />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Recommended;
