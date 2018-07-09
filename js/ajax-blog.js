"use strict";

$.ajax('./data/blog.json').done(function(arrayOfBlogPosts){
    addBlogData(arrayOfBlogPosts)
});


function addBlogData(array) {
    var blogPosts = " "

    array.forEach(function(blogPost){
        blogPosts += "<div class=" + "\"jumbotron\"" +">"
        blogPosts += "<h1>" + blogPost.title + "</h1>"
        blogPosts += "<p>" + blogPost.content + "</p>"
        blogPosts += "<p>" + blogPost.categories + "</p>"
        blogPosts += "<p>" + blogPost.date + "</p>"
        blogPosts += "</div>"
    })

    $("#posts").append(blogPosts)};

