var user = function(object) {
    const {
        id,
        name,
        email,
        address
    } = object;

    this.id = id;
    this.name = name;
    this.email = email;
    this.address = address;
}

module.exports = user;