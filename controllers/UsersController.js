const User = require("../models/User");

module.exports = class UserController {
  static async createUser(req, res){
    const user = {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email
    }
    if(!user.name){
        return res.json("O nome é obrigatório")
    }if(!user.lastname){
        return res.json("O sobrenome é obrigatório")
    }if(!user.email){
        return res.json("O email é obrigatório")
    }
    try {
        await User.create(user);
        res.status(201).json({msg: "Usuário criado com sucesso"})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: "Ocorreu um erro"})
        return;

    }
   }
   static async getAllUsers(req, res){
    try {
        const users = await User.findAll();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({msg: "Error: " + error})
        return;
    }
   }
   static async getUser(req, res){
    const id = req.params.id
    try {
        const user = await User.findOne({where: {id:id}});
        res.status(200).json(user);
        if(!user) {
            res.status(404).json({msg: "user not found"});
            return;
        }
    } catch (error) {
        res.status(500).json({msg: "Error: " + error})
        return;
    }
   }
   static async updateUser(req, res){
    const id = req.params.id
    
    const user = {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email
    }
    try {
        const findUser =  await User.findOne({where: {id:id}});
        if(!findUser) {
            res.status(404).json({msg: "user não encontrado"});
            return;
        }
       const updateUser =  await User.update(user, {where: {id:id}});
        res.status(200).json({user, msg: "Usuário atualizado com sucesso"});
    } catch (error) {
        res.status(500).json({msg: "Error: " + error})
        return;
    }
   }
   static async deleteUser(req, res){
    const id = req.params.id
    try {
        const findUser =  await User.findOne({where: {id:id}});
        if(!findUser) {
            res.status(404).json({msg: "usuário não encontrado"});
            return;
        }
        const user = await User.destroy({where: {id:id}});
        res.status(200).json({msg: "Usuário deletado com sucesso!"});
    } catch (error) {
        res.status(500).json({msg: "Error: " + error})
        return;
    }
   }
}