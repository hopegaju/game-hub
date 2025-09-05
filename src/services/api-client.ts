import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api/games',
    params:{
        key:'a761c472224a45788ed13de9b17e98c0'
    }
})