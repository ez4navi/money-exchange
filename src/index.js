var error = {error: "You are rich, my friend! We don't have so much coins for exchange"};
module.exports = function makeExchange(currency) {
    var counter = 0;
    var array=[50,25,10,5,1], newArr=[], strings=["H", "Q", "D", "N", "P"];
    if (currency >= 10000) {
        return error;
    } else if (currency<=0) {
        return {};
    }
    for (let i=0; i<array.length; i++) {
        counter = Math.trunc(currency/array[i]);
        if (counter>0) {
            currency-=array[i]*counter;
            newArr.push(counter);
            counter=0;
        } else {
            newArr.push(counter);
        }
    }
    var money = {};
    for (let i=0; i<newArr.length; i++) {
        if (newArr[i]==0) continue;
        money[strings[i]] = newArr[i];
    }
    return money;
}
