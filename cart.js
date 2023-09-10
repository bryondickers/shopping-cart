export default function createCart(){
   const innerContent = `<main class="md:p-6 md:pt-10 px-2 pt-6">
   <div class="md:flex md:flex-row md:items-center md:justify-between">
   <header class=" flex md:flex flex-row gap-x-2 pb-3 items-center">
     <img src="./images/bag-2.png" alt="" srcset="" />
     <p class="text-darkBlue text-2xl font-bold">Cart</p>
   </header>
   <div id="checkout-note" class="hidden md:gap-x-2 relative p-2 border-2 border-successColor justify-between flex-row">
     <div class="flex flex-row gap-2">
       <img src="./images/tick-circle.png" alt="" srcset="">
       <p class="text-successColor text-sm">Checkout Successful</p>
     </div>
     <button id="cancel-success-note" class=""><img src="./images/Close.png" alt="" srcset=""></button>
   </div>

 </div>
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
        <p id="add-items-cost" class="total-amount">$</p>
      </div>
      <div class="total-section">
        <p class="total-amount-name">SHIPPING FEE</p>
        <p id="shipping-fee" class="total-amount">$</p>
      </div>
      <div class="total-section">
        <p class="total-amount-name">TOTAL AMOUNT</p>
        <p id="total-amount-to-pay" class="total-amount">$</p>
      </div>
      <button id='checkout-btn' class="total-amount mt-4 py-3 w-full active:bg-grey hover:bg-darkBlue bg-blue text-white ">Checkout <span id="checkout-btn-amount">708.85</span></button>
    </div>
    </section>
    <!-- totals -->
    
  </main>`;

  
  return innerContent
}
