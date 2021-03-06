import axios from 'axios';


async function addUser(user){
  const userList = await checkUser();
  let email = userList.map(({ email }) => email)
  //array의 some, every 이용해서 수정해보기
  if( email.includes(user.email) ){
    alert('id 중복');
    return false;
  } else {
    alert('가입완료');
    return await axios.post("http://localhost:5500/user", user,{
      header:{
        'Content-Type':'application/json'
      },
    })
  }
}

async function checkUser(){
  const userData= await axios.get("http://localhost:5500/user");
  return userData.data;
}

export {addUser};
//