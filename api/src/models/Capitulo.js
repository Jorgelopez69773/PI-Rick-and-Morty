const {DataTypes}= require ('sequelize');



module.exports=(sequelize)=>{
    sequelize.define('capitulo',{
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            allownull:false,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING,
        },
        episode:{
            type:DataTypes.STRING
        }
    })
}