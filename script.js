document.querySelector('button').onclick = function () {
let out = document.querySelector('#result');
let Num1 = +document.querySelector('#num1').value;
let Num2 = +document.querySelector('#num2').value;


if (Num1 > Num2) {
    out.innerHTML = Num1 + ' больше чем' + Num2;
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