/**
 * Created by MANO on 2016.11.25.
 */
module.exports = function Cart(oldCart){
  this.item = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;


    this.add = function(item, id){
        var storedItems = this.items[id];
        if (!storedItem){
            storedItems = this.items[id] = {item: item, qty: 0, price: 0};
        }
        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.qty;
        this.totalQty++;
        this.totalPrice+= storedItem.item.price;
    };

    this.generateArray = function(){
        var arr = [];
        for (var id in this.items){
            arr.push(this.items[id]);
        }
        return arr;

    };
};
