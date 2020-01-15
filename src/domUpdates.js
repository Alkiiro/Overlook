import $ from 'jquery';

const domUpdates = {
  displayCustomerSection(customer) {
    $('.login-section').addClass('hidden');
    $('.customer-section').removeClass('hidden');
  },

  toggleCustomerBookings() {
    $('.customer-room').toggle('.hidden');
  },

  displayAvailableRooms() {
    $('.available-room').removeClass('hidden');
  }
}


export default domUpdates
