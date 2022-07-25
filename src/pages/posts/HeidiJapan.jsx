import NavbarSingle from '../../components/NavbarSingle';
import Footer from '../../components/Footer';
import '../../css/Single.css';
import '../../css/Recommended.css';

function HeidiJapan() {
  return (
    <>
      <NavbarSingle />
      <header>
        <div className="img-bg heidi">
          <h1 className="title-text-post">
            How 'Heidi' conquered Japan, sparking an anime revolution
          </h1>
          <div className="metadata">
            <span className="author">by David Leihg</span>
            <span className="date">July 23, 2022</span>
          </div>
        </div>
      </header>
      <article className="single-container">
        <div className="box-description">
          <div className="single-container">
            <p className="single-text-description">
              Heidi and Super Mario may not seem to have much in common but
              anime and video game aficionados will detect the signature style
              of Japanese character designer Yoichi Kotabe in both. Far from the
              Swiss Alps, the cherished 19th-century storybook character Heidi
              has played an unlikely role in the creation of Japan's now booming
              anime industry. The story of the little orphan girl who goes to
              live with her gruff grandfather in the mountains took Japan by
              storm in the 1970s with the animation series "Alps no Shojo Heidi"
              ("Heidi: A Girl of the Alps").
            </p>
            <p className="single-text-description">
              The 52-part TV show, which became a worldwide hit, marked a
              turning point in the careers of its creators, including Kotabe.
              Heidi also boosted the standing of director Isao Takahata, best
              known for the animated war film "Grave of the Fireflies", and
              Hayao Miyazaki, creator of films "Spirited Away" and "My Neighbor
              Totoro". "The goal was to have a little girl who was 'kawaii', as
              cute as possible," he told AFP, describing how he had first drawn
              her with large eyes, a big smile, but also "little braids".
            </p>
            <div className="video-youtube">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/pSGqUOpcc0c"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="single-text-description">
              But he said that when he presented his first sketches, a
              specialist on the 1880 novel by Johanna Spyri pointed out that
              "Heidi is a five year-old girl who lives in the mountains with her
              grandfather, who is not very friendly". Takahata had initially
              wanted to adapt the story of Pippi Longstocking to the screen. But
              Swedish author Astrid Lindgren turned down the offer, saying she
              feared the Japanese director was interested "only in money",
              Kotabe said.
            </p>
            <p className="single-text-description">
              So the director turned his attention to another classic of
              children's literature, and the team of Japanese animation artists
              headed to Switzerland to study Alpine cabins and pastures around
              the small eastern village of Maienfeld. But the series is in fact
              "a piece of art", he insisted, pointing to its "creativity, visual
              impact and ability to move people".
            </p>
            <p className="single-text-description">
              The exhibition consists of a large number of animation panels,
              aquarelles and sketches of baby goats observed by the artists
              during their Alpine excursion. "The images of Heidi and her
              adventures in the mountains have had a strong impact on the
              Japanese, both young and old," Veronique Kanel, of Swiss Tourism,
              told AFP.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}

export default HeidiJapan;
