// Імплементуйте клас TicketManager, який управляє бронюванням квитків на події. Конструктор класу приймає кількість квитків які доступні спочатку і зберігає значення у приватну властивість #ticketsNumber. Реалізуйте метод isTicketsAvailable який приймає кількість квитків як параметр. Цей метод повинен повертати Promise. Якщо кількість квитків в наявності більше або дорівнює кількості що запитується - метод має повертати зарезолвений проміс зі заченням true. Інакше метод має повертати зарезолвений проміс зі заченням false.

class TicketManager {
  constructor(availableTickets) {
    this.availableTickets = availableTickets
  }

  isTicketsAvailable(tickets) {
    return new Promise((resolve, reject) => {
      return this.availableTickets >= tickets
        ? resolve(true)
        : resolve(false)
    })
  }
}

const ticketsOrder = new TicketManager(10)

console.log(ticketsOrder.isTicketsAvailable(9))
console.log(ticketsOrder.isTicketsAvailable(10))
console.log(ticketsOrder.isTicketsAvailable(11))