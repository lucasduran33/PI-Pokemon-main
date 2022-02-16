const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type:DataTypes.UUID,
      allowNull:false,
      unique:true,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      unique:true,
      allowNull: false,
    },
    height:{
      type:DataTypes.INTEGER,
      allowNull:true,
      defaultValue:0
    },
    weight:{
      type:DataTypes.INTEGER,
      allowNull:true,
      defaultValue:0
    },
    sprites:{
      type:DataTypes.STRING(5000),
      allowNull:true,
      defaultValue:"https://i.pinimg.com/564x/7a/89/9a/7a899ae5a7bf99e40fef753983427222.jpg"
    },
    
    
    hp:{
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0
    },
    attack:{
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0
    },
    defense:{
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0
    },
    speed:{
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0
    },
    createdInDB:{
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: true
    }

   

  });
};