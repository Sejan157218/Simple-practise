/*
function celsiusToFahrenheit(celsius){
    let Fahrenheit = celsius * 33.8
    return Fahrenheit
}

let  celsius = celsiusToFahrenheit(5)
console.log(celsius ,'celsius')
*/

/*
function celsiusToFahrenheit(celsius){
    let Fahrenheit = celsius / 33.8
    return Fahrenheit
}

let  celsius = celsiusToFahrenheit(169)
console.log(celsius ,'Fahrenheit')
*/

/*
function marks(mark){
    if (mark>=33 && mark <40){
        return 'Your grad is (D)'
    }
    else if (mark>=40 && mark <50){
        return 'Your grad is (C)'
    }
    else if (mark>=50 && mark <60){
        return 'Your grad is (B-)'
    }
    else if (mark>=60 && mark <70){
        return 'Your grad is (B+)'
    }
    else if (mark>=70 && mark <80){
        return 'Your grad is (A-)'
    }
    else if (mark>=80 && mark <90){
        return 'Your grad is (A+)'
    }
    else if (mark>=90 && mark <=100){
        return 'Your grad is (A++)'
    }
    else{
        return 'You are Failed'
    }
}

let myMarks = marks(100)
console.log(myMarks)
*/

/*
function marks(mark){
    switch (true){
        case mark>=33 && mark<40:
            return 'Your grad is (D)';
            break
        case mark>=40 && mark<50:
            return 'Your grad is (C)';
            break
        case mark>=50 && mark<60:
            return 'Your grad is (B-)';
            break            
        case mark>=60 && mark<70:
            return 'Your grad is (B+)';
            break            
        case mark>=73 && mark<80:
            return 'Your grad is (A-)';
            break            
        case mark>=80 && mark<90:
            return 'Your grad is (A+)';
            break
        case mark>=90 && mark<=100:
            return 'Your grad is (A++)';
            break         
        default:
            return 'Your are Failed'
    }
}

let myMarks = marks(60);
console.log(myMarks)
*/

/*
function sud(muldon,somoy,sudhar){
    let sud = (muldon *somoy* sudhar)
    return sud
}
let muldon = 600
let somoy = 2
let sudhar =9.5/100
let tatalSud = sud(muldon,somoy,sudhar)
console.log(tatalSud ,'tk')
*/