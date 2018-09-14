// Driver class:
//
// A driver has many trips, and has many passengers through trips.
// new Driver() - initialized with a name; returns a JavaScript object that has attributes of id, and name
// trips() - returns all of the trips that a driver has taken
// passengers() - returns all of the passengers that a driver has taken on a trip

let driverID = 0
let passengerID = 0
let tripID = 0

let store = {drivers: [], passengers: [], trips: []}

class Driver {
  constructor(name) {
    this.id = ++driverID
    this.name = name
    store.drivers.push(this)
  }
  trips() {
    return store.trips.filter(function (trip) {
      return this.id === trip.driverId
    }.bind(this))
  }
  passengers() {
    let alltrips = this.trips()
    return store.passengers.filter(function (passenger) {
      let answer = false
      for (const element of alltrips) {
        if (element.passengerId === passenger.id) {
          answer = true
        }
      }
      return answer
    })
  }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerID
    this.name = name
    store.passengers.push(this)
  }
  trips() {
    return store.trips.filter(function (trip) {
      return this.id === trip.passengerId
    }.bind(this))
  }
  drivers() {
    let alltrips = this.trips()
    return store.drivers.filter(function (driver) {
      let answer = false
      for (const element of alltrips) {
        if (element.driverId === driver.id) {
          answer = true
        }
      }
      return answer
    })
  }
}

class Trip {
  constructor(driverObj, passengerObj) {
    this.id = ++tripID
    this.passengerId = passengerObj.id
    this.driverId = driverObj.id
    store.trips.push(this)
  }
  passenger() {
    return store.passengers.find(function (passenger) {
      return this.passengerId === passenger.id
    }.bind(this))
  }
  driver() {
    return store.drivers.find(function (driver) {
      return this.driverId === driver.id
    }.bind(this))
  }
}
