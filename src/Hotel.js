import domUpdates from './domUpdates.js';
import Customer from './Customer.js';

class Hotel {
  constructor(customers, rooms, bookings) {
    this.customers = customers;
    this.currentCustomer = null;
    this.rooms = rooms;
    this.availableRooms = null;
    this.unavailableRooms = null;
    this.bookings = bookings;
    this.date = null;
  }

  checkLoginInfo(username, password) {
    if (username.includes('customer') && password === 'overlook2019') {
      let customerId = parseInt(username.split('customer')[1]);
      let matchedCustomer = this.customers.find(customer => customer.id === customerId);
      let customer = new Customer(matchedCustomer, this.filterBookingsByCustomer(customerId));
      this.currentCustomer = customer;
      domUpdates.displayCustomerSection(customer)
    }
    if (username === 'manager' && password === 'overlook2019') {
      // run MANAGER DOMUPDATES
    }
  }

  filterBookingsByCustomer(customerId) {
    return this.bookings.filter(booking => booking.userID === customerId);
  }

  getAvailableRoomsByDate() {
    let bookingsByDate = this.bookings.filter(booking => booking.date === this.date);
    let bookedRoomIdsByDate = bookingsByDate.map(booking => booking.roomNumber);
    this.unavailableRooms = this.rooms.filter(room => bookedRoomIdsByDate.includes(room.number));
    this.availableRooms = this.rooms.filter(room => !bookedRoomIdsByDate.includes(room.number));
    domUpdates.displayAvailableRooms()
  }

  totalRoomsAvailable() {

  }

  totalRevenueToday() {

  }

  totalOccupancy() {

  }

}

export default Hotel;
