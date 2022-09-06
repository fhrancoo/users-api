const { Users } = require('../models/user')

const existUser = async (username) => {
    try {
        const findUser = await Users.findOne({
            where: {
                UserName: username
            }
        }); 
        if (findUser) return 1;
        else return 2;
    } catch (error) {
        return error;
    }
}

const provideUsers = async () => {
    try {
        const list = await Users.findAll();
        return list;
    } catch (error) {
        return error;
    }
}

const provideUser = async (id) => {
    try {
        const user = await Users.findOne({
            where: {
                Id: id
            }
        });
        if (user) return user;
        else return false;
    } catch (error) {
        return error;
    }
}

const saveUser = async (user) => {
    try {
        await Users.create({
            ...user
        }, { isNewRecord: true });
        return 1
    } catch (error) {
        return error
    }
}

const updateUser = async (user) => {
    const { UserName, Name, LastName } = user;

    const findUser = await Users.findOne({
        where: {
            UserName: UserName
        }
    });
    if (findUser) {
        findUser.set({
            Name: Name,
            LastName: LastName
          });
        await findUser.save();
        return true;
    }
    else false
}

const revomeUser = async (username) => {
    try {
        const findUser = await Users.findOne({
            where: {
                UserName: username
            }
        });

        if (findUser) {
            await Users.destroy({
                where: {
                    UserName: username
                }
            });
            return true
        }
        else return false;
    } catch (error) {
        return error;
    }
}

module.exports = {
    existUser,
    provideUsers,
    provideUser,
    saveUser,
    updateUser,
    revomeUser
}