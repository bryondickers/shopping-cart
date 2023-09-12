import shoes from "./shoeslist.js";

function currentYear(){
  const year = new Date();
  return year.getFullYear();
}

export default function homeScreen() {
    
    const body = document.createElement("body");

    const header = `<header class="flex flex-row my-7 justify-between md:justify-start gap-x-[2rem] flex-nowrap items-center">
    
    <img class="w-[40%] md:w-[25%] lg:w-[15%]" src="./images/logo.jpg" alt="" srcset="" />

    <a id="view-cart" class="rounded-[10px] whitespace-nowrap px-4 py-2 bg-dark text-white" href="http://">
      view cart <span id="totalCartItems" class="bg-grey p-0.5 rounded-full ml-2">0</span>
    </a>
  </header>`;

  const main = document.createElement("main");

  main.classList.add("flex", "flex-col","gap-x-6", "md:flex-row","md:flex-wrap","justify-start");

  shoes.forEach(shoe=>{
    main.appendChild(item(shoe));
  })

  const footer = document.createElement("footer");
  footer.innerHTML = `<p class="text-xs text-darkBlue text-center pt-8">&copy;ndickers ${currentYear()}</p>`;
   
  return [header,main,footer];
}

function item(shoe){
  const itemDiv = document.createElement('div');
  itemDiv.classList.add("pb-12")
  

  itemDiv.innerHTML = `<div class="md:w-[23rem] h-[8rem]">
  <div class="item-section">
    <img class="max-w-[25%] h-auto" src="${shoe.image}" alt="" srcset="" />
    <div class="p-0 w-[70%]">
      <p class="item-type">Footwear</p>
      <p class="item-description">${shoe.name}</p>
      <p class="item-cost">$${shoe.price}</p>
    </div>
  </div>
</div>`;


return itemDiv;

}

