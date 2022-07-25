import NavbarSingle from '../../components/NavbarSingle';
import Footer from '../../components/Footer';
import '../../css/Single.css';
import '../../css/Recommended.css';
import ImagePost1 from '../../media/images/posts/furandasu-no-inu.webp';
import ImagePost2 from '../../media/images/posts/furandasu-no-inu-anime.webp';

function FurandasuNoInu() {
  return (
    <>
      <NavbarSingle />
      <header>
        <div className="img-bg furandasu">
          <h1 className="title-text-post">
            Furandâsu no inu, an anime that is not suitable for children
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
              The time was right to give Yoshio Kuroda's Gekijoban Furandaasu no
              Inu [The Dog of Flanders] another spin. It's been ages since I
              last watched the film and late 2016 a brand-new statue dedicated
              to the memory of Nello and Patrasche was revealed right in front
              of Antwerp's cathedral. A perfect excuse to revisit this tragic
              story, on top of that I was also pretty eager to find out how well
              Kuroda's version had held up over time. Luckily the film didn't
              disappoint.
            </p>
            <p className="single-text-description">
              The original book was written by Ouida, a 19th century British
              novelist. The story is set in Flanders, but never really got much
              love over here until a popular comic book series (Spike and Suzy -
              Suske & Wiske in Dutch) picked it up and rewrote history to
              include its main set of characters. More importantly though, the
              Japanese heard of the tale and fell in love with its premise.
              Nowadays just about everyone who ever attended school in Japan
              knows the story of Nello and Patrasche by heart. There's a
              Japanese animated series that dates back to the 70s, Kuroda's film
              is best seen as a modernization of that series. This explains why
              the art style looks a little outdated (think Candy Candy or Spoon
              Obasan), but underneath that simple exterior lies a very tragic
              and touching story, so don't let its innocent looks fool you. The
              story and execution put The Dog of Flanders firmly into Watership
              Down and Hotaru no Haka territory. While those films enjoy broad
              recognition though, The Dog of Flanders's lack of general
              availability has made it way more obscure.
            </p>
            <div className="post-img">
              <img src={ImagePost1} alt="Akage Takahata" />
            </div>
            <p className="single-text-description">
              The plot of the film stays pretty close to the original. Nello is
              a young boy who lives with his grandfather on a farm. He is best
              friends with Aloise, but she was born into a rich family and
              Aloise's dad doesn't like Nello hanging out with her. Things take
              a turn for the worse when Nello's grandfather is forced to pay off
              Nello's dog Patrasche, a setback that leaves the two with little
              money to survive. Not long after Nello's grandfather falls ill,
              putting the burden of survival on the shoulders of Nello and his
              faithful dog. The simplistic character art takes a while to get
              used to, but 30 minutes in I hardly noticed it anymore. For a
              feature film it looks pretty bare and basic, luckily The Dog of
              Flanders is helped by its more elaborate background art and a
              pretty decent level of animation. The animation in particular
              helps to bring the characters to life. It may not be as
              in-your-face or detailed as your average Disney feature, but it
              does capture the actions and emotions with surprising subtlety.
              Sadly the ending features some very out of place (and technically
              limited) CG. There's only one such scene, but it does happen smack
              in the middle of the emotional payoff. A strange decision maybe,
              but I guess that's just a sign of the 90s.
            </p>
            <p className="single-text-description">
              The soundtrack is rather present and can be a little sentimental
              at times. It walks a fine line between emotional and sappy, but
              never overreaches. Your mileage may vary of course. If you demand
              absolute subtlety from a drama soundtrack, then the music will no
              doubt be a bit too much, but all in all there are way worse
              offenders out there. The dub is a little trickier. The film is set
              in Antwerp, so you'd think a Dutch dub would make sense here.
              Sadly Dutch/Flemish subs are quite atrocious and to add insult to
              injury, they even changed the names of the characters to Martijn
              and Marieke. There's also an American dub out there, which makes
              no sense at all, and then there's of course the original Japanese
              dub. While it's a tad weird to hear Belgian characters speak
              Japanese, it's by far the best dub and in combination with the art
              style it's probably the sanest option available. Finding the
              Japanese dub with English subs will be quite the challenge though.
            </p>
            <div className="post-img">
              <img src={ImagePost2} alt="Akage Takahata" />
            </div>
            <p className="single-text-description">
              The story of Nello and Patrasche is incredibly sad. Very little
              goes right for the boy and his dog and when luck is finally on
              their side there's always standing something in the way. The
              outcome of the story is inevitable and knowing what is to come
              actually makes repeated viewings more depressing. The strength of
              this film lies in the sweet and innocent portrayal of Nello and
              the love he shares with his dog Patrasche. There's not much
              complexity there, but it does feel extremely genuine and truthful.
              This setup was very deliberate too, as is illustrated by the way
              Kuroda worked this reasoning into the plot itself. It's not quite
              often that you see a film arguing its own choices within its own
              narrative.
            </p>
            <p className="single-text-description">
              Ideally I would advise against watching a Dutch or English dub,
              but if you're able to stomach it this film is just too rare and
              too beautiful to pass up simply because a Japanese dub isn't
              readily available. The character art takes a little getting used
              to, but lush background art, smart animation and a good score make
              up for that. And when you strip all that away, what remains is a
              very touching, very dear yet very sad story about a boy that got a
              lot less out of life than he deserved. If you ever find yourself
              in a situation where you can watch this film, make sure you do.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}

export default FurandasuNoInu;
