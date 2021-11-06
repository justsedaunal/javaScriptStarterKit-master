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

console.log(findPrime(1, 5, 2, 8))