export default function homeScreen() {
    
    const home = ` <header class="flex flex-row gap-x-[2rem] flex-nowrap items-center">
    <p class="font-montserratFont text-3xl text-blue font-bold">
      Shopping Cart
    </p>

    <a id="view-cart" class="rounded-[10px] px-4 py-2 bg-dark text-white" href="http://">
      view cart <span id="totalCartItems" class="bg-grey p-0.5 rounded-full ml-2">0</span>
    </a>
  </header>

  <main class="flex flex-col md:flex-row md:flex-wrap justify-start">
    <div class="bg-dark">
      <div class="item-section">
        <img src="./images/shoe.png" alt="" srcset="" />
        <div class="p-0">
          <p class="item-type">Footwear</p>
          <p class="item-description">Gucci modern ladies</p>
          <p class="item-cost">$168</p>
        </div>
      </div>
    </div>

    <div class="bg-dark">
      <div class="item-section">
        <img src="./images/shoe2.png" alt="" srcset="" />
        <div class="p-0">
          <p class="item-type">Footwear</p>
          <p class="item-description">Gucci modern ladies</p>
          <p class="item-cost">$168</p>
        </div>
      </div>
    </div>

    <div class="bg-dark">
      <div class="item-section">
        <img src="./images/shoe3.png" alt="" srcset="" />
        <div class="p-0">
          <p class="item-type">Footwear</p>
          <p class="item-description">Gucci modern ladies</p>
          <p class="item-cost">$168</p>
        </div>
      </div>
    </div>

    <div class="bg-dark">
      <div class="item-section">
        <img src="./images/shoe4.png" alt="" srcset="" />
        <div class="p-0">
          <p class="item-type">Footwear</p>
          <p class="item-description">Gucci modern ladies</p>
          <p class="item-cost">$168</p>
        </div>
      </div>
    </div>
    <div class="bg-dark">
      <div class="item-section">
        <img src="./images/shoe5.png" alt="" srcset="" />
        <div class="p-0">
          <p class="item-type">Footwear</p>
          <p class="item-description">Gucci modern ladies</p>
          <p class="item-cost">$168</p>
        </div>
      </div>
    </div>
  </main>`;
  return home;
}