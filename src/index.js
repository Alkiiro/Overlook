import $ from 'jquery';
import './css/base.scss';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import Hotel from './Hotel.js'


let hotel;

Promise.all([
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users').then(response => response.json()),
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms').then(response => response.json()),
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings').then(response => response.json())
]).then(data => {
  hotel = new Hotel(data[0].users, data[1].rooms, data[2].bookings);
  console.log(hotel);
});

$('.login-submit-button').click(letUserLogin);
$('.customer-bookings').click(toggleCustomerBookings);
$('.filter-rooms-button').click(getDate);

function letUserLogin() {
  let username = $('.username-input').val().toLowerCase();
  let password = $('.password-input').val().toLowerCase();
  hotel.checkLoginInfo(username, password);
}

function toggleCustomerBookings() {
  hotel.currentCustomer.toggleBookings();
}

function getDate() {
  hotel.date = $('#find-booking-by-date').val().replace(/-/g, '/');
  hotel.getAvailableRoomsByDate();
}
