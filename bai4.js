function nhap() {
    let a = document.getElementById('st1').value;
    let b = document.getElementById('st2').value;
    let c = document.getElementById('st3').value;
    document.getElementById('rsa').innerHTML = 'a) Chu vi là: ' + (a * 2) + '<br/>' + 'Diện tích là: ' + (a * a);
    document.getElementById('rsb').innerHTML = 'b) Bình phương bằng: ' + (a * a) + '<br/>' + 'Tích a và b bằng: ' + (a * b);

}
function tongday() {
    let a = +document.getElementById('st1').value;
    let b = +document.getElementById('st2').value;
    let s = 0;
    for (i = 1; a <= b; a++) {
        s = s + a;
    }
    document.getElementById('rsc').innerHTML = 'c) Tổng là ' + s;
}
function theky() {
    let a = +document.getElementById('st1').value;
    document.getElementById('rsd').innerHTML = 'd) Thế kỷ ' + (parseInt(a/100) + 1);

}
function test() {
    let a = +document.getElementById('st1').value;
    let b = +document.getElementById('st2').value;
    let c = +document.getElementById('st3').value;
    if ((a + b) > c && (a + c) > b && (b + c) > a) {
        document.getElementById('rsei').innerHTML = 'ei) Là 1 tam giác';
        if (a == b || b == c || c ==a) {
            document.getElementById('rseii').innerHTML = 'eii) Là 1 tam giác cân';
            if (a == b && a == c) {
                document.getElementById('rseiii').innerHTML = 'eiii) Là 1 tam giác đều';
            }
        }
        if ((a*a) == ((b*b)+(c*c)) || (b*b) == ((a*a)+(c*c)) || (c*c) == ((a*a)+(b*b))) {
            document.getElementById('rseiv').innerHTML = 'eiv) Là 1 tam giác vuông';
        }

    }
}