const mongoose = require("mongoose");
<<<<<<< HEAD
const jwt = require("jsonwebtoken");

=======
>>>>>>> bddcea678cc21022941ce43ecf5cf2af30331a14
const ColaboradorSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: String,
});
<<<<<<< HEAD

Colaboradorchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id, nome: this.nome },
  process.env.JWT_PRIV_KEY, { expiresIn: process.env.TOKEN_EXPIRE }
  );
  return token;
 };
 
=======
>>>>>>> bddcea678cc21022941ce43ecf5cf2af30331a14
module.exports = mongoose.model("Colaborador", ColaboradorSchema);
