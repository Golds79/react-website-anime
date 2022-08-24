 <p align="center">
  <img src='https://user-images.githubusercontent.com/47890005/180652171-1d5b6522-6132-4796-a0ff-c081fa919111.png'>
  <p align='center'>
    <a href='https://reactjs.org' target='__blank'>
        <img src="https://img.shields.io/badge/Frontend-React-blue?style=flat-square&link=https://reactjs.org">
    </a>
  </p>
</p>

## About

<p align="center">
  <img src='https://user-images.githubusercontent.com/47890005/180651636-9282b0a6-d916-4064-b5b5-3fdcb382f0c6.png'>
</p>

[Anime Selection ](https://www.animeselection.com) is a React web app, dedicated to the best and most influential anime ever, built with responsive design using HTML, CSS, and JavaScript in React, as well as how to read data from a third-party API.

It works like a catalog, consuming real anime data from the [Jikan API](https://jikan.moe/), allowing users to search the [MyAnimeList.net](https://myanimelist.net/) catalog, read a short description of each anime, get information from the creators, and watch trailers. I've also used the [Studio Ghibli API](https://ghibliapi.herokuapp.com/) for your page as it has more accurate information. I have also created a "favorites.json" file on my server to make my own list, due to the limitations of MyAnimeList.net.

I´ve not used any library for the visual elements, except for the Material UI icon pack. The buttons, navigation bars, dropdown list, menus, and other visual components were created with CSS.

## Update August 15, 2022:

The menu bar has a dropdown submenu with an event listener. I have also added the option to save the movies in watchlist and watched, as well as the functionality to remove them from those lists. In the event that it is in Watched, it will automatically disappear from the watchlist and vice versa. This option is without the need to create a record. Both the watchlist and watched are stored in local storage.

## Demo

[www.animeselection.com](https://www.animeselection.com/)

<p align="center">
  <img src='https://user-images.githubusercontent.com/47890005/180651261-d0e32001-f2ba-4bed-a026-6075cd5ee9c0.gif'><br></br>
  <img src='https://user-images.githubusercontent.com/47890005/180651515-a1db283b-c032-46a3-9526-3d1c1eccdc0e.gif'><br></br>
  <img src='https://user-images.githubusercontent.com/47890005/180651583-df1f0054-4091-4b0a-b03f-3557c5c7ddfe.gif'>
</p>

## Features

- Anime catalog
- Information about the creators
- Recommended anime
- Trailers
- Blog
- Filmographies
- Responsive

## Technologies used

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [React useState](https://reactjs.org/docs/hooks-reference.html#usestate)
- [React useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)
- [React useParams](https://reactrouter.com/docs/en/v6/hooks/use-params)
- [React Link](https://v5.reactrouter.com/web/api/Link)
- [React BrowserRouter](https://v5.reactrouter.com/web/api/BrowserRouter)
- [React MemoryRouter](https://v5.reactrouter.com/web/api/MemoryRouter)
- [React Props](https://reactjs.org/docs/render-props.html#gatsby-focus-wrapper)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Material UI/icons](https://material-ui.com/pt/)
- [Jikan (API)](https://jikan.moe/)
- [Studio Ghibli (API)](https://ghibliapi.herokuapp.com/)

## Full explanation of the project (in Spanish)

[Anime Selection documentation](https://www.animeselection.com/media/documents/anime-selection.pdf)

## Wireframes

- [Home](https://www.animeselection.com/media/documents/wireframe_anime_selection_1.jpeg)
- [Single Post](https://www.animeselection.com/media/documents/wireframe_anime_selection_2.jpeg)
- [Single Movie](https://www.animeselection.com/media/documents/wireframe_anime_selection_3.jpeg)
- [Director's Page](https://www.animeselection.com/media/documents/wireframe_anime_selection_4.jpeg)
- [New blog Section](https://www.animeselection.com/media/documents/wireframe_anime_selection_5.jpeg)

## Problems and solutions

The main problem i've encountered has been when iterating through the elements. Due to the fact that the arrays were inside the objects, or objects inside objects that had arrays inside them, it forced me to look for a solution to be able to print the results on the screen. Even after iterating, i've had to use the optional chaining operator ?, which allows you to read the value of a property located within a chain of connected objects without having to expressly check that each reference in the chain is valid.

Due to the limitations of MyAnimeList to create lists (only 10 movies), the solution was to create my own "favorites.json". For that i downloaded the original MyAnimeList and after adding the anime manually, i uploaded them to my server. But the first problem has been with Cross-Origin Resources (CORS), a security element. To solve it i added some additional nginx directives.

One of the problems was also when the user clicks to reload a page, then a 404 page not found message appears. This is a problem between React and Apache. The solution is to add a code snippet in the .htaccess.

Another problem that i encountered when creating the application, is that when the page change is made, it did not start from the top, but from the same previous position. To solve this problem i used Window.scrollTo() inside useEffect, to scroll the viewer to a specific set of coordinates in the document, which in my case was 0,0.

In order to insert images in a page, i had to import them beforehand. Give them a name and add them to the src.

In the StudioGhibli.test i used getByRol indicating 'tab', because with 'main' it gave errors. Both in this test and in RecommendedAnime.test to make the routing work i had to use "MemoryRouter", which saves the history of its "URL" in memory (it does not read or write in the address bar).

**IMPORTANT**: If two APIs are used, keep in mind that if the URL of both is based on their ID, the destination directory must be different, otherwise they may conflict.

## How to clone

git clone https://github.com/urieltierra/react-website-anime.git

or manual [download.](https://github.com/urieltierra/react-website-anime/archive/refs/heads/main.zip)

gh repo clone urieltierra/react-website-anime

## Installation

After cloning the repository, open your terminal and run:

```sh
npm install
npm run dev
```

## Deployment

```sh
npm run build
npm run start
```
