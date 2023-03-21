let books=[
    {
        title:"intro to js",
        author:"markoff",
        price:35,
        inventory:20

    },
    {
        title:"intro to php",
        author:"dumaki",
        price:325,
        inventory:19
    },
    {
        title:"intro to c",
        author:"marko",
        price:19,
        inventory:2
    },
    {
        title:"intro to c#",
        author:"danMark",
        price:15,
        inventory:10
    },
    {
        title:"intro to python",
        author:"Dan",
        price:5,
        inventory:0
    }
]
const reducer=(accumulator,item)=>{
    console.log(accumulator,item)
    let total =item.price*item.inventory
    return accumulator +=total
}
let total= books.reduce(reducer,0)
console.log(total)