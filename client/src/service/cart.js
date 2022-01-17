import axios from 'axios';

async function getProduct(id){
  const res = await axios.get(`http://localhost:5500/product/${id}`)
  return res.data;
}

async function getcartItem(id){
  const res = await axios.get(`http://localhost:5500/cart/${id}`)
  return res.data;
}

async function operCartQty(id, count){

  // return await axios(`http://localhost:5500/cart/${id}`, {
  //   method: 'POST',
  //   data: {'qty': count},
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // }
  console.log('id,count',id, count)
  // await axios.post(`http://localhost:5500/cart/${id}`, {
  //     qty: count
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })

  await axios.patch(`http://localhost:5500/cart/${id}`, {
      qty: count
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
}

export { getProduct, getcartItem, operCartQty };
