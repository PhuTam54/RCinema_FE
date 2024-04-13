import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { location, useLocation } from 'react-router-dom';

import venus from '~/assets/images/movie/exhuma.jpg';
import banner4 from '~/assets/images/banner/banner04.jpg';
import card from '~/assets/images/payment/card.png';
import paypal from '~/assets/images/payment/paypal.png';
import * as orderService from '~/services/orderService';
import * as paymentService from '~/services/paymentService';

function MovieCheckout() {
    const movie = JSON.parse(localStorage.getItem('movie')) ?? {};

    const [order, setOrder] = useState({
        orderFoods: [],
        tickets: [],
    });

    const orderCode = (localStorage.getItem('orderCode')) ?? {};
    const [ticketsPrice, setTicketsPrice] = useState(0);
    const [ticketsNumber, setTicketsNumber] = useState(0);
    const [foodsPrice, setFoodsPrice] = useState(0);
    const [VAT, setVAT] = useState(0);
    const [amountAfterVAT, setAmountAfterVAT] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            orderService
                .getOrder(orderCode)
                .then((response) => {
                    localStorage.setItem('order', JSON.stringify(response));
                    setOrder(response);
                    let priceTickets = 0;
                    let priceFoods = 0;
                    response.tickets.map((ticket) => (priceTickets += ticket.price));
                    setTicketsPrice(priceTickets);
                    setTicketsNumber(response.tickets.length);
                    response.orderFoods.map((food) => (priceFoods += food.price * (food.qty || 1)));
                    setFoodsPrice(priceFoods);
                    if (response.final_Total > 50) {
                        setVAT(parseFloat((0.1 * response.final_Total).toFixed(2)));
                    } else if (response.final_Total > 10) {
                        setVAT(parseFloat((0.05 * response.final_Total).toFixed(2)));
                    } else {
                        setVAT(parseFloat((0.01 * response.final_Total).toFixed(2)));
                    }
                    setAmountAfterVAT(priceTickets + priceFoods + VAT);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        }, 1000);
    }, []);

    const paymentData = {
        orderType: 'Sandbox',
        amount: 1,
        orderDescription: 'Order movie ticket',
        name: 'Customer',
    };

    const handleCheckout = () => {
        paymentData.amount = amountAfterVAT * 23000;
        // paymentService
        //     .paymentPaypal(paymentData)
        axios.post('https://rmallbe20240413154509.azurewebsites.net/api/v1/Payments/PayPal', paymentData)
            .then((response) => {
                console.log(response);
                window.location.href = response.data;
                toast.success('Go to paypal');
            })
            .catch((error) => {
                toast.error('Failed to create order', error);
            });
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
                            <h3 className="title">{movie.title}</h3>
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
                            <a href="/moviefood" className="custom-button back-button">
                                <i className="flaticon-double-right-arrows-angles" />
                                back
                            </a>
                        </div>
                        <div className="item date-item">
                            <span className="date">MON, SEP 09 2020</span>
                            <select className="select-bar" style={{ backgroundColor: '#032055' }}>
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
            <div className="movie-facility padding-bottom padding-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="checkout-widget d-flex flex-wrap align-items-center justify-cotent-between">
                                <div className="title-area">
                                    <h5 className="title">Already a Boleto Member?</h5>
                                    <p>Sign in to earn points and make booking easier!</p>
                                </div>
                                <a href="#0" className="sign-in-area">
                                    <i className="fas fa-user" />
                                    <span>Sign in</span>
                                </a>
                            </div>
                            <div className="checkout-widget checkout-contact">
                                <h5 className="title">Share your Contact Details </h5>
                                <form className="checkout-contact-form">
                                    <div className="form-group">
                                        <input type="text" placeholder="Full Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter your Mail" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter your Phone Number " />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" defaultValue="Continue" className="custom-button" />
                                    </div>
                                </form>
                            </div>
                            <div className="checkout-widget checkout-contact">
                                <h5 className="title">Promo Code </h5>
                                <form className="checkout-contact-form">
                                    <div className="form-group">
                                        <input type="text" placeholder="Please enter promo code" />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" defaultValue="Verify" className="custom-button" />
                                    </div>
                                </form>
                            </div>
                            <div className="checkout-widget checkout-card mb-0">
                                <h5 className="title">Payment Option </h5>
                                <ul className="payment-option">
                                    <li className="active">
                                        <a href="#0">
                                            <img src={card} alt="payment" />
                                            <span>Credit Card</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0">
                                            <img src={card} alt="payment" />
                                            <span>Debit Card</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0">
                                            <img src={paypal} alt="payment" />
                                            <span>paypal</span>
                                        </a>
                                    </li>
                                </ul>
                                <h6 className="subtitle">Enter Your Card Details </h6>
                                <form className="payment-card-form">
                                    <div className="form-group w-100">
                                        <label htmlFor="card1">Card Details</label>
                                        <input type="text" id="card1" />
                                        <div className="right-icon">
                                            <i className="flaticon-lock" />
                                        </div>
                                    </div>
                                    <div className="form-group w-100">
                                        <label htmlFor="card2"> Name on the Card</label>
                                        <input type="text" id="card2" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="card3">Expiration</label>
                                        <input type="text" id="card3" placeholder="MM/YY" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="card4">CVV</label>
                                        <input type="text" id="card4" placeholder="CVV" />
                                    </div>
                                    <div className="form-group check-group">
                                        <input id="card5" type="checkbox" defaultChecked="" />
                                        <label htmlFor="card5">
                                            <span className="title">QuickPay</span>
                                            <span className="info">
                                                Save this card information to my Boleto account and make faster
                                                payments.
                                            </span>
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="custom-button" defaultValue="make payment" />
                                    </div>
                                </form>
                                <p className="notice">
                                    By Clicking "Make Payment" you agree to the <a href="#0">terms and conditions</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="booking-summery bg-one">
                                <h4 className="title">booking summery</h4>
                                <ul>
                                    <li>
                                        <h6 className="subtitle">{movie.title}</h6>
                                        <span className="info">English-2d</span>
                                    </li>
                                    <li>
                                        <h6 className="subtitle">
                                            <span>City Walk</span>
                                            <span>{ticketsNumber}</span>
                                        </h6>
                                        <div className="info">
                                            <span>10 SEP TUE, 11:00 PM</span> <span>Tickets</span>
                                        </div>
                                    </li>
                                    <li>
                                        <h6 className="subtitle mb-0">
                                            <span>Tickets Price</span>
                                            <span>${ticketsPrice}</span>
                                        </h6>
                                    </li>
                                </ul>
                                <ul className="side-shape">
                                    <li>
                                        <h6 className="subtitle">
                                            <span>combos</span>
                                            <span>${foodsPrice}</span>
                                        </h6>
                                        <span className="info">
                                            {order && order.orderFoods.map((orderFood, index) => (
                                                <div key={index}>
                                                    <span>
                                                        {orderFood.qty} x {orderFood.food_Id}
                                                    </span>
                                                    <br></br>
                                                </div>
                                            ))}
                                        </span>
                                    </li>
                                    <li>
                                        <h6 className="subtitle">
                                            <span>food &amp; bevarage</span>
                                        </h6>
                                        {/* <span className="info">
                                            {order.orderFoods.map((orderFood) => (
                                                <span>{orderFood.qty} x {orderFood.food.name}</span>
                                            ))}
                                        </span> */}
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <span className="info">
                                            <span>price</span>
                                            <span>${order && order.final_Total}</span>
                                        </span>
                                        <span className="info">
                                            <span>vat</span>
                                            <span>${VAT}</span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="proceed-area  text-center">
                                <h6 className="subtitle">
                                    <span>Amount Payable</span>
                                    <span>${amountAfterVAT}</span>
                                </h6>
                                <a href="#0" onClick={handleCheckout} className="custom-button back-button">
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

export default MovieCheckout;
