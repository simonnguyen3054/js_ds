// Write a program that takes a string, and displays the first 'a' character it encounters in it, followed by a newline. 
//'asd' => a
//'masd' => a
//'asda' => a

//If there are no 'a' characters in the string, the program just writes a newline. 
//'sinedef' => newl
//'sad' => a
//'dmjkj' => newline
//start looping from 2




//If the number of parameters is not 1, the program displays 'a' followed by a newline.
//no param => 'a'

function processArg() {
    let str = process.argv[2];

    if (process.argv.length !== 3) {
        return console.log('a');
    }

    let aExisted = false;
    for(let i = 0; i < str.length; i++) {
        if (str[i] === 'a' && aExisted === false) {
            console.log('a');
            aExisted = true;
        }
    }

    //print new line if string has no a
    if(aExisted === false) {
        console.log('');
    }
}

processArg();