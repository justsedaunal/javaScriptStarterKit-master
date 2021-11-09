// JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
//Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. 
//(Araştırma konusu : şart blokları : if )

// Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)

function findPrime(...numbers) {

    let result = []

    numbers.forEach(number => {
        if (primeNumber(number)) {

            result.push("asal : " + number)

        }
        else {
            result.push("asal değil : " + number)
        }



    });

    return result


}

function primeNumber(number) {
    if (number === 1) {
        return false

    }

    else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false

            }
        }
        return true
    }


}

console.log(findPrime(13, 5, 2, 8))

//----------------------------------------------------------------------

// Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. 
//(Arkadaş sayılar için google)


function isFriendNumber(number1, number2) {
    let total1 = 0
    let total2 = 0



    for (let i = 1; i < number1; i++) {
        if (number1 % i == 0) {
            total1 = total1 + i
        }

    }

    for (let i = 1; i < number2; i++) {
        if (number2 % i == 0) {
            total2 = total2 + i
        }
    }
    if (number1 == total2 && number2 == total1) {
        console.log("Bu sayılar arkadaş sayılardır")

    }
    else {
        console.log("Bu sayılar arkadaş sayılar değildir.")
    }



}
//isFriendNumber (220,284)

//-----------------------------------------------------------

//1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

function is_perfect() {
    for (let i = 1; i <= 1000; i++) {

        let temp = 0;
        for (let j = 0; j < i; j++) {

            if (i % j == 0) {
                temp += j;
            }
        }

        if (i == temp) {
            console.log(i + "It is a perfect number.");
        }
        else {
            console.log("It is not a perfect number.");
        }

    }

}
is_perfect();



//1000'e kadarki tüm asal sayıları listeleyen programı yazınız.


function listOfPrimes (){
    for (let i = 2;   i< 1000;  i++) {
if (primeNumber(i)==true) {
    console.log(i+ " asal sayısı")
    
}        
    }
}
listOfPrimes()















