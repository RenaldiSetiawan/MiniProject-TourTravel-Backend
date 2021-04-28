import { sequelize } from "../../config/config-db";

// findAll = select * from regions
const findAll = async (req, res) => {
    const orders = await req.context.models.Orders.findAll();
    return res.send(orders);
}

// find region by id
const findOne = async (req, res) => {
    const orders = await req.context.models.Orders.findOne({
        where: { order_id: req.params.id }
    });
    return res.send(orders);
}

// Create new Table
const create = async (req, res) => {
    const orders = await req.context.models.Orders.create({
        orders_created_on: req.body.orders_created_on,
        orders_start_date: req.body.orders_start_date,
        orders_end_date: req.body.orders_end_date,
        orders_duration: req.body.orders_duration,
        orders_price: req.body.orders_price,
        orders_description: req.body.orders_description,
        orders_status: req.body.orders_status,
        orders_user_id: req.body.orders_user_id,
        orders_tour_id: req.body.orders_tour_id,
    });
    return res.send(orders);
}

// UPDATE
const update = async (req, res) => {
    const { orders_created_on, orders_start_date, orders_end_date, orders_duration,
            orders_price, orders_description, orders_status } = req.body;
    const orders = await req.context.models.Orders.update(
        { orders_created_on: orders_created_on, orders_start_date: orders_start_date, orders_end_date: orders_end_date,
          orders_duration: orders_duration, orders_price: orders_price,
        orders_description: orders_description, orders_status: orders_status }, //nama atribut yang akan di update
        { returning: true, where: { orders_id: req.params.id } }
    );
    return res.send(orders);
}

// DELETE
const remove = async (req, res) => {
    const orders = await req.context.models.Orders.destroy({
        where: { orders_id: req.params.id }
    });
    return res.send(true);
}

//rawSQL
const rawSQL = async (req, res) => {
    await sequelize.query ('SELECT * FROM orders where order_id = :orderId',
        { replacements: { orderId: parseInt(req.params.id) }, type: sequelize.QueryTypes.SELECT }
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