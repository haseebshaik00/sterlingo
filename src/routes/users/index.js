const route = require('express').Router();

const { createUser, 
    getUserByID, 
    getUserByUsername,
    getAllUsers } = require('../../controllers/users');

route.get('/:id', async (req, res) => {
    let user;
    if(isNaN(parseInt(req.params.id))){
        user = await getUserByUsername(req.params.id);
    }
    else{
        user = await getUserByID(req.params.id);
    }
    if(user){
        res.status(200).send(user);
    }
    else{
        res.send(404).send({
            error: "No user with given id or username"
        })
    }
});

route.get('/', async (req, res) => {
    let users = await getAllUsers();
    res.status(200).send(users);
})

route.post('/', async (req, res) => {
    // const util=require('util');
    // let s=util.inspect(req.body).split(`Content-Disposition: form-data; name`);s.splice(0,1);
    // let r=`{"`;s.forEach((e)=>{r+=e.split(`\\r\\n------`)[0].replace(`"\\r\\n\\r\\n`,`":"`).replace(`\': \'"`,``).replace(`=`,``)+`",`});
    // s=r.slice(0,-1)+`}`;
    // console.log(s);
    const { name, phone, age, occupation } = req.body;
    const user = await createUser(name, phone, age, occupation);
    res.status(201).send(user);
});

module.exports = {
    usersRoute: route
}