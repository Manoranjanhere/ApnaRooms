//destructuring using object
const person={name: "Manoranjan"}
const a =person.name;
console.log(a)

const all = {na: 'Exam on sat'}
const {na} =all;
console.log(na)

const market ={stock:'quantity',price:'30'}
const{stock,price}=market;
console.log(stock,price)

const game ={play: 'palyer1', play2 : 'player2',play3: 'player 3'}
const{play}=game;
console.log(play)

const din =['1din', '2din'];
const[item1,item2]=din;
console.log(item1,item2);
