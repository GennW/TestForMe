document.querySelector('button').onclick = function () {
let out = document.querySelector('#result');
let Num1 = +document.querySelector('#num1').value;
let Num2 = +document.querySelector('#num2').value;


if (Num1 > Num2) {
    out.innerHTML = Num1 + ' больше чем ' + Num2;
}
else if (Num1 < Num2) {
    out.innerHTML = Num2 + ' больше чем ' + Num1;
}
// здесь надо придумать условие если вводят на число
// else if ((Num1.value||Num2.value)!=)
else {
    out.innerHTML = 'равны'
}
}
// Циклы Loops
let outLoops = document.querySelector('.outLoops');
console.log(outLoops);
    
    for (let i = 0; i < 5; i++) {
        outLoops.innerHTML += '*1 '
    }

    // таблица умножения
    let table1 = document.querySelector('#table1');
    console.log(table1);

    // через условие и конкатенацию
    // for(let i = 1; i <= 9; i++) {
    //     for(let k = 1; k < 10; k++) {
    //     table1.innerHTML += i + '*' + k + '=' + (i*k) + '</br>';
    //     }
    //     table1.innerHTML += '<hr>'
    // }
    // через интерполяцию
    for(let i = 1; i <= 10; i++) {
        for(let k = 1; k <= 10; k++) {
            table1.innerHTML += `${i}*${k}=${i * k}</br>`
        }
        table1.innerHTML += '<hr>'
        table1.innerHTML += '<hr>'

    }