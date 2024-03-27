import banner4 from "~/assets/images/banner/banner04.jpg"
import screen from "~/assets/images/movie/screen-thumb.png"
import seat1 from "~/assets/images/movie/seat01.png"
import seated1 from "~/assets/images/movie/seat01-free.png"
import seat2 from "~/assets/images/movie/seat02.png"
import seat2book from "~/assets/images/movie/seat02-booked.png"
import seated2 from "~/assets/images/movie/seat02-free.png"
import bannerproceed from "~/assets/images/movie/movie-bg-proceed.jpg"
function MovieSeat() {
    

    return (
      <>
  {/* ==========Banner-Section========== */}
  <section
    className="details-banner hero-area bg_img seat-plan-banner"
    style={{ backgroundImage: `url(${banner4})` }}
  >
    <div className="container">
      <div className="details-banner-wrapper">
        <div className="details-banner-content style-two">
          <h3 className="title">Venus</h3>
          <div className="tags">
            <a href="#0">City Walk</a>
            <a href="#0">English - 2D</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ==========Banner-Section========== */}
  {/* ==========Page-Title========== */}
  <section className="page-title bg-one">
    <div className="container">
      <div className="page-title-area">
        <div className="item md-order-1">
          <a
            href="/movieticket"
            className="custom-button back-button"
          >
            <i className="flaticon-double-right-arrows-angles" />
            back
          </a>
        </div>
        <div className="item date-item">
          <span className="date">MON, SEP 09 2020</span>
          <select className="select-bar">
            <option value="sc1">09:40</option>
            <option value="sc2">13:45</option>
            <option value="sc3">15:45</option>
            <option value="sc4">19:50</option>
          </select>
        </div>
        <div className="item">
          <h5 className="title">05:00</h5>
          <p>Mins Left</p>
        </div>
      </div>
    </div>
  </section>
  {/* ==========Page-Title========== */}
  {/* ==========Movie-Section========== */}
  <div className="seat-plan-section padding-bottom padding-top">
    <div className="container">
      <div className="screen-area">
        <h4 className="screen">screen</h4>
        <div className="screen-thumb">
          <img src={screen} alt="movie" />
        </div>
        <h5 className="subtitle">silver plus</h5>
        <div className="screen-wrapper">
          <ul className="seat-area">
            <li className="seat-line">
              <span>G</span>
              <ul className="seat--area">
                <li className="front-seat">
                  <ul>
                    <li className="single-seat">
                      <img src={seat1} alt="seat" />
                    </li>
                    <li className="single-seat">
                      <img src={seat1} alt="seat" />
                    </li>
                    <li className="single-seat">
                      <img src={seat1} alt="seat" />
                    </li>
                    <li className="single-seat">
                      <img src={seat1} alt="seat" />
                    </li>
                  </ul>
                </li>
                <li className="front-seat">
                  <ul>
                    <li className="single-seat">
                      <img src={seat1} alt="seat" />
                    </li>
                    <li className="single-seat">
                      <img src={seat1} alt="seat" />
                    </li>
                    <li className="single-seat">
                      <img src={seat1} alt="seat" />
                    </li>
                    <li className="single-seat">
                      <img src={seat1} alt="seat" />
                    </li>
                    <li className="single-seat">
                      <img src={seat1} alt="seat" />
                    </li>
                    <li className="single-seat">
                      <img src={seat1} alt="seat" />
                    </li>
                  </ul>
                </li>
                <li className="front-seat">
                  <ul>
                    <li className="single-seat">
                      <img src={seat1} alt="seat" />
                    </li>
                    <li className="single-seat">
                      <img src={seat1} alt="seat" />
                    </li>
                    <li className="single-seat">
                      <img src={seat1} alt="seat" />
                    </li>
                    <li className="single-seat">
                      <img src={seat1} alt="seat" />
                    </li>
                  </ul>
                </li>
              </ul>
              <span>G</span>
            </li>
            <li className="seat-line">
              <span>f</span>
              <ul className="seat--area">
                <li className="front-seat">
                  <ul>
                    <li className="single-seat">
                      <img src={seat1} alt="seat" />
                    </li>
                    <li className="single-seat">
                      <img src={seat1} alt="seat" />
                    </li>
                    <li className="single-seat">
                      <img src={seat1} alt="seat" />
                    </li>
                    <li className="single-seat">
                      <img src={seat1} alt="seat" />
                    </li>
                  </ul>
                </li>
                <li className="front-seat">
                  <ul>
                    <li className="single-seat">
                      <img src={seat1} alt="seat" />
                    </li>
                    <li className="single-seat seat-free">
                      <img
                        src={seated1}
                        alt="seat"
                      />
                      <span className="sit-num">f7</span>
                    </li>
                    <li className="single-seat seat-free">
                      <img
                        src={seated1}
                        alt="seat"
                      />
                      <span className="sit-num">f8</span>
                    </li>
                    <li className="single-seat">
                      <img src={seat1} alt="seat" />
                    </li>
                    <li className="single-seat">
                      <img src={seat1} alt="seat" />
                    </li>
                    <li className="single-seat">
                      <img src={seat1} alt="seat" />
                    </li>
                  </ul>
                </li>
                <li className="front-seat">
                  <ul>
                    <li className="single-seat seat-free">
                      <img
                        src={seated1}
                        alt="seat"
                      />
                      <span className="sit-num">f9</span>
                    </li>
                    <li className="single-seat seat-free">
                      <img
                        src={seated1}
                        alt="seat"
                      />
                      <span className="sit-num">f10</span>
                    </li>
                    <li className="single-seat seat-free">
                      <img
                        src={seated1}
                        alt="seat"
                      />
                      <span className="sit-num">f11</span>
                    </li>
                    <li className="single-seat">
                      <img src={seat1} alt="seat" />
                    </li>
                  </ul>
                </li>
              </ul>
              <span>f</span>
            </li>
          </ul>
        </div>
        <h5 className="subtitle">silver plus</h5>
        <div className="screen-wrapper">
          <ul className="seat-area couple">
            <li className="seat-line">
              <span>e</span>
              <ul className="seat--area">
                <li className="front-seat">
                  <ul>
                    <li className="single-seat">
                      <img src={seat2} alt="seat" />
                    </li>
                    <li className="single-seat">
                      <img src={seat2} alt="seat" />
                    </li>
                  </ul>
                </li>
                <li className="front-seat">
                  <ul>
                    <li className="single-seat">
                      <img src={seat2} alt="seat" />
                    </li>
                    <li className="single-seat">
                      <img src={seat2} alt="seat" />
                    </li>
                    <li className="single-seat">
                      <img src={seat2} alt="seat" />
                    </li>
                  </ul>
                </li>
                <li className="front-seat">
                  <ul>
                    <li className="single-seat">
                      <img src={seat2} alt="seat" />
                    </li>
                    <li className="single-seat">
                      <img src={seat2} alt="seat" />
                    </li>
                  </ul>
                </li>
              </ul>
              <span>e</span>
            </li>
            <li className="seat-line">
              <span>d</span>
              <ul className="seat--area">
                <li className="front-seat">
                  <ul>
                    <li className="single-seat">
                      <img src={seat2} alt="seat" />
                    </li>
                    <li className="single-seat">
                      <img src={seat2} alt="seat" />
                    </li>
                  </ul>
                </li>
                <li className="front-seat">
                  <ul>
                    <li className="single-seat">
                      <img src={seat2} alt="seat" />
                    </li>
                    <li className="single-seat seat-free-two">
                      <img
                        src={seat2book}
                        alt="seat"
                      />
                      <span className="sit-num">D7 D8</span>
                    </li>
                    <li className="single-seat">
                      <img src={seat2} alt="seat" />
                    </li>
                  </ul>
                </li>
                <li className="front-seat">
                  <ul>
                    <li className="single-seat">
                      <img src={seat2} alt="seat" />
                    </li>
                    <li className="single-seat">
                      <img src={seat2} alt="seat" />
                    </li>
                  </ul>
                </li>
              </ul>
              <span>d</span>
            </li>
            <li className="seat-line">
              <span>c</span>
              <ul className="seat--area">
                <li className="front-seat">
                  <ul>
                    <li className="single-seat">
                      <img src={seat2} alt="seat" />
                    </li>
                    <li className="single-seat">
                      <img src={seat2} alt="seat" />
                    </li>
                  </ul>
                </li>
                <li className="front-seat">
                  <ul>
                    <li className="single-seat">
                      <img src={seat2} alt="seat" />
                    </li>
                    <li className="single-seat">
                      <img src={seat2} alt="seat" />
                    </li>
                    <li className="single-seat">
                      <img src={seat2} alt="seat" />
                    </li>
                  </ul>
                </li>
                <li className="front-seat">
                  <ul>
                    <li className="single-seat seat-free-two">
                      <img
                        src={seated2}
                        alt="seat"
                      />
                      <span className="sit-num">f11 f12</span>
                    </li>
                    <li className="single-seat">
                      <img src={seat2} alt="seat" />
                    </li>
                  </ul>
                </li>
              </ul>
              <span>c</span>
            </li>
            <li className="seat-line">
              <span>b</span>
              <ul className="seat--area">
                <li className="front-seat">
                  <ul>
                    <li className="single-seat">
                      <img src={seat2} alt="seat" />
                    </li>
                    <li className="single-seat">
                      <img src={seat2} alt="seat" />
                    </li>
                  </ul>
                </li>
                <li className="front-seat">
                  <ul>
                    <li className="single-seat">
                      <img src={seat2} alt="seat" />
                    </li>
                    <li className="single-seat seat-free-two">
                      <img
                        src={seated2}
                        alt="seat"
                      />
                      <span className="sit-num">b7 b8</span>
                    </li>
                    <li className="single-seat">
                      <img src={seat2} alt="seat" />
                    </li>
                  </ul>
                </li>
                <li className="front-seat">
                  <ul>
                    <li className="single-seat">
                      <img src={seat2} alt="seat" />
                    </li>
                    <li className="single-seat">
                      <img src={seat2} alt="seat" />
                    </li>
                  </ul>
                </li>
              </ul>
              <span>b</span>
            </li>
            <li className="seat-line">
              <span>a</span>
              <ul className="seat--area">
                <li className="front-seat">
                  <ul>
                    <li className="single-seat seat-free-two">
                      <img
                        src={seated2}
                        alt="seat"
                      />
                      <span className="sit-num">a1 a2</span>
                    </li>
                    <li className="single-seat seat-free-two">
                      <img
                        src={seated2}
                        alt="seat"
                      />
                      <span className="sit-num">a3 a4</span>
                    </li>
                  </ul>
                </li>
                <li className="front-seat">
                  <ul>
                    <li className="single-seat seat-free-two">
                      <img
                        src={seated2}
                        alt="seat"
                      />
                      <span className="sit-num">a5 a6</span>
                    </li>
                    <li className="single-seat seat-free-two">
                      <img
                        src={seated2}
                        alt="seat"
                      />
                      <span className="sit-num">a7 a8</span>
                    </li>
                    <li className="single-seat seat-free-two">
                      <img
                        src={seated2}
                        alt="seat"
                      />
                      <span className="sit-num">a9 a10</span>
                    </li>
                  </ul>
                </li>
                <li className="front-seat">
                  <ul>
                    <li className="single-seat seat-free-two">
                      <img
                        src={seated2}
                        alt="seat"
                      />
                      <span className="sit-num">a11</span>
                    </li>
                    <li className="single-seat seat-free-two">
                      <img
                        src={seated2}
                        alt="seat"
                      />
                      <span className="sit-num">a12</span>
                    </li>
                  </ul>
                </li>
              </ul>
              <span>a</span>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="proceed-book bg_img"
        style={{ backgroundImage: `url(${bannerproceed})` }}
      >
        <div className="proceed-to-book">
          <div className="book-item">
            <span>You have Choosed Seat</span>
            <h3 className="title">d9, d10</h3>
          </div>
          <div className="book-item">
            <span>total price</span>
            <h3 className="title">$150</h3>
          </div>
          <div className="book-item">
            <a href="/moviefood" className="custom-button">
              proceed
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ==========Movie-Section========== */}
</>


    );
}

export default MovieSeat;
