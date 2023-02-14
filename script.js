
 function justtext (elem){
    let text = [].reduce.call(elem.childNodes, function(a, b) { return a + (b.nodeType === 3 ? b.textContent : ''); }, '');

	return text
}
 
 function incrementQuantity(itemId, itemCost, subtotal){
    document.getElementById(itemId).stepUp();
    let cost = parseInt(document.getElementById(itemCost).textContent)
    let itemCount = document.getElementById(itemId).value;
    let orderTotal = parseInt(document.getElementById(subtotal).textContent)
    if(cost != null) {
        orderTotal += cost
        document.getElementById(subtotal).innerHTML = orderTotal
    }

}

function decrementQuantity(itemId, itemCost, subtotal){
    let prevCount = document.getElementById(itemId).value;
    document.getElementById(itemId).stepDown();
    // document.getElementById(itemId).setAttribute("value", newCount);
    let cost = parseInt(document.getElementById(itemCost).textContent)
    let itemCount = document.getElementById(itemId).value;
    console.log("dec amt: ", itemCount)
    let orderTotal = parseInt(document.getElementById(subtotal).textContent);
    if(cost != null) {
        if (itemCount > 0 || (prevCount == 1 && itemCount == 0) ){
            orderTotal -= cost;
            document.getElementById(subtotal).innerHTML = orderTotal;
        } 
        
    }
     
}

function cancelOrder(subtotal, itemsCount ) {
    document.getElementById(subtotal).innerHTML = 0
    let els = document.getElementsByClassName(itemsCount);
    console.log()
    for (var i=0; i < els.length; i++) {
        // console.log(els[i])
        els[i].value = 0;
    }
}

function placeOrder(subtotal, itemsCount, itemNames) {
    let names = document.getElementsByClassName(itemNames);
    let counts =  document.getElementsByClassName(itemsCount);
    let orderCost = parseInt(document.getElementById(subtotal).textContent);
    let message = ""
    if(orderCost == 0){
        // console.log("No items")
        message = "No items in Cart"
    } else {
        message += "Order placed!\n"
        for (var i=0; i < names.length; i++) {
            let name = justtext(names[i])
            let num = parseInt(counts[i].value)
            if(num != 0){
                message += (num + " " + name)
                // console.log(name, num)
            }
        }
    }
    alert(message)
}
