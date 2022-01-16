import axios from 'axios';

async function getProducts(){
  const res = await fetch("http://localhost:5500/product")
  return await res.json()
}

async function getProducts2(){
  const res = await axios("http://localhost:5500/product")
  return res.data;
}

async function addProduct(product){
  return await axios("http://localhost:5500/product",{
    method:'post',
    header:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(product)
  })
}

async function getProduct(id){
  const res = await fetch(`http://localhost:5500/product/${id}`)
  return await res.json()
}

async function getProduct2(id){
  const res = await axios.get(`http://localhost:5500/product/${id}`)
  return res.data;
}

async function addItemTocart(item){
  return await axios.post('http://localhost:5500/cart/', item,{
    header:{
      'Content-Type': 'application/json'
    }
  })
}

async function getAllCartItems(){
  const res = await axios.get('http://localhost:5500/cart')
  return res.data;
}
async function getcartItem(id){
  const res = await axios.get(`http://localhost:5500/cart/${id}`)
  return res.data;
}
async function deleteCartItem(id){
  try{
    await axios.delete(`http://localhost:5500/cart/${id}`)
    return true;
  } catch (e){
    return false;
  }
}
export {getProducts, getProduct, getProduct2, addProduct, deleteCartItem, addItemTocart, getAllCartItems, getcartItem };






// array의 이름은 

// function getProducts(){
//   return fetch()
//     .then(res => res.json())
//     .then()
// }
// then은 함수가 들어가야한다


// const data1 = await getProducts()
// const data2 = getProducts2().then();

//글로벌 스콥에선 await 못씀 펑션으로 감싸야함
//뷰는 실행되는 시점에선 글로벌 스콥이 아니다
// 그리서 vue에서는 글로벌 처럼 보이는 곳에 await쓸수 있다

  // fetch("http://localhost:5500/product")
  //   .then(response => response.json())
  //   .catch((error) => console.log('error : ', error))
  //   .then(data => data );
  // then이 뭘 받는지 이해해야함
  
  // ... 스프레드 오퍼레이션는 맵에 넘오느느 객체 하나는 
  // ... 오퍼레이터는 하나 받은 객체를 다 풀어줘라는 의미이다. 
  // = {name: d.name, price : d.price, explan : d.explan}

  //있는키를 다시 입력하면 재 정의
  /*
  function asd(data) {
    return data.map(d => { // map은 항목 하나하나 뽑아준다
      return{
        ..d,
        price:d.price + '원'
      }
    })
  }
  */


