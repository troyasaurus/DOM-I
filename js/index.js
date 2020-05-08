

//just started

const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

//Images--------------------------------------
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])
//Images closed -------------------------------




//Nav----------------------------------------
const nav = document.querySelectorAll('nav a')

nav.forEach(element => element.style.color = 'green');

nav[0].textContent = siteContent.nav["nav-item-1"];
nav[1].textContent = siteContent.nav["nav-item-2"];
nav[2].textContent = siteContent.nav["nav-item-3"];
nav[3].textContent = siteContent.nav["nav-item-4"];
nav[4].textContent = siteContent.nav["nav-item-5"];
nav[5].textContent = siteContent.nav["nav-item-6"];

const newNav = document.querySelector("nav");
const newNav1 = document.createElement('a')
newNav1.textContent = "Home";
newNav1.href = "#";
newNav1.style.color = 'green'; 

newNav.prepend(newNav1);

const newNav2 = document.createElement('a')
newNav2.textContent = "More";
newNav2.href = "#";
newNav2.style.color = 'green'; 

newNav.append(newNav2);

//Nav----------------------------------------

//cta----------------------------------------
//cta----------------------------------------

//main-content-------------------------------
//main-content-------------------------------

//contact------------------------------------
const call = document.querySelectorAll('.contact h4')
call[0].textContent = siteContent.contact['contact-h4'];


const call1 = document.querySelectorAll('.contact p')
call1[1].innerHTML = siteContent.contact['address'];
call1[2].textContent = siteContent.contact['phone'];
call1[3].textContent = siteContent.contact['email'];


//I tried to get this to work, but for some reason it would not. So I made a second nav
// ------------------------------------------------------------
// const newContact = document.querySelectorAll('.contact p');
// const newContact1 = document.createElement('p')
// newContact1.textContent = 'Call Me!!';


// newContact.prepend(newContact1);
//contact------------------------------------//


//footer-------------------------------------//
//footer-------------------------------------//