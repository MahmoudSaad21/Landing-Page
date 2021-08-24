/**
 * Define Global Variables
 * 
 */
const sections = document.querySelectorAll("section");
const btt = document.querySelector("ul");
const html = document.querySelector("html");
html.style.scrollBehavior = 'smooth';
/**
 * End Global Variables
 *start adding the elements to the ul 
 */
sections.forEach((ele, ind, arr) => {
    var a = document.createElement("a");
    const newele = document.createElement("li");


    a.classList.add("menu__link");

    newele.textContent = "section" + (ind + 1);
    /*add the text to evry link */
    a.appendChild(newele);
    a.style.display = "inline-block";
    /*set a title and harf for evrylink  */
    a.title = "section" + (ind + 1);
    a.href = "#section" + (ind + 1);
    /**add evrylink to the ul using appendChild */
    btt.appendChild(a);

});
/**add the ul to the body in the top of it */
document.body.insertAdjacentHTML('beforeBegin', btt);
/**create a element to save the links in */
var linkcolor = document.querySelectorAll("li");
/**create a element options to passed into the IntersectionObserver() constructor let you control
   the circumstances under which the observer's callback is invoked
 */
let options = { root: null, rootMargin: "0px", threshold: 0.5 };
/**
    * Create the intersection obser by calling options and a function
     entries parameter are delivering an IntersectionObserver callback to the
    * obser the is a is a method that defined in the end o the file
    * and the options 
    */
const obser = new IntersectionObserver(function(entries, obser) {
        /**
         * it would loop on evry entry in the entries 
         */
        entries.forEach(entry => {
            /**a condition to see is the entry is intersection
               and it boolean if entry.isintersection was fales then it it would return 
               else if it was true the code would continue 
             */
            if (!entry.isIntersecting) {
                return;
            }
            /**
             * condation to see if the viewpoint section id is equal
               to the id section1 
             */
            if (entry.target.id === "section1") {
                /**
                 * the code below would return back all links backgroundColor
                   to an empty valou
                 */
                linkcolor.forEach((ele, ind, arr) => {
                    linkcolor[ind].style.backgroundColor = "";
                });
                /**
                   * the code below would remove all class that have name your-active-class
                     from the sections 
                   */
                sections.forEach((ele, ind, arr) => {
                    if (ele.classList.contains("your-active-class")) {
                        ele.classList.remove("your-active-class");
                    }
                });
                /**
                 * the code below would:
                  - set the first link backgroundColor to the color: blue
                  -add to the section in the viewpoint the class your-active-class
                 * 
                 */
                entry.target.classList.add("your-active-class");
                linkcolor[0].style.backgroundColor = "blue";

            }
            if (entry.target.id === "section2") {
                linkcolor.forEach((ele, ind, arr) => {
                    linkcolor[ind].style.backgroundColor = "";
                });
                sections.forEach((ele, ind, arr) => {
                    if (ele.classList.contains("your-active-class")) {
                        ele.classList.remove("your-active-class");
                    }
                });
                entry.target.classList.add("your-active-class");
                linkcolor[1].style.backgroundColor = "blue";
            }
            if (entry.target.id === "section3") {
                linkcolor.forEach((ele, ind, arr) => {
                    linkcolor[ind].style.backgroundColor = "";
                })
                sections.forEach((ele, ind, arr) => {
                    if (ele.classList.contains("your-active-class")) {
                        ele.classList.remove("your-active-class");
                    }
                });
                entry.target.classList.add("your-active-class");
                linkcolor[2].style.backgroundColor = "blue";
            }
            if (entry.target.id === "section4") {
                linkcolor.forEach((ele, ind, arr) => {
                    linkcolor[ind].style.backgroundColor = "";
                })
                sections.forEach((ele, ind, arr) => {
                    if (ele.classList.contains("your-active-class")) {
                        ele.classList.remove("your-active-class");
                    }
                });
                entry.target.classList.add("your-active-class");
                linkcolor[3].style.backgroundColor = "blue";
            }
        });
    },
    options);
/**
 * This method adds an element to the set of target elements being watched
    by the IntersectionObserver.
 */
sections.forEach(section => {
    obser.observe(section)
});