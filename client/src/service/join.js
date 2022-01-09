import axios from 'axios';


async function addUser(user){
  return await axios.post("http://localhost:5500/user", user,{
    header:{
      'Content-Type':'application/json'
    },
  })
}

export {addUser};