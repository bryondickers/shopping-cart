

export default function homeScreen() {
    const shoes = [{image:"./images/shoe.png",name:"Gucci modern ladies",price:168},{image:"./images/shoe.png",name:"Gucci modern ladies",price:168}];
    const body = document.createElement("body");

    const header = `<header class="flex flex-row gap-x-[2rem] flex-nowrap items-center">
    <p class="font-montserratFont text-3xl text-blue font-bold">
      Shopping Cart
    </p>

    <a id="view-cart" class="rounded-[10px] px-4 py-2 bg-dark text-white" href="http://">
      view cart <span id="totalCartItems" class="bg-grey p-0.5 rounded-full ml-2">0</span>
    </a>
  </header>`;

  const main = document.createElement("main");

  main.classList.add("flex", "flex-col", "md:flex-row","md:flex-wrap","justify-start");

  shoes.forEach(shoe=>{
    main.appendChild(item(shoe));
  })


   
  return [header,main];
}

function item(shoe){
  const itemDiv = document.createElement('div');
  

  itemDiv.innerHTML = `<div class="">
  <div class="item-section">
    <img src="${shoe.image}" alt="" srcset="" />
    <div class="p-0">
      <p class="item-type">Footwear</p>
      <p class="item-description">${shoe.name}</p>
      <p class="item-cost">$${shoe.price}</p>
    </div>
  </div>
</div>`;
return itemDiv;

}

