import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi");

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Engin","Demiroğ","Ankara",36)
let user2 = new User(2,"Baran","Gökçekli","Muğla")

userService.load()

userService.add(user1)
userService.add(user2)

console.log("users: ",userService.users);
console.log("user errors: ",userService.errors);
console.log(userService.listUsers());
//userService.listUsers()

userService.getUserById(6)
console.log(userService.getUserById(5));
console.log(userService.getUserById(6));

userService.getUserSorted()
console.log(userService.getUserSorted());

console.log("*******************************");