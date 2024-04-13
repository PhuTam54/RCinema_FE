import screen from '~/assets/images/movie/screen-thumb.png';
import seat1 from '~/assets/images/movie/seat01.png';
import seated1 from '~/assets/images/movie/seat01-free.png';
import seat2 from '~/assets/images/movie/seat02.png';
import bannerproceed from '~/assets/images/movie/movie-bg-proceed.jpg';
import venus from '~/assets/images/movie/exhuma.jpg';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MovieSeat() {
    const movies = JSON.parse(localStorage.getItem('movie')) ?? {};

    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const { showId, id } = useParams();
    const [roomId, setRoomId] = useState('');
    const [selectedSeatName, setSelectedSeatName] = useState([]);
    const [startTime, setStartTime] = useState('');
    const [startDate, setStartDate] = useState('');

    useEffect(() => {
        axios
            .get(`https://rmallbe20240413154509.azurewebsites.net/api/v1/Shows/id?id=${showId}`)
            .then((response) => {
                localStorage.setItem('show', JSON.stringify(response.data));
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
                return axios.get(
                    `https://rmallbe20240413154509.azurewebsites.net/api/v1/Seats/roomId?roomId=${room_Id}`,
                );
            })
            .then((response) => {
                setSeats(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleSeatSelection = (seat, seatName) => {
        const isSeatSelected = selectedSeats.includes(seat);
        if (isSeatSelected) {
            const selectedSeatsToLocal = selectedSeats.filter((selectedSeat) => selectedSeat !== seat);
            localStorage.setItem('selectedSeats', JSON.stringify(selectedSeatsToLocal));
            const selectedSeatNameToLocal = selectedSeatName.filter((selectedSeat) => selectedSeat !== seatName);
            localStorage.setItem('selectedSeatName', JSON.stringify(selectedSeatNameToLocal));
            setSelectedSeats(selectedSeatsToLocal);
            setSelectedSeatName(selectedSeatNameToLocal);
        } else {
            const updatedSelectedSeats = [...selectedSeats, seat];
            const updatedSelectedSeatName = [...selectedSeatName, seatName];
            localStorage.setItem('selectedSeats', JSON.stringify(updatedSelectedSeats));
            localStorage.setItem('selectedSeatName', JSON.stringify(updatedSelectedSeatName));
            setSelectedSeats(updatedSelectedSeats);
            setSelectedSeatName(updatedSelectedSeatName);
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
        if (localStorage.getItem('selectedSeats') != null) {
            let selectedSeatsInLocal = JSON.parse(localStorage.getItem('selectedSeats')) ?? [
                { seatType: { seatPricings: [{ price: 0 }] } },
            ];
            let newTotalPrice = 0;
            selectedSeatsInLocal.forEach((seat) => {
                // seat to object
                seat = JSON.parse(seat);
                newTotalPrice += seat.seatType.seatPricings[0].price;
            });
            setTotalPrice(newTotalPrice);
            localStorage.setItem('totalPrice', JSON.stringify(newTotalPrice));
        }
    }, [selectedSeats]);

    const proceedToBook = () => {
        window.location.href = `/moviefood/${movies.id}/show/${showId}`;
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
                            <Link className="custom-button back-button" to={`/movieticket/${movies.id}`}>
                                <i className="flaticon-double-right-arrows-angles" />
                                back
                            </Link>
                        </div>
                        <div className="item date-item">
                            <span className="date">{startDate}</span>
                            <select className="select-bar" style={{ backgroundColor: '#032055' }}>
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
                    <h4
                        className="screen-area"
                        style={{ textAlign: 'center', display: 'block', margin: '0 auto', marginBottom: 20 }}
                    >
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
                            {/* seat API */}
                            {Object.entries(groupedSeats).map(([rowNumber, rowSeats]) => (
                                <li className="seat-line" key={rowNumber}>
                                    <span>{String.fromCharCode(65 + parseInt(rowNumber) - 1)}</span>
                                    <ul className="seat--area">
                                        {rowSeats.map((seat) => (
                                            // <li key={seat.id} className="single-seat" onClick={() => handleSeatSelection(`${String.fromCharCode(65 + seat.row_Number - 1)}${seat.seat_Number}`)} style={{ fontWeight: isSeatSelected(`${String.fromCharCode(65 + seat.row_Number - 1)}${seat.seat_Number}`) ? 'bold' : 'normal' }}>
                                            <li
                                                key={seat.id}
                                                className="single-seat"
                                                onClick={() =>
                                                    handleSeatSelection(
                                                        `${JSON.stringify(seat)}`,
                                                        `${String.fromCharCode(65 + seat.row_Number - 1)}${
                                                            seat.seat_Number
                                                        }`,
                                                    )
                                                }
                                                style={{
                                                    fontWeight: isSeatSelected(`${JSON.stringify(seat)}`)
                                                        ? 'bold'
                                                        : 'normal',
                                                }}
                                            >
                                                <img
                                                    src={isSeatSelected(`${JSON.stringify(seat)}`) ? seated1 : seat1}
                                                    alt="seat"
                                                />
                                                <span className="sit-num">{`${String.fromCharCode(
                                                    65 + seat.row_Number - 1,
                                                )}${seat.seat_Number}`}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <span>{String.fromCharCode(65 + parseInt(rowNumber) - 1)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="proceed-book bg_img" style={{ backgroundImage: `url(${bannerproceed})` }}>
                        <div className="proceed-to-book">
                            <div className="book-item">
                                <span>You have Chosen Seat</span>
                                <h3 className="title">{selectedSeatName.join(', ')}</h3>
                            </div>
                            <div className="book-item">
                                <span>total price</span>
                                <h3 className="title">${totalPrice}</h3>
                            </div>
                            <div className="book-item">
                                <button className="custom-button back-button" onClick={proceedToBook}>
                                    proceed
                                </button>
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
