const { Users } = require('../db/models');
const { getRandUser } = require('../utils/makeUsername');

async function createUser(inputName, inputPhone, inputAge){
    console.log(inputName + inputAge + inputPhone);
    const user = await Users.create({
        name: inputName,
        username: await getRandUser(inputName),
        phone: inputPhone,
        age: inputAge,
        occupation: "Student"
    });
    return user;
}

async function getAllUsers(){
    const users = await Users.findAll();
    return users;
}

async function getUserByID(id){
    const user = await Users.findOne({id: id});
    return user;
}

async function getUserByUsername(username){
    const user = await Users.findOne({username: username});
    return user;
}

module.exports = {
    createUser, getUserByID, getUserByUsername, getAllUsers
}