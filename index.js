// Bài 1
//
// let n1 = 0, n2 = 1, nextTerm, sum = 0;
// for (let i = 1; i <= 6; i++) {
//     sum += n1;
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }
// alert(sum);

// Bài 2
// let x = +prompt('Nhập số nguyên dương');
// let sum = 1;
// for (let i = 1; i <= x; i++) {
//     sum = sum * i
// }
// alert(sum)

// Bài 3
// let x = +prompt('Nhập 1 số');
// let sum = '';
// for (i = 1; i <= x; i++) {
//     sum += '*'
//     document.write(sum)
//     document.write('<br>')
// }

// let x = +prompt('Nhập 1 số')
// for (let i = x; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//         document.write('*')
//     }
//     document.write('<br>')
// }

// let x = +prompt('Nhập 1 số')
// for (let i = x, b = 0; i >= 1, b <= x; i--, b++) {
//     for (let j = 0; j <= i - 1; j++) {
//         document.write('&nbsp&nbsp');
//     }
//     for (let a = 1; a <= b + 1; a++) {
//         document.write('*')
//     }
//     document.write('<br>')
// }

// let x = +prompt('Nhập 1 số')
// for (let i = x, b = 0; i >= 1, b <= x - 1; i--, b++) {
//     for (let j = 0; j <= b; j++) {
//         document.write('&nbsp&nbsp');
//     }
//     for (let a = i; a >= 1; a--) {
//         document.write('*')
//     }
//     document.write('<br>')
// }

// Bài 4
// for (let i = 1; i <=10 ; i++) {
//     for (let j = 1; j <= 40; j++) {
//         if (i===1 || i === 10 || j ===1 || j === 40){
//             document.write("*");
//         } else {
//             document.write("&#160&#160");
//         }
//     }
//     document.write("<br>")
// }

// Bài 5
// function calc() {
//     let tiengui = +document.getElementById('tienGui').value;
//     let sothang = +document.getElementById('soThang').value;
//     let laisuat = +document.getElementById('laiSuat').value;
//     for (let i = 1; i <= sothang; i++) {
//         tiengui += tiengui * laisuat / 100;
//     }
//     document.getElementById('result').innerHTML = 'Result : ' + tiengui;
// }



