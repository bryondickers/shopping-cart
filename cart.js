export default function createCart(){
   const innerContent = `<main class="md:p-6 md:pt-10 px-2 pt-6">
    <header class="flex flex-row gap-x-2 pb-3 items-center">
      <img src="./images/bag-2.png" alt="" srcset="" />
      <p class="text-darkBlue text-2xl font-bold">Cart</p>
    </header>
    <section class="lg:flex lg:flex-row lg:justify-start">
     <section class="lg:w-[65%] lg:pr-4">
      <div
      class="md:w-full border-y-2 py-4 border-lineColor flex flex-row justify-between text-grey font-medium"
    >
      <div class="md:flex md:w-[45%] md:flex-row md:justify-between ">
        <p>PRODUCT</p>
        <p>PRICE</p>
      </div>
      <div class="md:flex md:w-[30%] md:flex-row md:justify-between">
        <p>TOTAL</p>
        <p>QTY</p>
      </div>
    </div>

    <section id="add-items" class="add-cart-items">
  
    </section>
    
     </section>
    <div class="bg-totalsGrey p-4 lg:px-4 lg:p-0 lg:w-[35%]">
      <div class="total-section">
        <p class="total-amount-name">TOTAL AMOUNT IN CART</p>
        <p class="total-amount">$</p>
      </div>
      <div class="total-section">
        <p class="total-amount-name">SHIPPING FEE</p>
        <p class="total-amount">$38</p>
      </div>
      <div class="total-section">
        <p class="total-amount-name">TOTAL AMOUNT</p>
        <p class="total-amount">$708</p>
      </div>
      <button class="total-amount mt-4 py-3 w-full bg-blue text-white ">Checkout $<span>708.85</span></button>
    </div>
    </section>
    <!-- totals -->
    
  </main>`;

  const getAllItemCost = document.querySelectorAll("#total-item-cost");
  console.log(getAllItemCost);
  
  return innerContent
}
