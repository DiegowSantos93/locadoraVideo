import User from "../models/user-models.js"
import jwtService from "../services/jwt-services.js"

const store = async (req, res) => {
    try {
        await User.create(req.body)
        res.json()
    } catch (error) {
        res.status(400).json(error)
    }
}

const index = async (req, res) => {
    try {
        const content = await User.find(req.query).exec()
        res.json(content)
    } catch (error) {
        res.status(400).json(error)
    }
}

const show = async (req, res) => {
    try {
        const content = await User.findById(req.params.id).exec()
        res.json(content)
    } catch (error) {
        res.status(400).json(error)
    }
}

const update = async (req, res) => {
    try {
        const content = await User.findByIdAndUpdate(req.params.id, req.body).exec()
        res.json()
    } catch (error) {
        res.status(400).json(error)
    }
}

const destroy = async (req, res) => {
    try {
        const content = await User.findByIdAndDelete(req.params.id).exec()
        res.json()
    } catch (error) {
        res.status(400).json(error)
    }
}

const signup = async (req, res) => {
    try {
        const user = await User.create({
        email: req.body.email,
        password: req.body.password,
        permission_Type: req.body.permission_Type
        });
  
        const token = jwtService.generateAccessToken({
        tipo: user.tipo,
        email: user.email,
        _id: user._id,
        });

        res.status(201).json({
        token,
        });
  
    } catch (error) {
      console.log(error)
      res.status(400).send(error);
    }
};
  
const login = async (req, res) => {
    try {
        const user = await User.findOne({
        email: req.body.email,
        }).exec();
  
        if (user && (await user.senhaCorreta(req.body.password))) {
            const token = jwtService.generateAccessToken({
            tipo: user.tipo,
            email: user.email,
            _id: user._id,
            });
  
            res.json({
            token,
            });
        } else {
            res.status(404).json("Email ou senha inválidos");
        }
  
    } catch (error) {
      console.log(error)
      res.status(400).send(error);
    }
};

export default {store, index, show, update, destroy, signup, login}
