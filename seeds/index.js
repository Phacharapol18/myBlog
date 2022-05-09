
const sequelize = require("../config/connection")
const {User,Blog} = require("../models")

const user =[{
    username:"myself",
    password:"password"
}]

const blogs =[{
    title:"my first and only blog",
    body:"Welcome to my blog application, I hope you have a good experience.",
    UserId:1
}]

const feedMe = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(user,{
            individualHooks:true
        });
        await Blog.bulkCreate(blogs);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

feedMe()