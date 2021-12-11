import React, { useState } from "react";
import "./styles.css";

var AllMovies = {
  Horror: [
    {
      Title: "The exorcist",
      Description:
        "When a 12-year-old girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her.",
      Image: "https://us.v-cdn.net/5020761/uploads/editor/bc/6yulmok45s0n.jpg",
      Ratings: `8.0/10`
    },
    {
      Title: "The Conjuring 2",
      Description:
        "Ed and Lorraine Warren travel to North London to help a single mother raising four children alone in a house plagued by a supernatural spirit.",
      Image:
        "https://i.pinimg.com/originals/f3/eb/be/f3ebbea30ee3302f0492e7822cea910b.jpg",
      Ratings: `7.3/10`
    },
    {
      Title: "The Conjuring",
      Description:
        "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
      Image:
        "https://houseofmysterioussecrets.com/images/product/Item73517M.jpg.jpg",
      Ratings: `7.5/10`
    }
  ],
  Action: [
    {
      Title: "John Wick: Chapter 3",
      Description:
        "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
      Image:
        "https://www.joblo.com/wp-content/uploads/2019/05/john-wick-3-poster12-xl-1.jpg",
      Ratings: `8.0/10`
    },
    {
      Title: "John Wick: Chapter 2",
      Description:
        "After returning to the criminal underworld to repay a debt, John Wick discovers that a large bounty has been put on his life.",
      Image:
        "https://www.joblo.com/wp-content/uploads/2016/12/john-wick-fposter-gallery-1-scaled.jpg",
      Ratings: `7.5/10`
    },
    {
      Title: "Avengers: Endgame",
      Description:
        "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      Image:
        "https://www.joblo.com/wp-content/uploads/2019/03/avengers-endgame-poster-xl-1.jpg",
      Ratings: `8.4/10`
    }
  ],
  Mystery: [
    {
      Title: "Get Out",
      Description:
        "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
      Image:
        "https://www.themoviedb.org/t/p/original/mE24wUCfjK8AoBBjaMjho7Rczr7.jpg",
      Ratings: `7.7/10`
    },
    {
      Title: "Shutter Island",
      Description:
        "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",
      Image:
        "https://www.themoviedb.org/t/p/original/52d7CAjnwh1cZXd2lhKaHVFMu0Q.jpg",
      Ratings: `8.2/10`
    },
    {
      Title: "Badla",
      Description:
        "A dynamic young entrepreneur finds herself locked in a hotel room with the corpse of her dead lover. She hires a prestigious lawyer to defend her and they work together to figure out what actually happened.",
      Image:
        "https://cdn.bollywoodmdb.com/movies/largethumb/2019/badla/poster.jpg",
      Ratings: `7.8/10`
    }
  ]
};
const genreNames = Object.keys(AllMovies);

export default function App() {
  const [movieList, setMovieList] = useState(AllMovies.Mystery);

  function genreClickHandler(genre) {
    var movies = AllMovies[genre];
    setMovieList(movies);
  }
  function getMoviesPost(movies) {
    var title = movies.Title;
    var desc = movies.Description;
    var imageURL = movies.Image;
    var rating = movies.Ratings;
    var htmlOfList = (
      <li>
        <img alt="poster" src={imageURL} />
        <div style={{ padding: "0rem 1rem" }}>
          <h3>{title}</h3>
          <p>{desc}</p>
          <p style={{ fontWeight: "bold" }}>{rating}</p>
        </div>
      </li>
    );
    return htmlOfList;
  }

  return (
    <div className="App">
      <h1>My Favorite Movies</h1>
      <p>Checkout best movies.Select a genre to get started</p>
      <div>
        {genreNames.map((genre) => {
          return (
            <button key={genre} onClick={() => genreClickHandler(genre)}>
              {genre}
            </button>
          );
        })}
      </div>
      <hr />
      <ul>
        {movieList.map((movies) => {
          return getMoviesPost(movies);
        })}
      </ul>
    </div>
  );
}
