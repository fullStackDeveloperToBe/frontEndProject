import axios from "axios";

const USER_API = "http://localhost:8081/employees";



class UserService  {
    getAllEmployee(){
         axios.get(USER_API);
    }
}

export default new UserService()