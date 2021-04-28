import { sequelize } from "../../config/config-db";

// findAll = select * from regions
const findAll1 = async (req, res) => {
    const tours_images = await req.context.models.Tours_Images.findAll();
    return res.send(tours_images);
}

// find region by id
const findOne = async (req, res) => {
    const tours_images = await req.context.models.Tours_Images.findOne({
        where: { toim_id: req.params.id }
    });
    return res.send(tours_images);
}

// Create new Table
const create = async (req, res) => {
    const tours_images = await req.context.models.Tours_Images.create({
        toim_filename: req.body.toim_filename,
        toim_filepath: req.body.toim_filepath,
        toim_utama: req.body.toim_utama,
        toim_tour_id: req.body.toim_tour_id,
    });
    return res.send(tours_images);
}

// UPDATE
const update = async (req, res) => {
    const { toim_filename, toim_filepath, toim_utama } = req.body;
    const tours_images = await req.context.models.Tours_Images.update(
        { toim_filename: toim_filename, toim_filepath: toim_filepath, toim_utama: toim_utama }, //nama atribut yang akan di update
        { returning: true, where: { toim_id: req.params.id } }
    );
    return res.send(tours_images);
}

// DELETE
const remove = async (req, res) => {
    const tours_images = await req.context.models.Tours_Images.destroy({
        where: { toim_id: req.params.id }
    });
    return res.send(true);
}

//rawSQL
const rawSQL = async (req, res) => {
    await sequelize.query ('SELECT * FROM tours_images where toim_id = :toimId',
        { replacements: { toimId: parseInt(req.params.id) }, type: sequelize.QueryTypes.SELECT }
    ).then(result => {
        return res.send(result);
    })
}

// IMG
const updateimg = async (req, res) => {
    console.log(req.filename, req.filepath);
    const result = await req.context.models.Tours_Images.update(
        { toim_filename: req.fileName, toim_filepath: req.filepath }, 
        { returning: true, where: { toim_id: parseInt(req.params.id) } }
    );
    return res.send(result);
}

const createimg = async (req, res, next) => {
    // jika gunakan spread operator
    const dataTours_Images = req.dataTours_Images;

    for (const data of dataTours_Images) {
        await createImage(req, res, data);
    }

    // using middleware
    next();
}

const createImage = async (req, res, data) => {
    const {  toim_fileutama, toim_img , fileName, filePath } = data;
    await req.context.models.Tours_Images.create({
        toim_filename: fileName,
        toim_filepath: filePath,
        toim_utama: parseInt (toim_fileutama),
        toim_tour_id: toim_img
    }).catch(error => {
        console.log(error);
    });
}

const findAll = async (req, res) => {
    const result = await req.context.models.Tours_Images.findAll();
    return res.send(result);
}

export default {
    findAll1,
    findOne,
    create,
    update,
    remove,
    rawSQL,
    updateimg,
    createimg,
    findAll
}

