
// function wait (aNumber) {
//
//     // take aNumber, then set a timeout to resolve itself
//     // if successful (resolve)
//     // if unsuccessful (reject)
//
// }
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

const myPromise = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve();
    } else {
        reject();
    }
});

myPromise.then(() => console.log('resolved!'));
myPromise.catch(() => console.log('rejected!'));