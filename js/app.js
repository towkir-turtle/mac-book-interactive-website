function getItemInput(item, itemPrice){
    const itemCost = document.getElementById(item + '-cost');
    itemCost.innerText = itemPrice;

    //get total cost:
    getTotalCost();
    //get another total:
    getAnotherTotal();
};

//Add memory button event handler:
document.getElementById('default-memory-input').addEventListener('click', function(){    
    getItemInput('memory', 0);
});
document.getElementById('extra-memory-input').addEventListener('click', function(){    
    getItemInput('memory', 180);
});

//Add storage button event handler:
document.getElementById('default-storage-input').addEventListener('click', function(){
    getItemInput('storage', 0);
});
document.getElementById('extra-storage-input').addEventListener('click', function(){
    getItemInput('storage', 100);
});
document.getElementById('ultra-storage-input').addEventListener('click', function(){
    getItemInput('storage', 180);
});

//Add delivery button event handler:
document.getElementById('normal-delivery-charge').addEventListener('click', function(){
    getItemInput('delivery', 0);
});
document.getElementById('fast-delivery-charge').addEventListener('click', function(){
    getItemInput('delivery', 20);
});

//get cost input:
function getCostInput(item){
    const costInput = document.getElementById(item + '-cost');
    const costInputValue = parseInt(costInput.innerText);
    return costInputValue;
};

//get total cost:
function getTotalCost(){
    getCostInput('best');
    getCostInput('memory');
    getCostInput('storage');
    getCostInput('delivery');

    const totalPriceInput = document.getElementById('total-price');
    totalPriceInput.innerText = getCostInput('best') + getCostInput('memory') + getCostInput('storage') + getCostInput('delivery');

    return totalPriceInput;
};

//get another total:
function getAnotherTotal(){
    getCostInput('best');
    getCostInput('memory');
    getCostInput('storage');
    getCostInput('delivery');

    const totalInput = document.getElementById('total');
    totalInput.innerText = getCostInput('best') + getCostInput('memory') + getCostInput('storage') + getCostInput('delivery');

    return totalInput;
};

//Add discount button event handler:
document.getElementById('apply-btn').addEventListener('click', function(){

    const promoCodeInput = document.getElementById('promo-code-input');
    const promoCodeValue = promoCodeInput.value;

    const totalPriceInput = document.getElementById('total');
    const totalPrice = parseFloat(totalPriceInput.innerText);

    if(promoCodeValue == 'stevekaku'){
        totalPriceInput.innerText = totalPrice - (totalPrice * .2);
    };
    promoCodeInput.value = '';
});


