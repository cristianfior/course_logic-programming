// var/let/const object_name = {key: value}
const client = {
    id: 001,
    name: "Pafuncio",
    active: true,
    address: {
        street: 'Rua dos Bobos',
        number: 0,
        reference: [
            'Perto do Bar do Fim'
        ]
    }
}
console.log(client['id'])
console.log(client['address'])
console.log(client['address']['reference'][0])
console.log(client.address.street)

// Challenge
const birthday = {
    day: 27,
    month: "february",
    year: 1998,
    show: function() {
        return `${this.month} ${this.day}, ${this.year}`
    }
}

console.log(birthday.show())

// object as a return
function createDate(day, month, year) {
    return {
        day: day,
        month: month,
        year: year,
        show: function() {
            return `${this.month} ${this.day}, ${this.year}`
        }
    }
}

const date1 = createDate(27, 02, 1998)
console.log(date1.show())

// builders
function Product() {
    console.log(this)
}
const prod1 = new Product()


// class
class User {
    constructor(id = '001', code = '001') {
        this.id = id
        this.code = code
    }

    show() {
        return this.code
    }
}

const user1 = new User()
user1.code = '002'

const user2 = new User('002', '007')
console.log(user2.show())
