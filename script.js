function area( a, b) {
    console.log(a * b);
}
area(3, 4);

const showMyInfo = (myName, age) => {
    if(myName !== '' || myName !== null);
    return 'Мое имя: ' + myName + '. ' + 'Мой возраст: ' + age;
}
console.log(showMyInfo('Анна', 33));

function number(x, y) {
    c = x % 2;
    d = y % 2;
    let add = 0;
    let even = 1;
    if (c === add && d === add) {
        console.log(x * y);
    }   else if (c === even && d === even) {
        console.log(x + y);
    }   else if (c === even && d === add) {
        console.log(x);
    }   else (console.log(y));
}
number(3, 5);

function getTidyClothes(color, powder) {
    if (color === 'black') {
        console.log('Я стираю черное белье порошком ' + powder + '.');
    }   else if ( color === 'white') {
        console.log('Я стираю белое белье с поршком ' + powder + '.');
    }   else (console.log('Я стираю цветное белье.'))
}
getTidyClothes('white', 'Tide');

let nombers = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 6 ,7, 8, 9, 10];
function mussive (arr) {
for (i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            function cube (arr){
                let gg = arr * 2;
                console.log(gg);
            }
        }
        cube(arr[i]);
    }
}
mussive(nombers);