


const users = []

class User {
    constructor(id, firstname, lastname, email, password, phoneNumber, address) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.client = true;
    }


   createUser() {
     const user = {
        id: users.length+1,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        address: this.address,
        phoneNumber: this.phoneNumber,
        client: this.client,
    }
    users.push(user)

   }
 static getUserByEmail(email) {
    return users.find(user => user.email === email)
}
}
export default User;













