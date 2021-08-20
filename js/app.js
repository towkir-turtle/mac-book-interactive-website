//Add memory button event handler:
function getItemInput(item, memoryPrice){
    const memoryCost = document.getElementById(item + '-cost');
    memoryCost.innerText = memoryPrice;

    getCost();

    getTotal();
}
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

//get cost:
function getCost(){
    const bestCostInput = document.getElementById('best-cost');
    const bestInput = parseInt(bestCostInput.innerText);
    
    const memoryCostInput = document.getElementById('memory-cost');
    const memoryInput = parseInt(memoryCostInput.innerText);

    const storageCostInput = document.getElementById('storage-cost');
    const storageInput = parseInt(storageCostInput.innerText);

    const deliveryCostInput = document.getElementById('delivery-cost');
    const deliveryInput = parseInt(deliveryCostInput.innerText);

    const totalPriceInput = document.getElementById('total-price');
    totalPriceInput.innerText = bestInput + memoryInput + storageInput + deliveryInput;

    return totalPriceInput;
}

function getTotal(){
    const bestCostInput = document.getElementById('best-cost');
    const bestInput = parseInt(bestCostInput.innerText);
    
    const memoryCostInput = document.getElementById('memory-cost');
    const memoryInput = parseInt(memoryCostInput.innerText);

    const storageCostInput = document.getElementById('storage-cost');
    const storageInput = parseInt(storageCostInput.innerText);

    const deliveryCostInput = document.getElementById('delivery-cost');
    const deliveryInput = parseInt(deliveryCostInput.innerText);

    const totalPriceInput = document.getElementById('total');
    totalPriceInput.innerText = bestInput + memoryInput + storageInput + deliveryInput;

    return totalPriceInput;
};



