let x=0;

function randomNumbers(){
    x = Math.floor(Math.random() * 10000);
    if(x>=100 && x<1000) return '0' + x.toString();
    else if(x>=10 && x<100) return '00' + x.toString();
    else if(x>=0 && x<10) return '000' + x.toString();
    return x.toString();
}

function getRandUser(inputName){
    return '#' + inputName.split(" ").join("") + randomNumbers();
}

// tests
// console.log(getRandUser("haseeb rahman"));
// console.log(getRandUser("ateeq rahman"));
// console.log(getRandUser("ayesha"));
// console.log(getRandUser("spandn"));

module.exports = {
    getRandUser
};