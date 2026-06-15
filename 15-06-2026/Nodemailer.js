const pokemon = require('pokemon');
const poki=pokemon.random();
console.log(poki);

const nodemailer=require('nodemailer');
const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'jathinkothuri@gmail.com',
        pass:'sorry sir cannot share password.'
    }
});
let mailOptions={
    from:'jathinkothuri@gmail.com',
    to:'methincu6v@gmail.com',
    subject:'Test Email',
    text:'Your Daughter fire ra !!'
};
transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.log(error);
    }else{
        console.log('Email sent:');
    }});
