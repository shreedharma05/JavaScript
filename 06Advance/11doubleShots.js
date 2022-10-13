const google = "google"
const faceBook = null //null and 0 are not false but falsy values

// statement 1 
if (google) {
    console.log("Statement 1 is correct");
}

// statement 2
if (faceBook) {
    console.log("Statement 2 is correct");
} else { 
    console.log("Statement 2 is incorrect")
}

// statement 3
if (!!faceBook) {
    console.log("Statement 3 is correct");
} else {
    console.log("Statement 3 is incorrect");
}

// !! => doubleshots
// statement 3 >> statement 2
