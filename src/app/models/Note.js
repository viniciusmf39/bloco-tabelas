import Sequelize, { Model } from 'sequelize';

class Note extends Model {
  static init(sequelize) {
    super.init(
      {
        uid: {
          primaryKey: true,
          allowNull: false,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        title: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        content: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        date: {
          allowNull: false,
          type: Sequelize.DATEONLY,
          validate: {
            isDate: true,
          },
        },
        hour: {
          allowNull: false,
          type: Sequelize.TIME,
        },
      },
      { sequelize }
    );
    return this;
  }
}

export default Note;
