import axios from "axios";
import { useEffect } from "react";
const history = require("history").createBrowserHistory()

const USER_API = "http://localhost:8081/employees/";


// const USER_API = "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001";

function UserService() {
    useEffect(() => {
        axios
            .get(USER_API)
            .then((res) => {console.log(res.data)});
    });

    return <div>Hello World</div>


}

export default UserService

