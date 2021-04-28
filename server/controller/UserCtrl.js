import { sequelize } from "../../config/config-db";

// findAll = select * from regions
const findAll = async (req, res) => {
    const users = await req.context.models.Users.findAll();
    return res.send(users);
}

// find region by id
const findOne = async (req, res) => {
    const users = await req.context.models.Users.findOne({
        where: { user_id: req.params.id }
    });
    return res.send(users);
}

// Create new Table
const create = async (req, res) => {
    const users = await req.context.models.Users.create({
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_password: req.body.user_email,
        user_type: req.body.user_type,  
    });
    return res.send(users);
}

// UPDATE 
const update = async (req, res) => {
    const { user_email, user_password, user_type } = req.body;
    const regions = await req.context.models.Users.update(
        //nama atribut yang akan di update
        { user_email: user_email, user_password: user_password, user_type: user_type },
        { returning: true, where: { user_id: req.params.id } }
    );
    return res.send(regions);
}

// DELETE
const remove = async (req, res) => {
    const users = await req.context.models.Users.destroy({
        where: { region_id: req.params.id }
    });
    return res.send(true);
}

//rawSQL
const rawSQL = async (req, res) => {
    await sequelize.query ('SELECT * FROM users where user_id = :userId',
        { replacements: { userId: parseInt(req.params.id) }, type: sequelize.QueryTypes.SELECT }
    ).then(result => {
        return res.send(result);
    })
}

export default {
    findAll,
    findOne,
    create,
    update,
    remove,
    rawSQL
}