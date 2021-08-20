//Add memory button event handler:
function getMemoryInput(memoryPrice){
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = memoryPrice;
}
document.getElementById('default-memory-input').addEventListener('click', function(){    
    getMemoryInput(0);
});
document.getElementById('extra-memory-input').addEventListener('click', function(){    
    getMemoryInput(180);
});

//Add storage button event handler:
function getStorageInput(storagePrice){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = storagePrice;
}
document.getElementById('default-storage-input').addEventListener('click', function(){
    getStorageInput(0);
});
document.getElementById('extra-storage-input').addEventListener('click', function(){
    getStorageInput(100);
});
document.getElementById('ultra-storage-input').addEventListener('click', function(){
    getStorageInput(180);
});

