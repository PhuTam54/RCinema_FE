
import ticket1 from "~/assets/images/ticket/ticket-tab01.png"
import ticket2 from "~/assets/images/ticket/ticket-tab02.png"
import ticket3 from "~/assets/images/ticket/ticket-tab03.png"
import city from "~/assets/images/ticket/city.png"
import date from "~/assets/images/ticket/date.png"
import cinema from "~/assets/images/ticket/cinema.png"
import banner from "~/assets/images/banner/banner02.jpg"

import sidebar1 from "~/assets/images/sidebar/banner/banner01.jpg"
import sidebar2 from "~/assets/images/sidebar/banner/banner02.jpg"


import tomato from "~/assets/images/movie/tomato.png"
import cake from "~/assets/images/movie/cake.png"
import book from "~/assets/images/icons/book.png"
import play from "~/assets/images/icons/play-button.png"
import heart from "~/assets/images/icons/heart.png"
import venus from "~/assets/images/movie/exhuma.jpg"
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function MovieGird() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 9;


  useEffect(() => {
      axios
          .get(`https://rmallbe20240413154509.azurewebsites.net/api/v1/Movies`)
          .then((response) => {
              setMovies(response.data);
          })
          .catch((error) => {
              console.error('Error fetching data:', error);
          });
          axios
          .get('https://rmallbe20240413154509.azurewebsites.net/api/v1/Genres')
          .then((response) => {
            setGenres(response.data);
          })
          .catch((error) => {
            console.error('Error fetching genres:', error);
          });
          axios
          .get('https://rmallbe20240413154509.azurewebsites.net/api/v1/Languages')
          .then((response) => {
            setLanguages(response.data);
          })
          .catch((error) => {
            console.error('Error fetching languages:', error);
          });
      }, []);
      const filterByGenre = (genreId) => {
        axios
          .get(`https://rmallbe20240413154509.azurewebsites.net/api/v1/Movies/genreId?genreId=${genreId}`)
          .then((response) => {
            setMovies(response.data);
          })
          .catch((error) => {
            console.error('Error fetching movies by genre:', error);
          });
      };
      const filterByLanguage = (languageId) => {
        axios
          .get(`https://rmallbe20240413154509.azurewebsites.net/api/v1/Movies/languageId?languageId=${languageId}`)
          .then((response) => {
            setMovies(response.data);
          })
          .catch((error) => {
            console.error('Error fetching movies by language:', error);
          });
      };
      const indexOfLastMovie = currentPage * moviesPerPage;
      const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
      const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
      const paginate = (pageNumber) => setCurrentPage(pageNumber);
      const totalPages = Math.ceil(movies.length / moviesPerPage);


    return (
      <>
      {/* ==========Banner-Section========== */}
      <section className="banner-section">
        <div
          className="banner-bg bg_img bg-fixed"
          style={{ backgroundImage: `url(${banner})` }}
        />
        <div className="container">
          <div className="banner-content">
            <h1 className="title bold">
              get <span className="color-theme">movie</span> tickets
            </h1>
            <p>
              Buy movie tickets in advance, find movie times watch trailers, read
              movie reviews and much more
            </p>
          </div>
        </div>
      </section>
      {/* ==========Banner-Section========== */}
      {/* ==========Ticket-Search========== */}
      <section className="search-ticket-section padding-top pt-lg-0">
        <div className="container">
          <div
            className="search-tab bg_img"
            data-background={{ backgroundImage: `url(${venus})` }}
          >
            <div className="row align-items-center mb--20">
              <div className="col-lg-6 mb-20">
                <div className="search-ticket-header">
                  <h6 className="category">welcome to Boleto </h6>
                  <h3 className="title">what are you looking for</h3>
                </div>
              </div>
              <div className="col-lg-6 mb-20">
                <ul className="tab-menu ticket-tab-menu">
                  <li className="active">
                    <div className="tab-thumb">
                      <img
                        src={ticket1}
                        alt="ticket"
                      />
                    </div>
                    <span>movie</span>
                  </li>
                  <li>
                    <div className="tab-thumb">
                      <img
                        src={ticket2}
                        alt="ticket"
                      />
                    </div>
                    <span>events</span>
                  </li>
                  <li>
                    <div className="tab-thumb">
                      <img
                        src={ticket3}
                        alt="ticket"
                      />
                    </div>
                    <span>sports</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-area">
              <div className="tab-item active">
                <form className="ticket-search-form">
                  <div className="form-group large">
                    <input type="text" placeholder="Search fo Movies" />
                    <button type="submit">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src={city} alt="ticket" />
                    </div>
                    <span className="type">city</span>
                    <select className="select-bar">
                      <option value="london">London</option>
                      <option value="dhaka">dhaka</option>
                      <option value="rosario">rosario</option>
                      <option value="madrid">madrid</option>
                      <option value="koltaka">kolkata</option>
                      <option value="rome">rome</option>
                      <option value="khoksa">khoksa</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src={date} alt="ticket" />
                    </div>
                    <span className="type">date</span>
                    <select className="select-bar">
                      <option value="26-12-19">23/10/2020</option>
                      <option value="26-12-19">24/10/2020</option>
                      <option value="26-12-19">25/10/2020</option>
                      <option value="26-12-19">26/10/2020</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src={cinema} alt="ticket" />
                    </div>
                    <span className="type">cinema</span>
                    <select className="select-bar">
                      <option value="Awaken">Awaken</option>
                      <option value="dhaka">dhaka</option>
                      <option value="rosario">rosario</option>
                      <option value="madrid">madrid</option>
                      <option value="koltaka">kolkata</option>
                      <option value="rome">rome</option>
                      <option value="khoksa">khoksa</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="tab-item">
                <form className="ticket-search-form">
                  <div className="form-group large">
                    <input type="text" placeholder="Search fo Events" />
                    <button type="submit">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src={city} alt="ticket" />
                    </div>
                    <span className="type">city</span>
                    <select className="select-bar">
                      <option value="london">London</option>
                      <option value="dhaka">dhaka</option>
                      <option value="rosario">rosario</option>
                      <option value="madrid">madrid</option>
                      <option value="koltaka">kolkata</option>
                      <option value="rome">rome</option>
                      <option value="khoksa">khoksa</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src={date} alt="ticket" />
                    </div>
                    <span className="type">date</span>
                    <select className="select-bar">
                      <option value="26-12-19">23/10/2020</option>
                      <option value="26-12-19">24/10/2020</option>
                      <option value="26-12-19">25/10/2020</option>
                      <option value="26-12-19">26/10/2020</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src={cinema} alt="ticket" />
                    </div>
                    <span className="type">event</span>
                    <select className="select-bar">
                      <option value="angular">angular</option>
                      <option value="startup">startup</option>
                      <option value="rosario">rosario</option>
                      <option value="madrid">madrid</option>
                      <option value="koltaka">kolkata</option>
                      <option value="Last-First">Last-First</option>
                      <option value="wish">wish</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="tab-item">
                <form className="ticket-search-form">
                  <div className="form-group large">
                    <input type="text" placeholder="Search fo Sports" />
                    <button type="submit">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src={city} alt="ticket" />
                    </div>
                    <span className="type">city</span>
                    <select className="select-bar">
                      <option value="london">London</option>
                      <option value="dhaka">dhaka</option>
                      <option value="rosario">rosario</option>
                      <option value="madrid">madrid</option>
                      <option value="koltaka">kolkata</option>
                      <option value="rome">rome</option>
                      <option value="khoksa">khoksa</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src={date} alt="ticket" />
                    </div>
                    <span className="type">date</span>
                    <select className="select-bar">
                      <option value="26-12-19">23/10/2020</option>
                      <option value="26-12-19">24/10/2020</option>
                      <option value="26-12-19">25/10/2020</option>
                      <option value="26-12-19">26/10/2020</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src={cinema} alt="ticket" />
                    </div>
                    <span className="type">sports</span>
                    <select className="select-bar">
                      <option value="football">football</option>
                      <option value="cricket">cricket</option>
                      <option value="cabadi">cabadi</option>
                      <option value="madrid">madrid</option>
                      <option value="gadon">gadon</option>
                      <option value="rome">rome</option>
                      <option value="khoksa">khoksa</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Ticket-Search========== */}
      {/* ==========Movie-Section========== */}
      <section className="movie-section padding-top padding-bottom">
        <div className="container">
          <div className="row flex-wrap-reverse justify-content-center">
            <div className="col-sm-10 col-md-8 col-lg-3">
              <div className="widget-1 widget-banner">
                <div className="widget-1-body">
                  <a href="#0">
                    <img
                      src={sidebar1}
                      alt="banner"
                    />
                  </a>
                </div>
              </div>
              <div className="widget-1 widget-check">
                <div className="widget-header">
                  <h5 className="m-title">Filter By</h5>{" "}
                  <a
  href="#0"
  className="clear-check"
  onClick={(e) => {
    e.preventDefault();
    axios
      .get('https://localhost:7168/api/v1/Movies')
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }}
>
  Clear All
</a>
                </div>
                <div className="widget-1-body">
    <h6 className="subtitle">Language</h6>
    <div className="check-area">
      {languages.map((language, index) => (
        <div className="form-group" key={index}>
          <a
            href="#0"
            onClick={(e) => {
              e.preventDefault();
              filterByLanguage(language.id);
            }}
          >
            {language.name}
          </a>
        </div>
      ))}
    </div>
  </div>
              </div>
              
              <div className="widget-1 widget-check">
  <div className="widget-1-body">
    <h6 className="subtitle">genre</h6>
    <div className="check-area">
      {genres.map((genre, index) => (
        <div className="form-group" key={index}>
          <a
            href="#0"
            onClick={(e) => {
              e.preventDefault();
              filterByGenre(genre.id);
            }}
          >
            {genre.name}
          </a>
        </div>
      ))}
    </div>
  </div>
</div>
              <div className="widget-1 widget-banner">
                <div className="widget-1-body">
                  <a href="#0">
                    <img
                      src={sidebar2}
                      alt="banner"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-9 mb-50 mb-lg-0">
              <div className="filter-tab tab">
                <div className="filter-area">
                  <div className="filter-main">
                    <div className="left">
                      <div className="item">
                        <span className="show">Show :</span>
                        <select className="select-bar" style={{backgroundColor: "#032055"}}>
                          <option value={12}>12</option>
                          <option value={15}>15</option>
                          <option value={18}>18</option>
                          <option value={21}>21</option>
                          <option value={24}>24</option>
                          <option value={27}>27</option>
                          <option value={30}>30</option>
                        </select>
                      </div>
                      <div className="item">
                        <span className="show">Sort By :</span>
                        <select className="select-bar" style={{backgroundColor: "#032055"}}>
                          <option value="showing">now showing</option>
                          <option value="exclusive">exclusive</option>
                          <option value="trending">trending</option>
                          <option value="most-view">most view</option>
                        </select>
                      </div>
                    </div>
                    <ul className="grid-button tab-menu">
                      <li className="active">
                        <i className="fas fa-th" />
                      </li>
                      <li>
                        <i className="fas fa-bars" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tab-area">
                  <div className="tab-item active">
                    <div className="row mb-10 justify-content-center">
                      {currentMovies.map((movie, index) => (
                        <div key={index} className="col-sm-6 col-lg-4">
                          <div className="movie-grid">
                            <div className="movie-thumb c-thumb">
                            <a key={movie.id}>
                              <Link to={`/moviedetail/${movie.id}`}> 
                                <img style={{ width: 260, height: 370 }} 
                                src={movie.movie_Image} alt={movie.title} />
                              </Link>
                            </a>
                            </div>
                            <div className="movie-content bg-one">
                              <h5 className="title m-0">
                                <Link to={`/moviedetail/${movie.id}`}>{movie.title}</Link>
                              </h5>
                              <ul className="movie-rating-percent">
                                <li>
                                  <div className="thumb">
                                    <img
                                      src={tomato}
                                      alt="movie"
                                    />
                                  </div>
                                  <span className="content">88%</span>
                                </li>
                                <li>
                                  <div className="thumb">
                                    <img
                                      src={cake}
                                      alt="movie"
                                    />
                                  </div>
                                  <span className="content">88%</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                      

                      {/* end movie */}
                    </div>
                  </div>
                  <div className="tab-item">
                    <div className="movie-area mb-10">
                      {currentMovies.map((movie, index) => (
                      <div key={index} className="movie-list">
                        <div className="movie-thumb c-thumb">
                          <a
                            href="movie-details.html"
                            className="w-100 bg_img h-100"
                            style={{ backgroundImage: `url(${movie.movie_Image})` }}
                          >
                            <img
                              className="d-sm-none"
                              src={movie.movie_Image}
                              alt="movie"
                            />
                          </a>
                        </div>
                        <div className="movie-content bg-one">
                          <h5 className="title">
                            <a href="movie-details.html">{movie.title}</a>
                          </h5>
                          <p className="duration"> Duration :{movie.duration}</p>
                          <div className="movie-tags">
                            <a href="#0">action</a>
                            <a href="#0">adventure</a>
                            <a href="#0">fantasy</a>
                          </div>
                          <div className="release">
                            <span>Release Date : </span>{" "}
                            <a href="#0"> November 8 , 2020</a>
                          </div>
                          <ul className="movie-rating-percent">
                            <li>
                              <div className="thumb">
                                <img
                                  src={tomato}
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                            <li>
                              <div className="thumb">
                                <img
                                  src={cake}
                                  alt="movie"
                                />
                              </div>
                              <span className="content">88%</span>
                            </li>
                          </ul>
                          <div className="book-area">
                            <div className="book-ticket">
                              <div className="react-item">
                                <a href="#0">
                                  <div className="thumb">
                                    <img
                                      src={heart}
                                      alt="icons"
                                    />
                                  </div>
                                </a>
                              </div>
                              <div className="react-item mr-auto">
                                <a href="#0">
                                  <div className="thumb">
                                    <img
                                      src={book}
                                      alt="icons"
                                    />
                                  </div>
                                 <Link to={`/movieticket/${movie.id}`}> <span>book ticket</span></Link>
                                </a>
                              </div>
                              <div className="react-item">
                                <a href="#0" className="popup-video">
                                  <div className="thumb">
                                    <img
                                      src={play}
                                      alt="icons"
                                    />
                                  </div>
                                  <span>watch trailer</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      ))}
                    </div>
                      
                  </div>
                </div>
                <div className="pagination-area text-center">
        <a href="#0" onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}>
          <i className="fas fa-angle-double-left" />
          <span>Prev</span>
        </a>
        {[...Array(totalPages)].map((e, i) => (
          <a 
            key={i} 
            href="#0" 
            onClick={() => paginate(i + 1)}
            className={currentPage === i + 1 ? 'active' : ''}
          >
            {i + 1}
          </a>
        ))}
        <a href="#0" onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}>
          <span>Next</span>
          <i className="fas fa-angle-double-right" />
        </a>
      </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Movie-Section========== */}
    </>
    

    );
}

export default MovieGird;
