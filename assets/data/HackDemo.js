class Product{
    constructor(name, price){
    this.name = name;
    this. price = price;
    }
}
class Package{
    constructor(p1, p2, p3, p4, p5){
        Package = [p1,p2,p3,p4,p5];
    }
}

// var arr = api();

// function api(){
//     fetch('https://gateway-staging.ncrcloud.com/transaction-document/transaction-documents/20191102-564452-10100006-0', {
//      method: 'POST',
//      headers: {
//        'accept': 'application/json',
//        'Content-Type': 'application/json',
//        'Authorization': 'acct:root@hack_foodhub:~+J<96!]}u',
//        'nep-application-key': '8a0384356ddb119e016e2ab8ebf10090',
//        'nep-organization': 'silver-merchant-552518',
//        'nep-service-version': '2:1'
//      },
//     }).then(response => response.json()).then(Data =>{
//         return (response.json());
//     });//    .catch((error) => {
    
    //      console.error(error);
    //    });
    //}



var prods= [
    eggs = new Product("Eggs", '$3.50'),
    milk = new Product("Milk", '$2.75'),
    bananas = new Product("Bananas", '$1.90'),
     bread = new Product("Bread", '$1.99'),
     brownie = new Product("Brownie", '$1.00'),
     vIceCream = new Product("Vanilla Ice cream", '$5.90'),
     cSyrup = new Product("Chocolate Syrup", '$1.50'),
     wCream = new Product("Whipped Cream", '$3.99'),
     cherries = new Product("Cherries", '$1.00'),
     //brownieSunday = new Package(brownie, vIceCream, cSyrup, wCream, cherries)

];

module.exports.prods;
// The fetch is throwing right away, after many hours of troubleshooting,
// we are ignoring it and hardcoding for now.




// // The fetch is throwing right away, after many hours of troubleshooting,
// // we are ignoring it and hardcoding for now.

// function api(){
// fetch('https://gateway-staging.ncrcloud.com/transaction-document/transaction-documents/20191102-564452-10100006-0', {
//  method: 'POST',
//  headers: {
//    'Accept': 'application/json',
//    'Content-Type': 'application/json',
//    'Authorization': 'Basic YWNjdDpyb290QGhhY2tfZm9vZGh1Yjp+K0o8OTYhXX11',
//    'nep-application-key': '8a0384356ddb119e016e2ab8ebf10090',
//    'nep-organization': 'silver-merchant-552518',
//    'nep-service-version': '2:1'
//  },
// }).then(response => response.json())

//    .catch((error) => {

//      console.error(error);
//    });
