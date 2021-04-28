const tours_images = (sequelize, DataTypes)=> {
    const Tours_Images= sequelize.define('tours_images', {
        toim_id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
          },
          toim_filename: {
            type: DataTypes.STRING(255),
            allowNull: true
          },
          toim_filepath: {
            type: DataTypes.STRING(255),
            allowNull: true
          },
          toim_utama: {
            type: DataTypes.BOOLEAN,
            allowNull: true
          },
          toim_tour_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'tours',
              key: 'tour_id'
            }
          }
        }, {
          sequelize,
          tableName: 'tours_images',
          schema: 'public',
          timestamps: false,
          indexes: [
            {
              name: "tours_images_pkey",
              unique: true,
              fields: [
                { name: "toim_id" },
              ]
            },
          ]
        });
        return Tours_Images
    };
    export default tours_images;