//This is the place where we fetch data from databases
const { UserInputError } = require("apollo-server-express");
const {users} = require("../FakeData");
const resolvers = {
    Query:{
        getAllUsers(parent,args,context){
            console.log('Hello');
            console.log(parent);
            console.log(args);
            console.log(context);
            return users;
        },
        getAbhishakName(){
            return users[0].name;
        },
    },

    Mutation:{
        createUser(parent,args){
            const newUser  = args
            users.push(newUser);
            return newUser;
        }
    }
}

module.exports = {resolvers};