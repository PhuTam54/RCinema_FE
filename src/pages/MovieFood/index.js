import banner4 from '~/assets/images/banner/banner04.jpg';
import sidebanner from '~/assets/images/sidebar/banner/banner04.jpg';
import pop1 from '~/assets/images/movie/popcorn/pop1.png';
import pop2 from '~/assets/images/movie/popcorn/pop2.png';
import pop3 from '~/assets/images/movie/popcorn/pop3.png';
import pop4 from '~/assets/images/movie/popcorn/pop4.png';
import venus from '~/assets/images/movie/exhuma.jpg';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { location, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as orderService from '~/services/orderService';
import { UserContext } from '~/context/UserContext';

function MovieFood() {
    const showData = JSON.parse(localStorage.getItem('show'));
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    const movie = JSON.parse(localStorage.getItem('movie')) ?? {};

    const [mySeats, setMySeats] = useState([]);
    const { id, showId } = useParams();
    const [foods, setFoods] = useState([]);
    const location = useLocation();
    const [totalPrice, setTotalPrice] = useState(0);
    const [startTime, setStartTime] = useState('');
    const [startDate, setStartDate] = useState('');
    const [roomId, setRoomId] = useState(1);
    const [bill, setBill] = useState([]);

    useEffect(() => {

        axios
            .get(`https://rmallbe20240413154509.azurewebsites.net/api/v1/Foods`)
            .then((response) => {
                setFoods(response.data);
            })
            .catch((error) => {
                console.error('Error fetching food data:', error);
            });

        const { room_Id, start_Date } = showData;
        setRoomId(room_Id);

        const startDateParts = start_Date.split('T');
        const date = startDateParts[0];
        const timeParts = startDateParts[1].split(':');
        const hours = timeParts[0];
        const minutes = timeParts[1];
        const formattedStartTime = `${hours}:${minutes}`;

        setStartTime(formattedStartTime);
        setStartDate(date);
        // Get the roomId after it has been set above and call the API to fetch the seats in that room
        // console.log(mySeats)
        // console.log(totalPrice)

        axios
            .get(`https://rmallbe20240413154509.azurewebsites.net/api/v1/Seats`)
            .then((response) => {
                selectedSeats.map((seat) => {
                    // console.log(seat)
                    // console.log(mySeats)
                    if (seat && !mySeats.some((mySeat) => String(mySeat.id) === seat)) {
                        const seatData = response.data.find((data) => String(data.id) === seat);
                        setMySeats((prevSeats) => [...prevSeats, seatData]);
                        // Lỗi khi bị re render sẽ lại cộng thêm giá trị vào totalPrice
                        setTotalPrice((prevPrice) => prevPrice + seatData.seatType.seatPricings[0].price);
                    }
                    return null; // Add a return statement to the map function
                });
            })
            .catch((error) => {
                console.error('Error fetching seats data:', error);
            });
    }, []);

    const addToBill = (food, qty) => {
        const existingItemIndex = bill.findIndex((item) => item.name === food.name);
        if (existingItemIndex !== -1) {
            const updatedBill = [...bill];
            updatedBill[existingItemIndex].qty += qty;
            setBill(updatedBill);
        } else {
            const newBillItem = {
                id: food.id,
                name: food.name,
                price: food.price,
                qty: qty,
            };
            setBill((prevBill) => [...prevBill, newBillItem]);
        }
    };

    const getTokenData = () => {
        const token = localStorage.getItem('token');
        if (token) {
            const tokenData = token.split('.')[1];
            const decodedToken = atob(tokenData);
            const tokenObject = JSON.parse(decodedToken);
            return tokenObject;
        }
        return null;
    };

    const userId = getTokenData().userId;

    const orderData = {
        order_Code: `ThisIsACodeUnique_${Date.now()}_${Math.random()}`,
        total: 0,
        discount_Amount: 1,
        discount_Code: 'thisIsADiscountCode',
        payment_Method: '',
    };

    orderData.qR_Code = orderData.order_Code;
    localStorage.setItem('orderCode', orderData.order_Code);

    const orderTicketData = {
        code: `ThisIsATicketCodeUnique_${Date.now()}_${Math.random()}`,
        price: 0, // Call API seatPrice
        is_Used: false,
    };

    const orderFoodData = {
        qty: 0,
        price: 0,
    };

    const handleCheckout = () => {
        const usedSeatIds = [];
        mySeats.forEach((seat) => {
            if (!usedSeatIds.includes(seat.id)) {
                usedSeatIds.push(seat.id);
                orderData.total += seat.seatType.seatPricings[0].price;
                orderData.total += bill.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
            }
        });
        orderData.final_Total = orderData.total - orderData.discount_Amount;
        console.log(orderData);
        orderService
            .createOrder(orderData, userId, showData.id)
            .then((response) => {
                orderService
                    .getOrder(response.order_Code)
                    .then((orderResponse) => {
                        const orderId = orderResponse.id;

                        const usedSeatIds = [];
                        mySeats.forEach((seat) => {
                            if (!usedSeatIds.includes(seat.id)) {
                                usedSeatIds.push(seat.id);
                                orderTicketData.price = seat.seatType.seatPricings[0].price;
                                orderService.createOrderTicket(orderTicketData, orderId, seat.id).catch((error) => {
                                    toast.error('Failed to create order ticket', error);
                                });
                            }
                        });
                        bill.forEach((food) => {
                            orderFoodData.qty = food.qty;
                            orderFoodData.price = food.price;
                            orderService.createOrderFood(orderFoodData, orderId, food.id).catch((error) => {
                                toast.error('Failed to create order food', error);
                            });
                        });
                    })
                    .then(() => {
                        toast.success('Order has been created');
                    })
                    .catch((error) => {
                        toast.error('Failed to get order', error);
                    });
            })
            .catch((error) => {
                toast.error('Failed to create order', error);
            });
    };

    return (
        <>
            <section className="details-banner hero-area bg_img seat-plan-banner">
                <div className="container">
                    <div className="details-banner-wrapper">
                        <div className="details-banner-content style-two">
                            <h3 className="title">{movie.title}</h3>
                            <div className="tags">
                                <a href="#0">City Walk</a>
                                <a href="#0">English - 2D</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-title bg-one">
                <div className="container">
                    <div className="page-title-area">
                        <div className="item md-order-1">
                            <Link to="/" className="custom-button back-button">
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

            <div className="movie-facility padding-bottom padding-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="section-header-3">
                                <span className="cate">You're hungry</span>
                                <h2 className="title">we have food</h2>
                                <p>Prebook Your Meal and Save More!</p>
                            </div>
                            <div className="grid--area">
                                <div className="grid-area">
                                    {foods.map((food, index) => (
                                        <div key={index} className="grid-item">
                                            <div className="grid-inner">
                                                <div className="grid-thumb">
                                                    <img src={pop2} alt={`food-${index}`} />
                                                    <div className="offer-tag">${food.price}</div>
                                                </div>
                                                <div className="grid-content">
                                                    <h5 className="subtitle">{food.name}</h5>
                                                    <form className="cart-button">
                                                        <div className="cart-plus-minus">
                                                            <input
                                                                className="cart-plus-minus-box"
                                                                type="number"
                                                                name="qty"
                                                                min={1}
                                                                defaultValue={1}
                                                            />
                                                        </div>
                                                        <button
                                                            type="button"
                                                            className="custom-button"
                                                            onClick={() =>
                                                                addToBill(
                                                                    food,
                                                                    parseInt(
                                                                        document.getElementsByName('qty')[index].value,
                                                                    ),
                                                                )
                                                            }
                                                        >
                                                            add
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="booking-summery bg-one">
                                <div className="section-header-3" style={{ margin: 0 }}>
                                    <h6 style={{ textAlign: 'center' }} className="cate">
                                        Room {roomId}
                                    </h6>
                                </div>
                                <h4 className="title">Booking Summary</h4>
                                <ul>
                                    <li>
                                        <h6 className="subtitle">{movie.title}</h6>
                                        <span className="info">English-2d</span>
                                    </li>
                                    <li>
                                        <h6 className="subtitle">
                                            <span>Time</span>
                                            <span>Seats</span>
                                        </h6>
                                        <div className="info">
                                            <span>
                                                {startDate}, {startTime}
                                            </span>
                                            <div>
                                                {selectedSeats.map((seat, index) => (
                                                    <span key={index}>
                                                        {seat}
                                                        {index !== selectedSeats.length - 1 ? ', ' : ''}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <h6 className="subtitle mb-0">
                                            <span>Tickets Price</span>
                                            <span>${totalPrice}</span>
                                        </h6>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <h6 className="subtitle">
                                            <span>Foods</span>
                                            <span>Price</span>
                                        </h6>
                                        <div>
                                            {bill.map((item, index) => (
                                                <li key={index}>
                                                    <h6 className="info">
                                                        <span>
                                                            {item.name} X {item.qty}
                                                        </span>
                                                        <span>${item.price}</span>
                                                    </h6>
                                                </li>
                                            ))}
                                        </div>
                                    </li>
                                    <li>
                                        <h6 className="subtitle mb-0">
                                            <span>Total Price</span>
                                            <span>
                                                $
                                                {totalPrice +
                                                    bill.reduce((acc, curr) => acc + curr.price * curr.qty, 0)}
                                            </span>
                                        </h6>
                                    </li>
                                </ul>
                            </div>
                            <div className="proceed-area  text-center">
                                <h6 className="subtitle">
                                    <span>Amount Payable</span>
                                    <span>
                                        ${totalPrice + bill.reduce((acc, curr) => acc + curr.price * curr.qty, 0)}
                                    </span>
                                </h6>
                                <Link
                                    onClick={handleCheckout}
                                    className="custom-button"
                                    to={`/moviecheckout/${movie.id}/show/${showData.id}?orderCode=${orderData.order_Code}`}
                                >
                                    Seat Plans
                                    <i className="fas fa-angle-right" />
                                </Link>
                            </div>
                            <div className="note">
                                <h5 className="title">Note :</h5>
                                <p>Please give us 15 minutes for F&B preparation once you're at the cinema</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieFood;
