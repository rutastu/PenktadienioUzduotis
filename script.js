console.log("1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)")

function compareNumbers (a, b) {
    if (a > b) {
     console.log(`Skaičius ${a} yra didesnis už skaičių ${b}.`)
    } else if (b > a) {
     console.log(`Skaičius ${b} yra didesnis už skaičių ${a}.`)
    } else {
     console.log(`Pateikti skaičiai yra lygūs.`)
    }
}

//Patikrinimas:

compareNumbers(1, 2);
compareNumbers(2, 2);
compareNumbers(2, 1);

console.log('\n2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)')

let c = 0;

for (let i = 0; i < 10; i++) {
    c++;
    console.log(c)
 }

console.log("\n3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)")


for (let i = 0; i <= 10; i += 2) {
    console.log(i);
  }

console.log("\n4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)")

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

for (let i = 0; i < 5; i++) {
    let d = rand(1, 10);
    console.log(d);
}

console.log('\n5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)')

let e = 0;

while (e !== 5) {
    e = rand(1, 10);
    console.log(e);
}

console.log("\n6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)")

let newArrayLength = rand(20, 30);
let newArray = [];

for (let i = 0; i < newArrayLength; i++) {
    newArray.push(rand(10, 30))
}

console.log(`Sukurtas masyvas: ${newArray}.`)

let biggestValue = newArray[0];

for (let i = 1; i < newArray.length; i++) {
    if (newArray[i] > biggestValue) {
        biggestValue = newArray[i];
    }
}

console.log(`Dižiausia masyvo reikšmė: ${biggestValue}.`)


console.log("\n7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)")

let letters = 'ABCD';
let arrayABCD = [];
let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;

for(let i = 0; i < 100; i++) {
    arrayABCD.push(letters[rand(0, 3)])
    if (arrayABCD[i] === 'A') {
        countA++;
    }
    else if (arrayABCD[i] === 'B') {
        countB++;
    }
    else if (arrayABCD[i] === 'C') {
        countC++;
    }
    else {
        countD++;
    }
}

console.log(`Sugeneruotas masyvas: ${arrayABCD}.`)

console.log(`Raidžių A masyve yra ${countA}.`)
console.log(`Raidžių B masyve yra ${countB}.`)
console.log(`Raidžių C masyve yra ${countC}.`)
console.log(`Raidžių D masyve yra ${countD}.`)

console.log("\n8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas). \nJei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)")

function lygineSuma(f, g) {
    if (typeof f !== typeof g) {
        return "Abiejų kintamųjų tipai turi sutapti."
    } else if (typeof f === 'number' && (f + g) % 2 === 0) {
        return `Skaičių suma yra ${f + g}.`; 
    } else if (typeof f === 'number' && (f + g) % 2 !== 0) {
        return "Skaičių suma yra nelyginė."; 
    } else if (Array.isArray(f) && (f.length + g.length) % 2 ===0) {
        return (`Masyvų ilgių suma yra ${f.length + g.length}.`);
    } else if (Array.isArray(f) && (f.length + g.length) % 2 !==0) {
        return "Masyvų ilgių suma yra nelyginė.";
    }
}


//Tikrinimas
 console.log(lygineSuma([0, 1], 5));
 console.log(lygineSuma([0, 1], [0, 1]));
 console.log(lygineSuma([0, 1], [0, 1, 2]));
 console.log(lygineSuma(5, 5));
 console.log(lygineSuma(5, 6));


console.log("\n9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)")

function pirminisSkaicius (h) {
    if (typeof h !== 'number' || Number.isInteger(h) !== true) {
        return "Funkcijai turi būti pateiktas sveikasis skaičius"
    }
    else if (h <= 1) {
        return "Skaičius nėra pirminis" 
    }
    for (let i = 2; i <= Math.sqrt(h); i++) {
    if (h % i === 0) {
    return "Skaičius nėra pirminis";
    } else {
        return "Skaičius yra pirminis"
    }
}
}

//Patikrinimas
console.log(pirminisSkaicius(5.5))
console.log(pirminisSkaicius(10))
console.log(pirminisSkaicius(1))
console.log(pirminisSkaicius(13))
console.log(pirminisSkaicius([13,1]))

console.log("\n10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - \"\(XXX) XXX-XXXX\"\. (10 taškų)")

function telefonoNumeris(j) {
    if (Array.isArray(j) && j.every(value => typeof value === 'number') && j.length === 10) {
        const firstPart = j.slice(0, 3).join('');
        const secondPart = j.slice(3, 6).join('');
        const thirdPart = j.slice(6).join('');
        
        return `(${firstPart}) ${secondPart}-${thirdPart}`
    } else {
        return "Nurodytas argumentas neatitinka sąlygos"
    }
}

//Patikrinimas
console.log(telefonoNumeris([6, 2, 3, 4, 5, 8, 4, 7, 1, 9]))
console.log(telefonoNumeris([3, 2]))
console.log(telefonoNumeris(5))
console.log(telefonoNumeris([3, "word"]))
