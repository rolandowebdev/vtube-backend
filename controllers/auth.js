import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { createError } from '../error.js';

export const signup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt); // encrypt password

    const newUser = new User({ ...req.body, password: hash });
    await newUser.save(); // save to mongodb
    res.status(200).send('User has been created!');
  } catch (err) {
    next(err); // next get from handling error in index.js
  }
};

export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    const isCorrect = await bcrypt.compare(req.body.password, user.password);

    if (!user) return next(createError(404, 'user not found!'));
    if (!isCorrect) return next(createError(400, 'Wrong credentials!'));

    const token = jwt.sign({ id: user?._id }, process.env.JWT);
    const { password, ...others } = user?._doc;

    // send generate user token to cookie
    res
      .cookie('access_token', token, {
        httpOnly: true
      })
      .status(200)
      .json(others);
  } catch (err) {
    next(err);
  }
};
