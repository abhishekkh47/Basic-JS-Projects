// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function(){
    // console.log(links.classList);
    // console.log(links.classList.contains('random'));   //print "false"
    // console.log(links.classList.contains('links'));    // print "true"
    // if(links.classList.contains('show-links')) 
    // {
    //     links.classList.remove('show-links');
    // }
    // else 
    // {
    //     links.classList.add("show-links");
    // }

    // the above 14-21 lines of code can be written using toggle function as below
    links.classList.toggle("show-links");
    
});