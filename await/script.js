// console.log('person1: shows ticket');
// console.log('person2: shows ticket');



// const promisewifeBringingTricks=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('ticket');
//     },3000)
// });



// const getPopcorn=promisewifeBringingTricks.then((t)=>{
//     console.log('wife:i have the tics');
//     console.log('husband:we should go in');
//     console.log('wife:no i am hungry');
//     return new Promise((resolve,reject)=>resolve(`${t} popcorn`));
// });



// const getButter=getPopcorn.then((t)=>{
//     console.log('husband:i got some popcorn');
//     console.log('husband:we should go in');
//     console.log('wife:no i need butter on my popcorn');
//     return new Promise((resolve,reject)=>resolve(`${t} butter`));
// });

// const getColdDrinks=getButter.then((t)=>{
//     console.log('husband:i got some butter popcorn');
//     console.log('husband:we should go in');
//     console.log('wife:no i need colddrinks');
//     return new Promise((resolve,reject)=>resolve(`${t} colddrinks`));

// })


// getColdDrinks.then((t)=>console.log(t));
//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------


console.log("person1: shows ticket");
console.log("person2: shows ticket");


// const preMovie= async () => 'premovie';//async function expression
// preMovie().then((m)=>console.log(m));//as async function return promise we have to use then




const preMovie= async () => {

const promisewifeBringingTricks=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket');
        },3000)
    });
   const getPopcorn=new Promise((resolve,reject)=> resolve(`popcorn`));
   const addButter=new Promise((resolve,reject)=> resolve(`Butter`));
   const addColdDrinks=new Promise((resolve,reject)=> resolve(`colddrinks`));



   let ticket = await promisewifeBringingTricks;//await can be used only inside async function body

    console.log(`wife:i have the ${ticket}`);
    console.log('husband:we should go in');
    console.log('wife:no i am hungry');

let popcorn=await getPopcorn;

    console.log(`husband:i got some ${popcorn}`);
    console.log('husband:we should go in');
    console.log('wife:no i need butter on my popcorn');

    let butter=await addButter;
    
    console.log(`husband:i got some ${butter} popcorn`);
    console.log('husband:we should go in');
    console.log('wife:no i need colddrinks');

let colddrinks=await addColdDrinks;
    console.log(`husband:i got ${colddrinks}`);
    console.log('husband:anything else dear??');
    console.log('wife:Enough for now lets go in ');
    console.log('husband:Oh great !! come on ');



    

return ticket;//this whole asyc function return the promise which is nothing but ticket

}
preMovie().then((m)=>console.log(`person 3 :shows${m}`))
console.log("person4: shows ticket")
console.log("person5: shows ticket")





