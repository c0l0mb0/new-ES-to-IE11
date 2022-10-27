import {fnn} from "./index3";

class NNN {
    test = 'dog'
};

let nm = new NNN();
console.log(nm.test);

let promise = new Promise((resolve, reject) => {

    setTimeout(() => {

        resolve("result");
    }, 1000);

});

promise
    .then(
        result => {
            alert("Fulfilledfffffddd: " + result);
        },
        error => {
            alert("Rejected: " + error);
        }
    );


fnn();