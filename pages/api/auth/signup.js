
import connectMongo from '../../../database/conn';
import Users from '../../../model/Schema'
import {hash} from 'bcryptjs'
import mongoose from 'mongoose'

mongoose.set('debug', true);

export default async function handler(req, res){
    connectMongo().catch(error => res.json({error: 'connection Failed...!'}))

    // only post method is accepted
    
    if(req.method ==="POST"){
    if(!req.body) return res.status(404).json({error: "Don't have form data...!"});
    const{username, email, password} = req.body;

// check duplicate users
Users.findOne({ email }).maxTimeMS(30000)
  .then(checkexisting => {
    if (checkexisting) {
      return res.status(422).json({ message: 'User Already Exists..!' });
    } else {
      // continue with user creation logic
    }
  })
  .catch(err => {
    console.error(err);
  });


//hash password
Users.create({ username, email, password: await hash(password, 12) })
  .then(data => {
    res.status(201).json({ status: true, user: data });
  })
  .catch(err => {
    res.status(404).json({ err });
  })

}}