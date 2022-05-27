//l'asserzione di tipo consente di impostare il tipo di un valore e di dire al compilatore di non inferirlo. Serve al programmatore per avere una maggior comprensione sul tipo di dato
let code:any = 123

let employeeCode = <number> code

console.log(typeof employeeCode)