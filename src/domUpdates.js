import $ from 'jquery';

const domUpdates = {
  displayCustomerSection(customer) {
    $('.login-section').addClass('hidden');
    $('.customer-section').removeClass('hidden');
    // welcome the user by name
  },

  toggleCustomerBookings(bookings) {
    // $('.customer-room').html('');
    $('.customer-section').append(appendRoomData());
    function appendRoomData() {
      let table = `<table class="customer-room hidden">
        <tr>
          <th>Date:<th>
          <th>Room Number</th>
        </tr>`
        bookings.forEach(booking => {
          table += `<tr>
            <td>${booking.date}</td>
            <td>${booking.roomNumber}</td>
          </tr>`
        })
      return table += '</table>'
    }
    $('.customer-room').toggle('.hidden');
    },

  displayAvailableRooms(rooms) {
    $('.available-room').removeClass('hidden');
    $('.customer-section').append(appendRoomData());
    function appendRoomData() {
      let table = `<table class="available-room">
        <tr>
          <th>Room Type<th>
          <th>Cost Per Night<th>
          <th>Number of Beds</th>
          <th>Bed Size<th>
          <th>Bidet<th>
          <th>Room Number<th>
        </tr>`
        rooms.forEach(room => {
          table += `<tr>
            <td>${room.roomType}</td>
            <td>${room.costPerNight}</td>
            <td>${room.numBeds}</td>
            <td>${room.bedSize}</td>
            <td>${room.bidet}</td>
            <td>${room.number}</td>
          </tr>`
        })
      return table += '</table>'
    }
  }
}
// <div class="available-room room#-div hidden">
//   <h3 class="room-type">Room Type - Cost Per Night</h3>
//   <p>Number of Beds</p>
//   <p>Bed Size</p>
//   <p>Bidet (Yes/No)</p>
//   <p>Room Number</p>
// </div>

export default domUpdates
