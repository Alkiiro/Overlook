import domUpdates from './domUpdates.js';

class Customer {
  constructor(customer, bookings) {
    this.id = customer.id;
    this.name = customer.name;
    this.customerBookings = bookings;
  }

  toggleBookings() {
    domUpdates.toggleCustomerBookings();
  }
}

export default Customer
