import { users } from "../data/users.js";
import DataError from "../models/dataError.js"

export default class userService{
    constructor(LoggerService){
        this.LoggerService = LoggerService
        this.users = []
        this.errors = []
    }

    load(){
        this.users = users.filter((user)=> user.type ===  "user")
    }

    checkUserValidity(user){
        let requiredFields = "id firstName lastName city age".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.errors.push(
                    new DataError(`Validation problem. ${field} is required`, user))
            }
        }
        return hasErrors
    }

    add(user){
        if (!this.checkUserValidity(user)) {
            this.users.push(user)
        }
        this.LoggerService.log(user)
    }
    listUsers(){
        //not update
        var result ="";
        var temp;
        for (let index = 0; index < this.users.length ; index++) {
           temp = this.users[index].firstName + " "+ this.users[index].lastName ;
           result += temp +"\n"
           temp=""
        }
        return result
    }
    getUserById(id){
        return this.users.find( user => user.id === id )
    }
    getUserSorted(){
        return this.users.sort((user1,user2)=>{
            if(user1.firstName > user2.firstName){
                return 1;
            }else if(user1.firstName===user2.firstName){
                return 0;
            }else{
                return -1
            }
        })
    }
}