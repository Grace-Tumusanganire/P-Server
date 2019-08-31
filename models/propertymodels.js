


const properties = []

class Property {
    constructor(id, owner, status, price, state, city, address, type, created_on, image_url) {
        this.id = id;
        this.owner = owner;
        this.status = status;
        this.price = price;
        this.state = state;
        this.city = city;
        this.address = address;
        this.type = type;

    }


 createProperty() {
    const newProperty = {
        id: users.length + 1,
        owner: this.ownner,
        status: this.status,
        price: this.price,
        state: this.state,
        address: this.address,
        type: this.type,
        image_url: this.image_url,
    };
    properties.push(newProperty)
 }

findAllProperties() {
    return properties;

}


}
export default propertymodels;












