const { provideUsers, saveUser, existUser, provideUser } = require('../providers/user');

const getUsers = async () => {
    try {
        const list = await provideUsers();
        return list;
    } catch (error) {
        return error
    }
}

const getUser = async (id) => {
    try {
        const user = await provideUser(id);
        if (user) return user
        else return false
    } catch (error) {
        return error
    }
}

const createUser = async (user) => {
    try {
        const exist = await existUser(user.UserName);
        switch (exist) {
            case 1: //user exist
                return 2 
            case 2: //user not exist
                const save = await saveUser(user);
                if (save == 1) return 1
            default: //return error
                return exist
        }
    } catch (error) {
        return error
    }
}

module.exports = {
    getUsers,
    getUser,
    createUser
}