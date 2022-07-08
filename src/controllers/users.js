const { Users } = require('../db/models');
const { getRandUser } = require('../utils/makeUsername');

async function createUser(inputName, inputPhone, inputAge, inputOccupation){
    // console.log(inputName + inputAge + inputPhone);
    const user = await Users.create({
        name: inputName,
        username: await getRandUser(inputName),
        phone: inputPhone,
        age: inputAge,
        occupation: inputOccupation
    });
    return user;
}

async function getAllUsers(){
    const users = await Users.findAll();
    return users;
}

async function getUserByID(searchId){
    const user = await Users.findOne({
        where: { id: searchId }
      });
    return user;
}

async function getUserByUsername(searchUsername){
    const user = await Users.findOne({
        where: { Username: searchUsername }
      });
    return user;
}

module.exports = {
    createUser, getUserByID, getUserByUsername, getAllUsers
}