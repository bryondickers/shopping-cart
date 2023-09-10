
export default function itemsSelected(elementToAppend,items) {
  
  items.forEach(item =>{
    const createDiv = document.createElement("div");
    const itemHtml = `<div class="border-b-2 md:justify-between border-lineColor flex flex-row py-6">
    <div class="flex md:w-[45%] md:justify-between flex-col md:flex-row md:items-center w-[50%] ">
      <div class="flex flex-row gap-x-2">
        <img src="${item.itemImgSrc}" alt="" srcset="" />
        <div class="md:pr-6 md:flex md:flex-col md:justify-center" >
          <p class="text-lightGrey text-sm md:text-base">${item.itemType}</p>
          <p class="item-description md:text-lg text-base break-all" style="white-space:initial;">
            ${item.itemDescr}
          </p>
        </div>
      </div>
      <p class="self-end md:self-center text-xl md:text-2xl font-bold mr-4 md:mr-0">${item.itemCost}</p>
    </div>
    <div class="w-[50%] md:w-[30%] flex md:flex-row-reverse md:items-center flex-col items-end justify-between">
      <p id="total-item-cost" class="text-xl md:text-2xl text-purple font-bold">${item.itemCost}</p>
      <div
        class="flex flex-row gap-x-2 items-center border-y-[2px] border-lineColor"
      >
        <button id="decrease" class="increment-btn">-</button>
        <p class="px-2">1</p>
        <button id="increase" class="increment-btn ">+</button>
      </div>
    </div>
  </div>`;
  createDiv.innerHTML = itemHtml;
  elementToAppend.appendChild(createDiv);
  })
  const increBtns = document.querySelectorAll("#increase");
  const decreBtns = document.querySelectorAll("#decrease");

  // add event listener for increase button
  increBtns.forEach(increBtn =>{
    increBtn.addEventListener("click", incrementItem);
  })
  // add event listener for increase button
  decreBtns.forEach(decreBtn =>{
    decreBtn.addEventListener("click", decrementItem);
  })
  
  // items quantity increment implentation
  function incrementItem(e){
     e.target.previousElementSibling.textContent ++;
     const increQuantity = e.target.previousElementSibling.textContent;
     calculateCost(e,increQuantity);
     updateTotal();
  }

  // items quantity decrement implementation
  function decrementItem(e){
    let quantityText = e.target.nextElementSibling;
    if(quantityText.textContent > 1){
      quantityText.textContent--;
    }else{
      quantityText.textContent = 1;
    }
    const decreQuantity = e.target.nextElementSibling.textContent;
    calculateCost(e,decreQuantity);
    updateTotal();
 }

    function calculateCost(element, quantity) {
     const elementCost = element.target.parentElement.parentElement.previousElementSibling.children[1].textContent.slice(1);
     let totalCost = Number(elementCost) * Number(quantity)
     let getTotalCost = element.target.parentElement.previousElementSibling;
     getTotalCost.textContent = `$${totalCost}`
    }

    function updateTotal(){

      let total = 0;
      const getCostElements = document.querySelectorAll("#total-item-cost");
    
      getCostElements.forEach(function(costElement){

        let eachElementTotalCost = Number(costElement.textContent.slice(1));
        total += eachElementTotalCost;
      } )

      const shippingFees = ((7/100) * total);
      const totalAmountToPay =  (total + shippingFees);

      
      updateTotalsOnFooter("#add-items-cost",total);
      
      // update shipping fee
      updateTotalsOnFooter("#shipping-fee",shippingFees);

      // update total amount to pay
      updateTotalsOnFooter("#total-amount-to-pay",totalAmountToPay)
      
      // update checkout button
      updateTotalsOnFooter("#checkout-btn-amount",totalAmountToPay)
    }
    function updateTotalsOnFooter(getId,amount){
      const element = document.querySelector(getId);
      element.textContent = `$${amount.toFixed(2)}`
    }
    updateTotal();
}