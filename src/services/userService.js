export default class UserService {
    add(user){
        console.log("kullanıcı eklendi" + user)
    }

    list(){
        console.log("kullanıcı listelendi")
    }

    getById(id){
        console.log("kullanıcı detayı getirildi")
    }
}