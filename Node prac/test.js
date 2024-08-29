// const user = "Hi i am user"
// console.log(user);
// var age = 20;
// console.log(age)
// const file=require('fs');
// file.writeFileSync('another.txt','hello there')
// function display(num1,num2)
// {
//     return "Sum of "+num1+" + "+num2+" = "+ (num1+num2);
// }
// console.log(display(5,6))
// function test() {
//     var name = "Manoranjan";
//     console.log(name);
//     var name ="Mano";
//     console.log(name+name+name+name)
// }
// test();
// let n="hi"
//  n="hello"
// console.log(n);
// function letscope()
// {
//     let x="Mano";
//     if(true)
//     {
//         let x=2;
//         console.log(x);
//     }
//     console.log(x)
// }
// letscope();
// function varscope()
// {
//     var x="Mano";
//     if(true)
//     {
//         var x=2;
//         console.log(x);
//     }
//     console.log(x)
// }
// varscope();

// const don1 = function mul(a,b)
// {
//     return a*b;
// }
// console.log(don1(2,3));
// const don2 =(a,b)=>a*b
// console.log(don2(4,8));
// const don3 =(a,b)=>
// {
//     return a*b
// }
// console.log(don3(9,8));


// const plus5= x=>x+5;
// console.log(plus5(5));

//object
// const person=
// {
//     animal: "cat",
//     life: "5",
//     msg:function()
//     {
//         console.log('this animal is a '+this.animal)
//         console.log('this animal life is '+this.life)
        
//     }
// }
// person.msg();
// const person1=
// {
//     animal: "cat",
//     life: "5",
//     msg: () =>{
//         console.log('this animal is a '+this.animal)
//         console.log('this animal life is '+this.life)
        
//     }
// }
// person1.msg();

// const topics=['India','370','feminism'];
// for(const names of topics)
// {
//     console.log(names);
// }

// const topics2=['India','370','feminism'];
// console.log(topics2.map(topics2=>'prepare: '+topics))

// const taste =['sweet','sour']
// taste.push('bitter');
// console.log(taste);

// const lpu = {dep:'cse'}
// lpu.dep='IT';
// console.log(lpu)

// spread and rest

// const item1=['idly','dosa'];
// const item2=[...item1];
// item2.push('halwa');
// console.log(item1);
// console.log(item2);

const item3=['idly','dosa'];
item3.push('halwa');
const item4=[...item3];
console.log(item3);
console.log(item4);

//rest

const items =(itm1,itm2,itm3)=>{
    return [itm1,itm2,itm3];
}
console.log(items(1,2,3))

const items4 =(...itms)=>{
    return itms;
}
console.log(items4(1,2,3,4,5))