import screen from "~/assets/images/movie/screen-thumb.png"
import seat1 from "~/assets/images/movie/seat01.png"
import seated1 from "~/assets/images/movie/seat01-free.png"
import seat2 from "~/assets/images/movie/seat02.png"
import seat2book from "~/assets/images/movie/seat02-booked.png"
import seated2 from "~/assets/images/movie/seat02-free.png"
import bannerproceed from "~/assets/images/movie/movie-bg-proceed.jpg"
import venus from "~/assets/images/movie/exhuma.jpg"
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function MovieSeat() {
    
  const [movies, setMovies] = useState([]);
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://localhost:7168/api/v1/Movies/id?id=${id}`)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });

    axios
      .get('https://localhost:7168/api/v1/Seats')
      .then((response) => {
        // Sort seats by row_Number
        const sortedSeats = response.data.sort((a, b) => a.row_Number - b.row_Number);
        setSeats(sortedSeats);
      })
      .catch((error) => {
        console.error('Error fetching seat data:', error);
      });
  }, [id]);
  const groupedSeats = seats.reduce((acc, seat) => {
    if (!acc[seat.row_Number]) {
      acc[seat.row_Number] = [];
    }
    acc[seat.row_Number].push(seat);
    return acc;
  }, {});

  const handleSeatSelection = (seat) => {
    const isSeatSelected = selectedSeats.includes(seat);
    if (isSeatSelected) {
      setSelectedSeats(selectedSeats.filter(selectedSeat => selectedSeat !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const isSeatSelected = (seat) => {
    return selectedSeats.includes(seat);
  };

  const calculateTotalPrice = () => {
    // Giả sử mỗi ghế có giá là 50 đơn vị
    const pricePerSeat = 50;
    return selectedSeats.length * pricePerSeat;
  };

    return (
      <>
  {/* ==========Banner-Section========== */}
  <section
    className="details-banner hero-area bg_img seat-plan-banner"
    style={{ backgroundImage: `url(${venus})` }}
  >
    <div className="container">
      <div className="details-banner-wrapper">
        <div className="details-banner-content style-two">
        <h3 className="title">{movies.title}</h3>
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
          {/* <a
            href="/movieticket"
            className="custom-button back-button"
          >
            <i className="flaticon-double-right-arrows-angles" />
            back
          </a> */}
            <Link  className="custom-button back-button" to={`/movieticket/${movies.id}`}>
               <i className="flaticon-double-right-arrows-angles" />
                back
            </Link>
        </div>
        <div className="item date-item">
          <span className="date">MON, SEP 09 2020</span>
          <select className="select-bar" style={{backgroundColor: "#032055"}}>
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
        
      



   {/* seats movie */}
   <h5 className="subtitle">silver plus</h5>
        <div className="screen-wrapper">
        <ul className="seat-area couple" style={{margin: 0}}>
            <li className="seat-line">
                <span>A</span>
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
                <span>A</span>
              </li>

              {/*  seat 2 */}
              <li className="seat-line">
                <span>B</span>
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
                <span>B</span>
              </li>
          </ul>
        </div>



        <h5 className="subtitle" style={{marginTop: 40}}>silver plus</h5>
        <div className="screen-wrapper">
          <ul className="seat-area">
            
            {Object.entries(groupedSeats).map(([rowNumber, rowSeats]) => (
              <li className="seat-line" key={rowNumber}>
                <span>{rowNumber}</span>
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
                </ul>
                <ul className="seat--area">
                  {rowSeats.map(seat => (
                    <li key={seat.id} className="single-seat" onClick={() => handleSeatSelection(`${String.fromCharCode(65 + seat.row_Number - 1)}${seat.seat_Number}`)} style={{ fontWeight: isSeatSelected(`${String.fromCharCode(65 + seat.row_Number - 1)}${seat.seat_Number}`) ? 'bold' : 'normal' }}>
                      <img src={isSeatSelected(`${String.fromCharCode(65 + seat.row_Number - 1)}${seat.seat_Number}`) ? seated1 : seat1} alt="seat" />
                      <span className="sit-num">{`${String.fromCharCode(65 + seat.row_Number - 1)}${seat.seat_Number}`}</span>
                    </li>
                  ))}
                </ul>
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
                </ul>
                <span>{rowNumber}</span>
              </li>
            ))}
          </ul>
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
                        src={seat1}
                        alt="seat"
                      />
                      
                    </li>
                    <li className="single-seat">
                      <img src={seat1} alt="seat" />
                    </li>
                  </ul>
                </li>
              </ul>
              <span>f</span>
            </li>
            <li className="seat-line">
              <span>e</span>
              <ul className="seat--area">
                <li className="front-seat">
                  <ul>
                    <li className="single-seat">
                      <img src={seated1} alt="seat" />
                      <span className="sit-num">e1</span>
                    </li>
                    <li className="single-seat">
                      <img src={seat1} alt="seat" />
                    </li>
                    <li className="single-seat">
                      <img src={seat1} alt="seat" />
                    </li>
                    <li className="single-seat">
                      <img src={seated1} alt="seat" />
                      <span className="sit-num">e3</span>
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
                        src={seat1}
                        alt="seat"
                      />
                      
                    </li>
                    <li className="single-seat seat-free">
                      <img
                        src={seated1}
                        alt="seat"
                      />
                      <span className="sit-num">e8</span>
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
                        src={seat1}
                        alt="seat"
                      />
                     
                    </li>
                    <li className="single-seat seat-free">
                      <img
                        src={seated1}
                        alt="seat"
                      />
                      <span className="sit-num">e10</span>
                    </li>
                    <li className="single-seat seat-free">
                      <img
                        src={seated1}
                        alt="seat"
                      />
                      <span className="sit-num">e11</span>
                    </li>
                    <li className="single-seat">
                      <img src={seat1} alt="seat" />
                    </li>
                  </ul>
                </li>
              </ul>
              <span>e</span>
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
             <h3 className="title">{selectedSeats.join(', ')}</h3>
          </div>
          <div className="book-item">
            <span>total price</span>
            <h3 className="title">${calculateTotalPrice()}</h3>
          </div>
          <div className="book-item">
            {/* <a href="/moviefood" className="custom-button">
              proceed
            </a> */}
              <Link  className="custom-button back-button" to={`/moviefood/${movies.id}`}>
                 proceed
              </Link>
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

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import screen from "~/assets/images/movie/screen-thumb.png"
// import seat1 from "~/assets/images/movie/seat01.png"
// import seated1 from "~/assets/images/movie/seat01-free.png"
// import seat2 from "~/assets/images/movie/seat02.png"
// import seat2book from "~/assets/images/movie/seat02-booked.png"
// import seated2 from "~/assets/images/movie/seat02-free.png"
// import bannerproceed from "~/assets/images/movie/movie-bg-proceed.jpg"
// import venus from "~/assets/images/movie/exhuma.jpg"
// import { Link } from 'react-router-dom';

// function MovieSeat() {
//   const [movies, setMovies] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [seats, setSeats] = useState([]);
//   const { id } = useParams();

//   useEffect(() => {
//     axios
//       .get(`https://localhost:7168/api/v1/Movies/id?id=${id}`)
//       .then((response) => {
//         setMovies(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//       axios
//       .get('https://localhost:7168/api/v1/Seats')
//       .then((response) => {
//         // Sort seats by row_Number
//         const sortedSeats = response.data.sort((a, b) => a.row_Number - b.row_Number);
//         setSeats(sortedSeats);
//       })
//       .catch((error) => {
//         console.error('Error fetching seat data:', error);
//       });
//   }, [id]);

//   const handleSeatSelection = (seat) => {
//     const isSeatSelected = selectedSeats.includes(seat);
//     if (isSeatSelected) {
//       setSelectedSeats(selectedSeats.filter(selectedSeat => selectedSeat !== seat));
//     } else {
//       setSelectedSeats([...selectedSeats, seat]);
//     }
//   };

//   const isSeatSelected = (seat) => {
//     return selectedSeats.includes(seat);
//   };
//   const calculateTotalPrice = () => {
//     // Giả sử mỗi ghế có giá là 50 đơn vị
//     const pricePerSeat = 50;
//     return selectedSeats.length * pricePerSeat;
//   };
//   return (
//     <>
//       {/* ==========Banner-Section========== */}
//       <section className="details-banner hero-area bg_img seat-plan-banner" style={{ backgroundImage: `url(${venus})` }}>
//         <div className="container">
//           <div className="details-banner-wrapper">
//             <div className="details-banner-content style-two">
//               <h3 className="title">{movies.title}</h3>
//               <div className="tags">
//                 <a href="#0">City Walk</a>
//                 <a href="#0">English - 2D</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* ==========Banner-Section========== */}
//       {/* ==========Page-Title========== */}
//       <section className="page-title bg-one">
//         <div className="container">
//           <div className="page-title-area">
//             <div className="item md-order-1">
//               <Link className="custom-button back-button" to={`/movieticket/${movies.id}`}>
//                 <i className="flaticon-double-right-arrows-angles" />
//                 back
//               </Link>
//             </div>
//             <div className="item date-item">
//               <span className="date">MON, SEP 09 2020</span>
//               <select className="select-bar" style={{ backgroundColor: "#032055" }}>
//                 <option value="sc1">09:40</option>
//                 <option value="sc2">13:45</option>
//                 <option value="sc3">15:45</option>
//                 <option value="sc4">19:50</option>
//               </select>
//             </div>
//             <div className="item">
//               <h5 className="title">05:00</h5>
//               <p>Mins Left</p>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* ==========Page-Title========== */}
//       {/* ==========Movie-Section========== */}
//       <div className="seat-plan-section padding-bottom padding-top">
//         <div className="container">
//           <div className="screen-area">
//             <h4 className="screen">screen</h4>
//             <div className="screen-thumb">
//               <img src={screen} alt="movie" />
//             </div>
//             <h5 className="subtitle">silver plus</h5>
//             <div className="screen-wrapper">
//               <ul className="seat-area">
//                 {/* <li className="single-seat" onClick={() => handleSeatSelection('A1')} style={{ fontWeight: isSeatSelected('A1') ? 'bold' : 'normal' }}>
//                   <img src={isSeatSelected('A1') ? seated1 : seat1} alt="seat" />
//                   <span className="sit-num">A1</span>
//                 </li>
//                 <li className="single-seat" onClick={() => handleSeatSelection('A2')} style={{ fontWeight: isSeatSelected('A2') ? 'bold' : 'normal' }}>
//                   <img src={isSeatSelected('A2') ? seated1 : seat1} alt="seat" />
//                   <span className="sit-num">A2</span>
//                 </li> */}
//                 {seats.map((seat) => (
//                 <div key={seat.id} className={`row-${seat.row_Number}`}>
//                   <ul className="seat-area">
//                     <li className="single-seat" onClick={() => handleSeatSelection(`${String.fromCharCode(65 + seat.row_Number - 1)}${seat.seat_Number}`)} style={{ fontWeight: isSeatSelected(`${String.fromCharCode(65 + seat.row_Number - 1)}${seat.seat_Number}`) ? 'bold' : 'normal' }}>
//                       <img src={isSeatSelected(`${String.fromCharCode(65 + seat.row_Number - 1)}${seat.seat_Number}`) ? seated1 : seat1} alt="seat" />
//                       <span className="sit-num">{`${String.fromCharCode(65 + seat.row_Number - 1)}${seat.seat_Number}`}</span>
//                     </li>
//                   </ul>
//                 </div>
//               ))}
//                 {/* Add more seats as needed */}
//               </ul>
//             </div>
//           </div>
//           <div className="proceed-book bg_img" style={{ backgroundImage: `url(${bannerproceed})` }}>
//             <div className="proceed-to-book">
//               <div className="book-item">
//                 <span>You have Chosen Seats</span>
//                 <h3 className="title">{selectedSeats.join(', ')}</h3>
//               </div>
//               <div className="book-item">
//                 <span>Total price</span>
//                   <h3 className="title">${calculateTotalPrice()}</h3>
//               </div>
//               <div className="book-item">
//                 <Link className="custom-button back-button" to={`/moviefood/${movies.id}`}>
//                   Proceed
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* ==========Movie-Section========== */}
//     </>
//   );
// }

// export default MovieSeat;

