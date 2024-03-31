import city from "~/assets/images/ticket/city.png"
import date from "~/assets/images/ticket/date.png"
import cinema from "~/assets/images/ticket/cinema.png"
import exp from "~/assets/images/ticket/exp.png"
import sidebanner from "~/assets/images/sidebar/banner/banner03.jpg"
import seatplan from "~/assets/images/movie/seat-plan.png"
import venus from "~/assets/images/movie/exhuma.jpg"
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function MovieTicket() {
    
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  useEffect(() => {
      axios
          .get(`https://localhost:7168/api/v1/Movies/id?id=${id}`)
          .then((response) => {
              setMovies(response.data);
          })
          .catch((error) => {
              console.error('Error fetching data:', error);
          });
          
      }, [id]);
      
    return (
      <>
      {/* ==========Window-Warning-Section========== */}
      <section className="window-warning inActive">
        <div className="lay" />
        <div className="warning-item">
          <h6 className="subtitle">Welcome! </h6>
          <h4 className="title">Select Your Seats</h4>
          <div className="thumb">
            <img src={seatplan} alt="movie" />
          </div>
          {/* <a href="/movieseat" className="custom-button seatPlanButton">
            Seat Plans
            <i className="fas fa-angle-right" />
          </a> */}
            <Link  className="custom-button seatPlanButton" to={`/movieseat/${movies.id}`}> 
            Seat Plans
            <i className="fas fa-angle-right" />
            </Link>
        </div>
      </section>
      {/* ==========Window-Warning-Section========== */}
      {/* ==========Banner-Section========== */}
      
      <section
        className="details-banner hero-area bg_img"
        style={{ backgroundImage: `url(${venus})` }}
      >

        <div className="container">
          <div className="details-banner-wrapper">
            <div className="details-banner-content">
              <h3 className="title">{movies.title}</h3>
              <div className="tags">
                <a href="#0">English</a>
                <a href="#0">Hindi</a>
                <a href="#0">Telegu</a>
                <a href="#0">Tamil</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Banner-Section========== */}
      {/* ==========Book-Section========== */}
      <section className="book-section bg-one">
        <div className="container">
          <form className="ticket-search-form two">
            <div className="form-group">
              <div className="thumb">
                <img src={city} alt="ticket" />
              </div>
              <span className="type">city</span>
              <select className="select-bar" style={{backgroundColor: "#032055"}}>
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
              <select className="select-bar" style={{backgroundColor: "#032055"}}>
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
              <select className="select-bar" style={{backgroundColor: "#032055"}}>
                <option value="Awaken">Awaken</option>
                <option value="Venus">Venus</option>
                <option value="wanted">wanted</option>
                <option value="joker">joker</option>
                <option value="fid">fid</option>
                <option value="kidio">kidio</option>
                <option value="mottus">mottus</option>
              </select>
            </div>
            <div className="form-group">
              <div className="thumb">
                <img src={exp} alt="ticket" />
              </div>
              <span className="type">Experience</span>
              <select className="select-bar" style={{backgroundColor: "#032055"}}>
                <option value="English-2D">English-2D</option>
                <option value="English-3D">English-3D</option>
                <option value="Hindi-2D">Hindi-2D</option>
                <option value="Hindi-3D">Hindi-3D</option>
                <option value="Telegu-2D">Telegu-2D</option>
                <option value="Telegu-3D">Telegu-3D</option>
              </select>
            </div>
          </form>
        </div>
      </section>
      {/* ==========Book-Section========== */}
      {/* ==========Movie-Section========== */}
      <div className="ticket-plan-section padding-bottom padding-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 mb-5 mb-lg-0">
              <ul className="seat-plan-wrapper bg-five">
                <li>
                  <div className="movie-name">
                    <div className="icons">
                      <i className="far fa-heart" />
                      <i className="fas fa-heart" />
                    </div>
                    <a href="#0" className="name">
                      Genesis Cinema
                    </a>
                    <div className="location-icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                  </div>
                  <div className="movie-schedule">
                    <div className="item">09:40</div>
                    <div className="item">13:45</div>
                    <div className="item">15:45</div>
                    <div className="item">19:50</div>
                  </div>
                </li>
                <li>
                  <div className="movie-name">
                    <div className="icons">
                      <i className="far fa-heart" />
                      <i className="fas fa-heart" />
                    </div>
                    <a href="#0" className="name">
                      the beach
                    </a>
                    <div className="location-icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                  </div>
                  <div className="movie-schedule">
                    <div className="item">09:40</div>
                    <div className="item">13:45</div>
                    <div className="item">15:45</div>
                    <div className="item">19:50</div>
                  </div>
                </li>
                <li className="active">
                  <div className="movie-name">
                    <div className="icons">
                      <i className="far fa-heart" />
                      <i className="fas fa-heart" />
                    </div>
                    <a href="#0" className="name">
                      city work
                    </a>
                    <div className="location-icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                  </div>
                  <div className="movie-schedule">
                    <div className="item">09:40</div>
                    <div className="item active">13:45</div>
                    <div className="item">15:45</div>
                    <div className="item">19:50</div>
                  </div>
                </li>
                <li>
                  <div className="movie-name">
                    <div className="icons">
                      <i className="far fa-heart" />
                      <i className="fas fa-heart" />
                    </div>
                    <a href="#0" className="name">
                      box park
                    </a>
                    <div className="location-icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                  </div>
                  <div className="movie-schedule">
                    <div className="item">09:40</div>
                    <div className="item">13:45</div>
                    <div className="item">15:45</div>
                    <div className="item">19:50</div>
                  </div>
                </li>
                <li>
                  <div className="movie-name">
                    <div className="icons">
                      <i className="far fa-heart" />
                      <i className="fas fa-heart" />
                    </div>
                    <a href="#0" className="name">
                      la mer
                    </a>
                    <div className="location-icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                  </div>
                  <div className="movie-schedule">
                    <div className="item">09:40</div>
                    <div className="item">13:45</div>
                    <div className="item">15:45</div>
                    <div className="item">19:50</div>
                  </div>
                </li>
                <li>
                  <div className="movie-name">
                    <div className="icons">
                      <i className="far fa-heart" />
                      <i className="fas fa-heart" />
                    </div>
                    <a href="#0" className="name">
                      wanted
                    </a>
                    <div className="location-icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                  </div>
                  <div className="movie-schedule">
                    <div className="item">09:40</div>
                    <div className="item">13:45</div>
                    <div className="item">15:45</div>
                    <div className="item">19:50</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-10">
              <div className="widget-1 widget-banner">
                <div className="widget-1-body">
                  <a href="#0">
                    <img
                      src={sidebanner}
                      alt="banner"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==========Movie-Section========== */}
    </>
    

    );
}

export default MovieTicket;
