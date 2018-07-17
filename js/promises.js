'use strict';

//Youtube video 'PROMISES' practice: https://www.youtube.com/watch?v=PoRJizFvM7s


// const posts = [
//     { title: 'Post One', body: 'This is post one'},
//     { title: 'Post Two', body: 'This is post two'}
//
// ];
//
// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) =>{
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//
//     }, 2000);
// }
// function createPost(post, callback){
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000);
// }
//
// createPost({ title: 'Post Three', body: 'This is post three'}, getPosts);


//Exercise 1

// function wait(number) {
//     const promise = new Promise((resolve => {
//         setTimeout(() => {
//             resolve();
//         }, number);
//     }));
//     promise.then(() => console.log(`You'll see this after ${number/1000} seconds.`));
//     promise.catch(() => console.log('rejected'));
//     return promise;
// }

// const wait = (num) =>{
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             resolve();
//         },num);
//     });
// };
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
//
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



//Exercise 2



// fetch(url, {headers: {'Authorization': 'token 436db6c9753484ce89ecb5553c7a5671f99c9487'}})

const lastCommit = (username) => {

    const token =

    //fetching JSON object from github with the passed in username
    fetch(`https://api.github.com/users/${username}/events/public`, {
        headers: {
            'Authorization': 'token d50b37ee63cd9a8907432c2845e1f9c4b5482ba4'
        }

        //if promise resolves - turn the response into response.json to dig into the object
    }).then(response => response.json()

    //dig deeper into object to return last commit data and log the string below
        .then(data => {
            console.log(`${username}'s last commit was made on ${data[0].created_at.substring(0,10)}`)

            //if promise rejects - log the error 'BAD REQUEST'
        })).catch(() => console.error("BAD REQUEST"))};


// const getLastEvent = (username) => {
//     const token = d50b37ee63cd9a8907432c2845e1f9c4b5482ba4;
//     const url =`https://api.github.com/users/${username}/events/public`
//     fetch(url, {headers: {'Authorization': `token ${token}`}});
//
// };
// getLastEvent("jillianwysoki").then((data) => {
//     console.log(data);
// });

