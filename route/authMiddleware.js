require('dotenv').config();
const jwt = require('jsonwebtoken');
const secretKey = process.env.TOKEN_SECRET;

// user ID
const userData = {
  id: 'aditya20', 
  username: 'adityaPawar',
};
const Registertoken = jwt.sign(userData, secretKey);

// middle ware function code : >
const authMiddleware = (req, res, next) => {s
  const Createdtoken = req.header('Authorization');

  if (!Createdtoken) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  try {
    const Decrypted = jwt.verify(Createdtoken, secretKey);
    req.user = Decrypted;
    next();
  } catch (ex) {
    res.status(400).json({ error: 'Invalid token.' });
  }
}

module.exports = authMiddleware;
