//module.exports = [
//     Product eggs = new Product(a, 3),
//     Product milk = new Product(a, 3),
//     Product bananas = new Product(a, 3),
//     Product bread = new Product(a, 3),
//     Product brownie = new Product(a, 3),
//     Product vIceCream = new Product(a, 3),
//     Product cSyrup = new Product(a, 3),
//     Product wCream = new Product(a, 3),
//     Product cherries = new Product(a, 3),
//     Package brownieSunday = new Package(brownie, vIceCream, cSyrup, wCream, cherries)

// ];

// var arr = [];

// fetch('https://gateway-staging.ncrcloud.com/transaction-document/transaction-documents/20191102-564452-10100006-0', {
//   method: 'GET',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//     'Authorization': 'Basic YWNjdDpyb290QGhhY2tfZm9vZGh1Yjp+K0o8OTYhXX11',
//     'nep-application-key': '8a0384356ddb119e016e2ab8ebf10090',
//     'nep-organization': 'silver-merchant-552518',
//     'nep-service-version': '2:1'
//   },
// }).then((response) => {response.json()
//     console.info(response.json().tlog.items[0].productName)
// })
//     .then((responseJson) => {
//       arr = arr.add(responseJson);
//     })
//     .catch((error) => {
//       console.error(error);
//     });