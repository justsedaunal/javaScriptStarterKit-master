import { BaseLogger,ElasticLogger } from "../crossCuttingConcers/logging/logger.js"
import User from "../models/user.js"
import  UserService  from "../services/userService.js"

console.log("User component yüklendi")

let logger1 = new BaseLogger ()

let userService = new UserService(logger1)

let user1 = new User (1,"Seda", "Ünal", "Ankara")
userService.add (user1)

userService.getById (1)
userService.list()

let user2 = new User (2,"Aykut", "Ünal", "Ankara")
userService.add (user2)


console.log(userService.list())

console.log (userService.getById(2))


