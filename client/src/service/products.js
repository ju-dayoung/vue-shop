
async function getProducts(){
  const res = await fetch("http://localhost:5500/product")
  return await res.json()
}

async function getProduct(id){
  const res = await fetch(`http://localhost:5500/product/${id}`)
  return await res.json()
}
export {getProducts, getProduct};






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


