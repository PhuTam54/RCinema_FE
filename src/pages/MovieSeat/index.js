// import screen from "~/assets/images/movie/screen-thumb.png"
// import seat1 from "~/assets/images/movie/seat01.png"
// import seated1 from "~/assets/images/movie/seat01-free.png"
// import seat2 from "~/assets/images/movie/seat02.png"
// import bannerproceed from "~/assets/images/movie/movie-bg-proceed.jpg"
// import venus from "~/assets/images/movie/exhuma.jpg"
// import { Link } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// function MovieSeat() {
    
//   const [movies, setMovies] = useState([]);
//   const [seats, setSeats] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const { id, roomId } = useParams(); // Lấy roomId từ URL
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     axios
//       .get(`https://localhost:7168/api/v1/Movies/id?id=${id}`)
//       .then((response) => {
//         setMovies(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching movie data:', error);
//       });

//     axios
//       .get(`https://localhost:7168/api/v1/Seats/roomId?roomId=${roomId}`) // Gọi API theo roomId từ URL
//       .then((response) => {
//         setSeats(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching seat data:', error);
//       });
//   }, [id, roomId]); // Sử dụng roomId trong dependency array

//   const groupedSeats = seats.reduce((acc, seat) => {
//     if (!acc[seat.row_Number]) {
//       acc[seat.row_Number] = [];
//     }
//     acc[seat.row_Number].push(seat);
//     return acc;
//   }, {});

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

//   useEffect(() => {
//     const pricePerSeat = 50;
//     setTotalPrice(selectedSeats.length * pricePerSeat);
//   }, [selectedSeats]);

//   const proceedToBook = () => {
//     // Truyền thông tin ghế đã chọn và tổng tiền sang trang mới
//     window.location.href = `/moviefood/${movies.id}?seats=${selectedSeats.join(',')}&totalPrice=${totalPrice}`;
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
//         <h4 className="screen-area" style={{ textAlign: 'center', display: 'block', margin: '0 auto', marginBottom: 20 }}>Room: {roomId}</h4>
//           <div className="screen-area">
//             <h4 className="screen">screen</h4>
//             <div className="screen-thumb">
//               <img src={screen} alt="movie" />
//             </div>
//           </div>

//           {/* Hiển thị ghế dựa trên dữ liệu từ API */}
//           <div className="screen-wrapper">
//             <ul className="seat-area">
              
//               <li className="seat-line">
//                 <span>A</span>
//                 <ul className="seat--area">
//                   <li className="front-seat">
//                     <ul>
//                       <li className="single-seat">
//                         <img src={seat2} alt="seat" />
//                       </li>
//                       <li className="single-seat">
//                         <img src={seat2} alt="seat" />
//                       </li>
//                     </ul>
//                   </li>
//                   <li className="front-seat">
//                     <ul>
//                       <li className="single-seat">
//                         <img src={seat2} alt="seat" />
//                       </li>
//                       <li className="single-seat">
//                         <img src={seat2} alt="seat" />
//                       </li>
//                       <li className="single-seat">
//                         <img src={seat2} alt="seat" />
//                       </li>
//                     </ul>
//                   </li>
//                   <li className="front-seat">
//                     <ul>
//                       <li className="single-seat">
//                         <img src={seat2} alt="seat" />
//                       </li>
//                       <li className="single-seat">
//                         <img src={seat2} alt="seat" />
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>
//                 <span>A</span>
//               </li>
//                {/* seat 2 */}
//               <li className="seat-line">
//                 <span>B</span>
//                 <ul className="seat--area">
//                   <li className="front-seat">
//                     <ul>
//                       <li className="single-seat">
//                         <img src={seat2} alt="seat" />
//                       </li>
//                       <li className="single-seat">
//                         <img src={seat2} alt="seat" />
//                       </li>
//                     </ul>
//                   </li>
//                   <li className="front-seat">
//                     <ul>
//                       <li className="single-seat">
//                         <img src={seat2} alt="seat" />
//                       </li>
//                       <li className="single-seat">
//                         <img src={seat2} alt="seat" />
//                       </li>
//                       <li className="single-seat">
//                         <img src={seat2} alt="seat" />
//                       </li>
//                     </ul>
//                   </li>
//                   <li className="front-seat">
//                     <ul>
//                       <li className="single-seat">
//                         <img src={seat2} alt="seat" />
//                       </li>
//                       <li className="single-seat">
//                         <img src={seat2} alt="seat" />
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>
//                 <span>B</span>
//               </li>

//               {/* seat API */}
//               {Object.entries(groupedSeats).map(([rowNumber, rowSeats]) => (
//                 <li className="seat-line" key={rowNumber}>
//                   <span>{rowNumber}</span>
//                   <ul className="seat--area">
//                     {rowSeats.map(seat => (
//                       <li key={seat.id} className="single-seat" onClick={() => handleSeatSelection(`${String.fromCharCode(65 + seat.row_Number - 1)}${seat.seat_Number}`)} style={{ fontWeight: isSeatSelected(`${String.fromCharCode(65 + seat.row_Number - 1)}${seat.seat_Number}`) ? 'bold' : 'normal' }}>
//                         <img src={isSeatSelected(`${String.fromCharCode(65 + seat.row_Number - 1)}${seat.seat_Number}`) ? seated1 : seat1} alt="seat" />
//                         <span className="sit-num">{`${String.fromCharCode(65 + seat.row_Number - 1)}${seat.seat_Number}`}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <span>{rowNumber}</span>
//                 </li>
//               ))}

//               {/* end */}
//               {/* seat 3 */}
//               <li className="seat-line">
//               <span>G</span>
//               <ul className="seat--area">
//                 <li className="front-seat">
//                   <ul>
//                     <li className="single-seat">
//                       <img src={seat1} alt="seat" />
//                     </li>
//                     <li className="single-seat">
//                       <img src={seat1} alt="seat" />
//                     </li>
//                     <li className="single-seat">
//                       <img src={seat1} alt="seat" />
//                     </li>
//                     <li className="single-seat">
//                       <img src={seat1} alt="seat" />
//                     </li>
//                   </ul>
//                 </li>
//                 <li className="front-seat">
//                   <ul>
//                     <li className="single-seat">
//                       <img src={seat1} alt="seat" />
//                     </li>
//                     <li className="single-seat">
//                       <img src={seat1} alt="seat" />
//                     </li>
//                     <li className="single-seat">
//                       <img src={seat1} alt="seat" />
//                     </li>
//                     <li className="single-seat">
//                       <img src={seat1} alt="seat" />
//                     </li>
//                     <li className="single-seat">
//                       <img src={seat1} alt="seat" />
//                     </li>
//                     <li className="single-seat">
//                       <img src={seat1} alt="seat" />
//                     </li>
//                   </ul>
//                 </li>
//                 <li className="front-seat">
//                   <ul>
//                     <li className="single-seat">
//                       <img src={seat1} alt="seat" />
//                     </li>
//                     <li className="single-seat">
//                       <img src={seat1} alt="seat" />
//                     </li>
//                     <li className="single-seat">
//                       <img src={seat1} alt="seat" />
//                     </li>
//                     <li className="single-seat">
//                       <img src={seat1} alt="seat" />
//                     </li>
//                   </ul>
//                 </li>
//               </ul>
//               <span>G</span>
//               </li>
//                {/* seat 4 */}
//               <li className="seat-line">
//                 <span>H</span>
//                 <ul className="seat--area">
//                   <li className="front-seat">
//                     <ul>
//                       <li className="single-seat">
//                         <img src={seat1} alt="seat" />
//                       </li>
//                       <li className="single-seat">
//                         <img src={seat1} alt="seat" />
//                       </li>
//                       <li className="single-seat">
//                         <img src={seat1} alt="seat" />
//                       </li>
//                       <li className="single-seat">
//                         <img src={seat1} alt="seat" />
//                       </li>
//                     </ul>
//                   </li>
//                   <li className="front-seat">
//                     <ul>
//                       <li className="single-seat">
//                         <img src={seat1} alt="seat" />
//                       </li>
//                       <li className="single-seat">
//                         <img src={seat1} alt="seat" />
//                       </li>
//                       <li className="single-seat">
//                         <img src={seat1} alt="seat" />
//                       </li>
//                       <li className="single-seat">
//                         <img src={seat1} alt="seat" />
//                       </li>
//                       <li className="single-seat">
//                         <img src={seat1} alt="seat" />
//                       </li>
//                       <li className="single-seat">
//                         <img src={seat1} alt="seat" />
//                       </li>
//                     </ul>
//                   </li>
//                   <li className="front-seat">
//                     <ul>
//                       <li className="single-seat">
//                         <img src={seat1} alt="seat" />
//                       </li>
//                       <li className="single-seat">
//                         <img src={seat1} alt="seat" />
//                       </li>
//                       <li className="single-seat">
//                         <img src={seat1} alt="seat" />
//                       </li>
//                       <li className="single-seat">
//                         <img src={seat1} alt="seat" />
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>
//                 <span>H</span>
//               </li>
//             </ul>
//           </div>

//           <div className="proceed-book bg_img" style={{ backgroundImage: `url(${bannerproceed})` }}>
//             <div className="proceed-to-book">
//               <div className="book-item">
//                 <span>You have Choosed Seat</span>
//                 <h3 className="title">{selectedSeats.join(', ')}</h3>
//               </div>
//               <div className="book-item">
//                 <span>total price</span>
//                 <h3 className="title">${totalPrice}</h3>
//               </div>
//               <div className="book-item">
//                 <button className="custom-button back-button" onClick={proceedToBook}>proceed</button>
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



import screen from "~/assets/images/movie/screen-thumb.png"
import seat1 from "~/assets/images/movie/seat01.png"
import seated1 from "~/assets/images/movie/seat01-free.png"
import seat2 from "~/assets/images/movie/seat02.png"
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
  const [totalPrice, setTotalPrice] = useState(0);
  const { showId, id  } = useParams();
  const [roomId, setRoomId] = useState('');
  const [startTime, setStartTime] = useState('');
  const [startDate, setStartDate] = useState('');
  
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
      .get(`https://localhost:7168/api/v1/Shows/id?id=${showId}`)
      .then((response) => {
        const { room_Id } = response.data;
        setRoomId(response.data.room_Id);
        // Lấy ngày từ start_Date
        const startDateParts = response.data.start_Date.split('T');
        const date = startDateParts[0];

        // Lấy giờ từ start_Date
        const timeParts = startDateParts[1].split(':');
        const hours = timeParts[0];
        const minutes = timeParts[1];

        const formattedStartTime = `${hours}:${minutes}`;

        setStartTime(formattedStartTime);
        setStartDate(date);
        return axios.get(`https://localhost:7168/api/v1/Seats/roomId?roomId=${room_Id}`);
      })
      .then((response) => {
        setSeats(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [showId, id]);

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
    const groupedSeats = seats.reduce((acc, seat) => {
    if (!acc[seat.row_Number]) {
      acc[seat.row_Number] = [];
    }
    acc[seat.row_Number].push(seat);
    return acc;
  }, {});

  useEffect(() => {
    const pricePerSeat = 50;
    setTotalPrice(selectedSeats.length * pricePerSeat);
  }, [selectedSeats]);

  const proceedToBook = () => {
    // Truyền thông tin ghế đã chọn và tổng tiền sang trang mới
    window.location.href = `/moviefood/${movies.id}/show/${showId}?seats=${selectedSeats.join(',')}&totalPrice=${totalPrice}`;
  };

  return (
    <>
      {/* ==========Banner-Section========== */}
      <section className="details-banner hero-area bg_img seat-plan-banner" style={{ backgroundImage: `url(${venus})` }}>
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
              <Link className="custom-button back-button" to={`/movieticket/${movies.id}`}>
                <i className="flaticon-double-right-arrows-angles" />
                back
              </Link>
            </div>
            <div className="item date-item">
              <span className="date">{startDate}</span>
              <select className="select-bar" style={{ backgroundColor: "#032055" }}>
              <option value="sc1">{startTime}</option>
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
        <h4 className="screen-area" style={{ textAlign: 'center', display: 'block', margin: '0 auto', marginBottom: 20 }}>
          Room: {roomId}
          </h4>
          <div className="screen-area">
            <h4 className="screen">screen</h4>
            <div className="screen-thumb">
              <img src={screen} alt="movie" />
            </div>
          </div>

          {/* Hiển thị ghế dựa trên dữ liệu từ API */}
          <div className="screen-wrapper">
            <ul className="seat-area">
              
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
               {/* seat 2 */}
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

              {/* seat API */}
              {Object.entries(groupedSeats).map(([rowNumber, rowSeats]) => (
                <li className="seat-line" key={rowNumber}>
                  <span>{rowNumber}</span>
                  <ul className="seat--area">
                    {rowSeats.map(seat => (
                      <li key={seat.id} className="single-seat" onClick={() => handleSeatSelection(`${String.fromCharCode(65 + seat.row_Number - 1)}${seat.seat_Number}`)} style={{ fontWeight: isSeatSelected(`${String.fromCharCode(65 + seat.row_Number - 1)}${seat.seat_Number}`) ? 'bold' : 'normal' }}>
                        <img src={isSeatSelected(`${String.fromCharCode(65 + seat.row_Number - 1)}${seat.seat_Number}`) ? seated1 : seat1} alt="seat" />
                        <span className="sit-num">{`${String.fromCharCode(65 + seat.row_Number - 1)}${seat.seat_Number}`}</span>
                      </li>
                    ))}
                  </ul>
                  <span>{rowNumber}</span>
                </li>
              ))}

              {/* end */}
              {/* seat 3 */}
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
               {/* seat 4 */}
              <li className="seat-line">
                <span>H</span>
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
                <span>H</span>
              </li>
            </ul>
          </div>

          <div className="proceed-book bg_img" style={{ backgroundImage: `url(${bannerproceed})` }}>
            <div className="proceed-to-book">
              <div className="book-item">
                <span>You have Choosed Seat</span>
                <h3 className="title">{selectedSeats.join(', ')}</h3>
              </div>
              <div className="book-item">
                <span>total price</span>
                <h3 className="title">${totalPrice}</h3>
              </div>
              <div className="book-item">
                <button className="custom-button back-button" onClick={proceedToBook}>proceed</button>
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
