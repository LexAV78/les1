let step = 0;
function fnFib(a1, a2, index) {
    let b = a1 + a2;
    console.log(b);
    if (step < index - 2) {
        step += 1;
        fnFib(a2, b, index);
    } else {
        console.log('res', b);
        return 0;
    }
}
fnFib(0, 1, 40);
console.log(arguments.callee.toString())
