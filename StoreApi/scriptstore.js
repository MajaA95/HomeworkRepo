async function getDataFromFetch(){
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        
        return data;
      }

async function printDocs (){
  docs = await getDataFromFetch();
  docs.forEach((doc)=>{
  console.log(doc);
  let product = `
  <div class = "products" >
  <div><p>${doc.category}</p></div>
  <div><a href=${doc.image}></div>
  <div><img src=${doc.image} width="100" height="100"></div>
  <div><h3>${doc.title}</h3></div>
  <div><h4>PRICE: ${doc.price} $</h4></div>
  </div>    `


let x = document.querySelector("body").insertAdjacentHTML("beforeend", product)

  })
}
printDocs();

