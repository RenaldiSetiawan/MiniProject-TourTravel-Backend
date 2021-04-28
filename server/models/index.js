import users from './users';
import tours from './tours';
import tours_images from './tours_images';
import orders from './orders';

import Sequelize from 'sequelize';
import { sequelize } from '../../config/config-db';

const models = {
    Users: users(sequelize, Sequelize),
    Tours: tours(sequelize, Sequelize),
    Tours_Images: tours_images(sequelize, Sequelize),
    Orders: orders(sequelize, Sequelize),
}

//4. create relation OneToMany | ManyToMany
Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

// 5. export sequalize agar bisa di-call di module lain
export default models;