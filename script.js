'use strict'
// AULA 1
/*let arr = ['a','b','c','d','e'];

// SLICE
console.log(arr.slice(2)); // corta os dois primeiros
console.log(arr.slice(2,4)); //corta os dois primeiros e o ultimo
console.log(arr.slice(-2)); // pega os dois ultimos
console.log(arr.slice(-1)); // pega o ultimo
console.log(arr.slice(1,-2)); // pega o segundo e o do número da posição menos dois
console.log(arr.slice());

// SPICE
console.log(arr.splice(4))
// CONCAT 
const arr2 = ['f','g','h','i','j'];
console.log(arr.concat(arr2))

// REVERSE
console.log(arr.reverse())

//JOIN
console.log(arr.join('-'))

// AULA 2

// AT
const nome = 'jer'
console.log(nome.at(2))

// AULA 3

// forEach -> basicamente resume o for of 



for (const m of movements){
    if (m>0){
        console.log(`You deposited ${m}`)
    } else{
        console.log(`You withdrew ${Math.abs(m)}`);// withdrew significa retirada
    }
}

console.log('FOR EACH')
movements.forEach(function(m){
    if (m>0){
        console.log(`You deposited ${m}`)
    } else{
        console.log(`You withdrew ${Math.abs(m)}`);// withdrew significa retirada
    }
})

// AULA 4 

// forEach para Maps e Sets

// Map
const eu = new Map([
    ['Eu','Sou lindo'],
    ['Sou','Foda'],
    ['Minha','Pika']
]);

eu.forEach(function(value, key){
    console.log(`${key}: ${value}`)
})
console.log('SET----------------')
// Set
const eu2 = new Set([
    'Eu','Sou lindo',
    'Sou','Foda',
    'Minha','Pika'
]);

eu2.forEach(function(value, key){
    console.log(`${key}: ${value}`)
})
*/
// AULA 7

// Project: Bankist app
const movements = [200,450, -400,3000,-650,-130,70,1300]

const account1 ={
    owner: 'Jerferson Freitas',
    movements: [200,450, -400,3000,-650,-130,70,1300],
    interesRate: 1.2,
    pin: 1111,
};

const account2 ={
    owner: 'Nelson Toddy',
    movements: [240,550, -400,3400,-790,-130,80,-30],
    interesRate: 1.5,
    pin: 2222,
};

const account3 ={
    owner: 'Steve Eleven',
    movements: [400,650, -700,7000,-350,-110,10,1400],
    interesRate: 0.7,
    pin: 3333,
};

const account4 ={
    owner: 'Thomas Willian',
    movements: [700,450, -400,20000,-60,-70,40,1900],
    interesRate: 1.7,
    pin: 4444,
};
const accounts = [account1,account2,account3,account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements){

containerMovements.innerHTML = '';

movements.forEach(function(mov, i ){
   const type = mov > 0 ? 'deposit' : 'withdrawal';

   const html = `
   <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
   `;
   // Esse bloco é responsável por fazer aparecer em ordem os valores na sidebar, ele pega o trecho do html que já existe e esse bloco vai replicar para cada valor que existe no call stack
    containerMovements.insertAdjacentHTML('afterbegin',html)
    // Essa parte pega o container Movements que é onde fica a side bar e injeta o html com os dados
    // o método insertAdjacentHTML é um metodo que representa uma posiçao relativa no elemento
    /*
     - afterbegin 
     - beforenbegin 
     - beforeend
     - afterend
    */
});}
displayMovements(account1.movements)


const calcDisplayBalance = function(movements){
    const balance = movements
    .reduce((acc, mov) => acc +mov,0);
    labelBalance.textContent = `${balance} €`;
};
calcDisplayBalance(account1.movements)

const calcDisplaySummary = function (movements){
    const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc,mov) => acc + mov);
    labelSumIn.textContent = `${incomes}€`;

    const out = movements.filter(mov => mov < 0)
    .reduce((acc,mov) => acc + mov); // accumulator acumula os valores e mov percorre os valores
    labelSumOut.textContent = `${Math.abs(out)}€` // isso remove o sinal de menos

    const interest = movements
    .filter(mov => mov > 0) // mapeia valores maior que zero
    .map(deposit => (deposit * 1.2) / 100) // função da conta de ver o juros
    .filter((int,i,arr) =>{ // filtra números
        return int >= 1; // essa é uma regra que tem em bancos, então o banco só pega juros acima de 1€
    })
    .reduce((acc, int) => acc + int); // accumulator aculua os valores e int vai pagando os proximos valores e somando
    labelSumInterest.textContent = `${interest}€`;
}
calcDisplaySummary(account1.movements)
/// #1 CHALLENGE
 /*
    const checkDogs = function (dogsJulia, dogsKate){
        const dogsJuliaCorrected = dogsJulia.slice();
        console.log(dogsJuliaCorrected)
        dogsJuliaCorrected.splice(0,1) // isso não faz contar o primeiro elemento se deixar o 0 sozinho ele não corta o primeiro.
        dogsJuliaCorrected.splice(-2);
        console.log(dogsJuliaCorrected);
        const dogs = dogsJuliaCorrected.concat(dogsKate);
        console.log(dogs);

        dogs.forEach(function(dog,i){
            if (dog >= 3){
                console.log(`Dog number ${i +1} is an adult, and is ${dog} years old`)
            } else {
                console.log(`Dog number ${i +1} is still a puppy, just ${dog} years`)
            }
        })
    }
    checkDogs([3,5,2,12,17],[4,1,15,8,3])
    */
    // AULA 8 
    // DATA TRANSFORMATION WUITH MAP , FILTER AND RESOURCE 

    // -> MAP 
    // map  returns a new array containing the results of applying an operation of all original array elements

    // -> FILTER 
    // filter returns a new array containing the array elements that passed a specified test condition

    // -> REDUCE 
    // reduce boils ("reduces") all array elements down to one single value (e.g. adding all elements together)
    // EXEMPLE : 3 1 4 3 2 - acc + current = 13 (acc = accumulator)

    // AULA 9
    // the map method 
    /*const movements = [200,450, -400,3000,-650,-130,70,1300];

    const eurToUsd = 1.1;

    const movementUSD = movements.map(function(mov){
        return mov * eurToUsd;
    });

    const movementUSD = movements.map( return mov * eurToUsd;
    });

    console.log(movements);
    console.log(movementUSD);

    const movementsUSDfor = [];
    for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
    console.log(movementsUSDfor)*/
// AULA 10
// Calculando nomes de usuário
const createUsernames = function(accs){
    accs.forEach(function(acc){
        acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join('');
    }) // o que cada metodo faz no código?
    //-> tolowerCase : todas as letras ficam minusculas
    //-> split : remove o espaço entre nomes então por exemplo 'jerferson freitas' vira 'jerferson','freitas'
    //-> map : responsável por mapear e pegar a primeira letra de cada valor(nome) da array
    //-> join :  faz todas as letras ficarem numa coisa só então ná array fica ´j´,'f' vira 'jf'
}
createUsernames(accounts);
console.log(accounts);

btnLogin.addEventListener('click',function(e){
    
    // Prevent form from submittng
    e.preventDefault()
    
    console.log('login')
})

// AULA 11
// THE FILTER METHOD

const deposits = movements.filter(function (mov){
    return mov > 0;
});
console.log(deposits)

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor)

const withdrawals = movements.filter(function(mov){
    return mov < 0;
})
console.log(withdrawals)

// These two methods are doing the same thing and pushinh the same result

// AULA 12
// reduce method
/*
const balance = movements.reduce(function( acc, cur, i, arr){
   // console.log(acc);
   // console.log(cur);
   // console.log(i);
   // console.log(eu);
   console.log(`Interation ${i}: ${acc}`)
    return acc+cur
},0)
console.log(balance)*/
const balance = movements.reduce(( acc, cur) =>
    acc +cur
, 0)
console.log(balance)

let balance2 = 0;
for (const mov of movements)balance2 += mov;
console.log(balance2)

// Maximum value using the reduce
const max = movements.reduce((acc,mov)=>{
    if (acc > mov) return acc;
    else return mov;
});
console.log(max)

// CHALLANGE #2
// PRATICAR MAIS ESSA PARTE MAIS TARDE -> PARTE DO IF RESUMIDO
const calcAverageHumanAge = function(dogAge){
    const humanAge = dogAge.map(age => (age <= 2 ? 2 * age : 16 + age * 4)); // mapeia a array
    console.log(humanAge)
    const adults = humanAge.filter(age=> age >= 18); // filtra a array
    console.log(adults)

    const  average = adults.reduce(
        (acc,age)=> acc + age) / adults.length;

    return average;
}

const avg1 = calcAverageHumanAge([5,2,4,1,15,8,3])
const avg2 = calcAverageHumanAge([16,6,10,5,6,1,4])
console.log(avg1,avg2)


// AULA 13
// The magic of chaining methods

// CHALLEMGE #3
// revisar para entender melhor o conceito do chaining
const calcAverageHumanAge2 = dogAge=>
    dogAge
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age=> age >= 18)
    .reduce((acc,age,i,arr)=> acc + age / arr.length);

const avg1tt = calcAverageHumanAge2([5,2,4,1,15,8,3])
const avg2tt = calcAverageHumanAge2([16,6,10,5,6,1,4])
console.log(avg1tt,avg2tt)

// AULA 14
// The find method
const firstWithdrawal = movements.find(mov => mov <0)
console.log(firstWithdrawal)