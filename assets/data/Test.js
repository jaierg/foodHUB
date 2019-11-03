// import React, {Component} from 'react';

// class ApiTest extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//           items: [],
//         };
//       }

    // componentDidMount() {
    //     fetch('https://gateway-staging.ncrcloud.com/transaction-document/transaction-documents/20191102-564452-10100006-0', {
    //         method: 'GET',
    //         headers: {
    //           'Accept': 'application/json',
    //           'Content-Type': 'application/json',
    //           'Authorization': 'Basic YWNjdDpyb290QGhhY2tfZm9vZGh1Yjp+K0o8OTYhXX11',
    //           'nep-application-key': '8a0384356ddb119e016e2ab8ebf10090',
    //           'nep-organization': 'silver-merchant-552518',
    //           'nep-service-version': '2:1'
    //         },
    //     }).then(res => res.json())
    // .then(data) => this.setState({items: data}));
    //         // .catch(console.log);
    // }

//     componentDidMount(){
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then(response => response.json())
//         .then((responseJson)=> {
//           this.setState({
//            items: JSON.stringify(responseJson)
//           })
//         })
//         .catch(error=>console.log(error))
//         }
// }

// export default ApiTest;
// module.exports.arr = JSON.parse(this.state.items[0]);