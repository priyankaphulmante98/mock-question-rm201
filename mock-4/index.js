let container = document.getElementById("container");
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let page=1
let limit=12
let sort=""
let filter=""
let order=""
let total=1;

let pages=document.getElementById("pages")
function totalpages(total){
    pages.innerHTML=null
    let button=document.createElement("button")
    for(let i=0;i<total;i++){
        button.textContent=i+1
        button.addEventListener("click",()=>{
            ProductFetch({page:i+1})
        })
        pages.append(button)
    }
}


let filterdata= document.getElementById("filter")
filterdata.addEventListener("change",()=>{
    filterBy(event.target.value)
})

let sortdata= document.getElementById("sort")
sortdata.addEventListener("change",()=>{
    sortBy(event.target.value)
})


async function ProductFetch({page=1,limit=12,sort="",filter="",order=""}){
  let res = await fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=${limit}&filter=${filter}&sort=${sort}&order=${order}`
  );
  
  let data = await res.json();
  console.log(data);
  totalpages(data.totalPages)
  displayData(data.data);
  return data;
}
async function filterBy(value){
  let data= await ProductFetch({filter:value})
  console.log(data);
  displayData(data.data);
  return data;
  
}
async function sortBy(value){
 
  let data= await ProductFetch({sort:"price",order:value})
  console.log(data);
  displayData(data.data);
  return data;

}



ProductFetch({page,limit,sort,filter,order});

function displayData(data){
    container.innerHTML = null;

    data.forEach((e) => {
        
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src","https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQtTrGm0D8e0nLTfzeeF6FVASBRqCtWuEKJxKVvLjDPhEDZwWCrbVOcIgnDD64SPEswVohXKvzvlNE&usqp=CAc");
    
    let title = document.createElement("h2");
    title.innerText= e.title;

    
let price = document.createElement("h1");
    price.innerText= `$${e.price}`;
    let category = document.createElement("h3");
    category.innerText= e.category;

    let brand= document.createElement("p");
    brand.innerText= e.brand;

    let wishbtn = document.createElement('button')
    wishbtn.textContent=`♡`
    wishbtn.onclick=()=>{
        wishbtn.textContent=`❤️`

    }
    wishbtn.style.marginBottom="20px"
    wishbtn.addEventListener("click", function(){
        iconfunc(e)
    })

    div.append(image, title, price, category, brand, wishbtn);
    container.append(div);

    });
    
}

function iconfunc(e){
    wishlist.push(e)
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
alert("added to wishlist")  
}


  

