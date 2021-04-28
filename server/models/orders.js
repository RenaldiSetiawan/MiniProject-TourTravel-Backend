const orders = (sequelize, DataTypes)=> {
    const Orders= sequelize.define('orders', {
        orders_id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
          },
          orders_created_on: {
            type: DataTypes.DATEONLY,
            allowNull: true
          },
          orders_start_date: {
            type: DataTypes.DATEONLY,
            allowNull: true
          },
          orders_end_date: {
            type: DataTypes.DATEONLY,
            allowNull: true
          },
          orders_duration: {
            type: DataTypes.INTEGER,
            allowNull: true
          },
          orders_price: {
            type: DataTypes.DECIMAL,
            allowNull: true
          },
          orders_description: {
            type: DataTypes.STRING(255),
            allowNull: true
          },
          orders_status: {
            type: DataTypes.STRING(15),
            allowNull: true
          },
          orders_user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
              model: 'users',
              key: 'user_id'
            }
          },
          orders_tour_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
              model: 'tours',
              key: 'tour_id'
            }
          }
        }, {
          sequelize,
          tableName: 'orders',
          schema: 'public',
          timestamps: false,
          indexes: [
            {
              name: "orders_pkey",
              unique: true,
              fields: [
                { name: "orders_id" },
              ]
            },
          ]
        });
        return Orders
    };

export default orders;