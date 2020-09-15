$(document).ready( function() {
    var arrayscreen = [];
    var arraycal = [];
    $(":button").click(function() {
        let x = $(this).val();
        if (!isNaN(x)) {
            arrayscreen.push(x);
            $('#screen').value = "";
            $('#screen').val(Number(arrayscreen.join('')));
        }
        if (x == '.') {
            if (arrayscreen.every(e => e !== ".")) {
            arrayscreen.push(x);
            $('#screen').value = "";
            $('#screen').val(Number(arrayscreen.join('')));
            }
        }
        if (x == 'ac') {
            arrayscreen = [];
            arraycal = [];
            $('#screen').value = "";
            $('#screen').val(0);
        }
        if (x == 'c') {
            arrayscreen.pop(arrayscreen[arrayscreen.length-1]);
            if (!isNaN(arraycal[arraycal.length-1])) {
                arraycal.pop(arraycal[arraycal.length-1]);
            };
            if (isNaN($('#screen').val())) {arraycal.pop(arraycal[arraycal.length-1])}; 
            $('#screen').value = "";
            $('#screen').val(Number(arrayscreen.join('')));
            //console.log(arraycal.join(' '));
            //console.log(arrayscreen);
        }
        if (x == '+') {
            $('#screen').value = "";
            $('#screen').val('+');
            if (Number(arrayscreen.join('')) !== 0) {
                arraycal.push(Number(arrayscreen.join('')));
            };
            arraycal.push($('#screen').val());
            arrayscreen = [];
        }
        if (x == '-') {
            $('#screen').value = "";
            $('#screen').val('-');
            if (Number(arrayscreen.join('')) !== 0) {
                arraycal.push(Number(arrayscreen.join('')));
            };
            arraycal.push($('#screen').val());
            arrayscreen = [];
        }
        if (x == '*') {
            $('#screen').value = "";
            $('#screen').val('x');
            if (Number(arrayscreen.join('')) !== 0) {
                arraycal.push(Number(arrayscreen.join('')));
            };
            arraycal.push('*');
            arrayscreen = [];
        }
        if (x == '/') {
            $('#screen').value = "";
            $('#screen').val(':');
            if (Number(arrayscreen.join('')) !== 0) {
                arraycal.push(Number(arrayscreen.join('')));
            };
            arraycal.push('/');
            arrayscreen = [];
        }
        if (x == '%') {
            $('#screen').value = "";
            $('#screen').val('%');
            if (Number(arrayscreen.join('')) !== 0) {
                arraycal.push(Number(arrayscreen.join('')));
            };
            arraycal.push('*100/');
            arrayscreen = [];
        }
        if (x == '=') {
            $('#screen').value = "";
            arraycal.push(Number(arrayscreen.join('')));
            var n = eval(arraycal.join(' '));
            $('#screen').val(parseFloat(n.toFixed(10)));
            arrayscreen = [n];
            arraycal = [];
        }
    })
});