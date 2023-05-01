const num = "3216547783251365841";

function fakeBinary(string) {
    let fBinary = "";
    for (let i = 0; i < string.length; i++) {
        // if i is less than 5, replace with 0
        if (string[i] < 5) {
            fBinary += 0;
        } else {
            fBinary += 1;
        }
    }
    // return statement here
    console.log(fBinary);
}

fakeBinary(num);