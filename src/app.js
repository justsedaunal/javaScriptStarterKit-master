//console.log("Merhaba Kodlama.io")

//type safe değildir!!
let dolarBugun = 9.30


let  dolarDun = 9.20

{
let dolarDun = 9.10

}
//console.log (dolarDun)

const euroDun = 11.2
//bunu yapamıyoruz hata veriyor
//euroDun = 11

//console.log(euroDun)


//camelCasing
//PascalCasing
let konutKredileri = ["Konut kredisi", "Emlak konut kredisi","Kamu konut kredisi"]
//console.log("<ul>")

    for (let i = 0; i < 3; i++) {
           //console.log ("<li>" + konutKredileri[i] + "</li>")
        
    }


("</ul>")

//rest parameter...arrayleri birleştirir
let showProducts = function (id,...products){
    //console.log(id)
 // console.log(products[0])
}
//console.log(typeof showProducts)
//showProducts(10,["Elma","Armut","Karpuz"])



//spread parameter== arrayleri birbirinden ayırır
let points = [1,2,4,40,60]
//console.log(...points)
//console.log(Math.max(...points))//console.log(Math.max([1,2,4,40,60])) == NaN verir bana bir numara göndermedin demek istiyor.
//console.log(..."ABC","D",..."EFG","H")



//Destructuring==elimizdeki arraylerin değerlerini değişkenlere atama
let populations = [10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh,maximum]] = populations 
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)


function someFunction([small1],number) {
    console.log(small1)
    
}
someFunction (populations) 

let category = {id:1,name:"içecek"}
console.log(category.id)
console.log( category["name"])

let {id,name} = category
console.log(id)
console.log("name")









 