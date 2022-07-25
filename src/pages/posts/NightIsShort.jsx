import NavbarSingle from '../../components/NavbarSingle';
import Footer from '../../components/Footer';
import '../../css/Single.css';
import '../../css/Recommended.css';
import ImagePost1 from '../../media/images/posts/night-is-short.webp';

function NightIsShort() {
  return (
    <>
      <NavbarSingle />
      <header>
        <div className="img-bg night">
          <h1 className="title-text-post">
            Night is short, walk on girl: a dose of surrealism and humor
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
              While so many Disney and anime features are being remade these
              days, it’s nice to see animation that could never be adapted to
              live-action. Sure, with current technologies, anything can be
              replicated in “live-action” form, but the surreal and abstract
              collage of Masaaki Yuasa (Mind Game) just wouldn’t translate in a
              worthwhile manner. Much of his film The Night Is Short, Walk On
              Girl, for instance, would need to be faithfully re-created in a
              way that’d be redundant, or it’d just be stripped of its varied
              visual eccentricities and become a straight single-night
              adventure, like After Hours, which might be fine but would have
              nothing to do with the original.
            </p>
            <p className="single-text-description">
              Watching something as unique as The Night Is Short, Walk On Girl
              is like reading a book you know can only be a book. Just as many
              animated features can be looked at with inspiration for
              live-action counterparts, too many novels these days are written
              with the wish to be adapted to film (it’s a lucrative plan). Books
              for which you can say that you easily see them as a movie are not
              great. Being truly unadaptable is what marks perfection within a
              medium. Ironically, The Night Is Short, Walk On Girl is based on a
              successful illustrated novel, by Tomihiko Morimi (and does have
              ties to the Tatami Galaxy series also based on his work), but in
              the direction of Yuasa does seem exclusively suited to not just
              animation but his style of animation.
            </p>
            <div className="post-img">
              <img src={ImagePost1} alt="Akage Takahata" />
            </div>
            <p className="single-text-description">
              To a newcomer, Yuasa’s efforts here could maybe be described as
              like if Hayao Miyazaki wanted to be Ralph Bakshi instead of Walt
              Disney. There’s so much bizarre fantasy on display in the
              imaginative tale of a young woman’s long and winding night out in
              Kyoto, but in The Night Is Short, Walk On Girl it involves a lot
              of alcohol and pornography and long-legged men, none of which is
              likely influenced by Bakshi but can feel reminiscent of the
              famously X-rated animator’s early films to a Western viewer. Yuasa
              never goes anywhere that’s too unsafe for young audiences (that’s
              good in case any parents mistake US distributor GKIDS for solely
              putting out material for kids); even the many shunga (Japanese
              erotica) prints visible on screen are playfully censored.
            </p>
            <p className="single-text-description">
              The Night Is Short, Walk On Girl is, most simplistically in its
              plot, a romantic comedy about a Kyoto University student in love
              with a younger schoolmate, whom he tries to make think is fated to
              be with him. He has been intentionally running into her and
              claiming coincidence. Meanwhile, she’s oblivious but also lonely.
              Still, on the night followed through in the film, her goals have
              nothing to do with love. They are to learn to drink like a
              grown-up and attempt to find a favorite book from her childhood at
              a book fair. In the third act, she also gains a new task of
              visiting and caring for numerous characters as they come down with
              a serious cold going around the city.
            </p>
            <p className="single-text-description">
              In his pursuit of her, the young man, only known as “Senpei,”
              forcefully tries to be a part of the girl’s night. During the book
              fair, he learns of her quest and also seeks out the same treasure
              in order to woo her with it. There are genuine coincidences along
              the way, too. And also terrible results to his scheming, including
              his having to endure a spicy food eating contest as well as an
              incident of accidental indecent exposure witnessed by his crush —
              who is only ever referred to as “The Girl with Black Hair.”
              Between the two main characters, they encounter mythological
              spirits, a “pervert” erotica cult, and a man with his own romantic
              destiny subplot in which he’s long-sworn not to change his
              underwear until he again crosses paths with his mystery love.
            </p>
            <div className="video-youtube">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Y67SjJ5xHRg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="single-text-description">
              The term “fever dream” is often used to describe animation like
              Yuasa’s and has been employed in many reviews of The Night Is
              Short, Walk On Girl, but it’s rarely so apt as it is here. Some of
              the wildest visuals come during the spicy food eating contest,
              when hallucinations form in the minds of characters in a fevered
              state while sweating through the consumption of “fire nabe” and
              hot dumplings and ramen. Later, all of the film’s characters save
              for the Girl with Black Hair are sick in bed, probably
              collectively causing more trippy apparitions. We see at least one
              of Senpei’s literal fever dreams, starring the Girl with Black
              Hair, of course,, and it’s just crazy and kaleidoscopic enough for
              us to know it’s not just part of the ongoing reverie.
            </p>
            <p className="single-text-description">
              The base romance story of The Night Is Short, Walk On Girl never
              connects in a compelling way, and anyway it’s sort of problematic
              in the same stalkery fashion as the plot of Amelie. Yet like that
              film, the whimsical and visionary storytelling here makes up for
              our lack of interest in the main characters coming together. All
              the strange stops along the way are worth traveling through, and
              even with Yuasa mixing up animation styles and unreal scenarios so
              frequently that it should keep the audience at a distance, this is
              a film with a full sense of its own space, and it marvelously
              absorbs and transports our imagination to the weird and wondrous
              world it’s selling.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}

export default NightIsShort;
