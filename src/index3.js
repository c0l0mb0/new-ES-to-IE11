export let fnn = () => {
    let promise2 = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("result");
        }, 1000);

    });

    promise2.then(
        result => {
            alert("Fulfilledfffffddd: " + result);
        },
        error => {
            alert("Rejected: " + error);
        }
    );
}

