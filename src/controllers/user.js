const { v4 } = require('uuid');
const { getUser, getUsers, createUser } = require('../services/user')
const { existUser, updateUser, saveUser, revomeUser } = require('../providers/user')

const getUsersData = async (req, res, next) => {
    try {
        const data = await getUsers();
        res.send(data);
    } catch (error) {
        return error
    }
    return next();
}

const getUserData = async (req, res, next) => {
    try {
        const { id } = req.params
        const data = await getUser(id);

        if (data) res.send(data)
        else res.send('El usuario no existe!')
        
    } catch (error) {
        return error
    }
    return next();
}

const newUserData = async (req, res, next) => {
    try {
        const { username, name, lastname } = req.body
        const user = {
            Id: v4(),
            UserName: username,
            Name: name,
            LastName: lastname,
        };
        const data = await createUser(user);

        switch (data) {
            case 1:
                res.send('Usuario creado con exito!');
            case 2:
                res.send('Error el usuario ya existe!');
            default:
                return data
        }
    } catch (error) {
        error;
    }
    return next();
};

const newUserDataPUT = async (req, res, next) => {
    try {
        const user = {
            UserName: req.body.username,
            Name: req.body.name,
            LastName: req.body.lastname,
        };

        const exist = await existUser(user.UserName);
        switch (exist) {
            case 1: // ACTUALIZAR
                const update = await updateUser(user);
                if (update) res.send('Datos Actualizados!');
                else res.send('Error el usuario no existe!');
                break;
            case 2: // CREAR
                user.Id = v4();
                const save = await saveUser(user);
                if (save == 1) res.send('El usuario no existe pero lo hemos creado!');
                break;
            default: //RETORNA ERROR
                return exist
        }
    } catch (error) {
        error;
    }
    return next();
};


const newUserDataPATCH = async (req, res, next) => {
    try {
        const user = {
            UserName: req.body.username,
            Name: req.body.name,
            LastName: req.body.lastname,
        };
        
        const update = await updateUser(user);
        if (update) res.send('Datos Actualizados!');
        else res.send('Error el usuario no existe!');
    } catch (error) {
        error;
    }
    return next();
};

const deleteUser = async (req, res, next) => {
    try {
        const { username } = req.body

        const remove = await revomeUser(username);
        if (remove) res.send('Usuario eliminado!');
        else res.send('Error el usuario no existe!');
    } catch (error) {
        error;
    }
    return next();
};

module.exports = {
    getUserData,
    getUsersData,
    newUserData,
    newUserDataPUT,
    newUserDataPATCH,
    deleteUser
}