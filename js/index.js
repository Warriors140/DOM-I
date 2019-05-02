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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

console.log(document);

const features = document.querySelectorAll('.text-content h4');
features[0].textContent = siteContent['main-content']['features-h4'];
features[1].textContent = siteContent['main-content']['about-h4'];
features[2].textContent = siteContent['main-content']['services-h4'];
features[3].textContent = siteContent['main-content']['product-h4'];
features[4].textContent = siteContent['main-content']['vision-h4'];

const content = document.querySelectorAll('.text-content p');
content[0].textContent = siteContent['main-content']['features-content'];
content[1].textContent = siteContent['main-content']['about-content'];
content[2].textContent = siteContent['main-content']['services-content'];
content[3].textContent = siteContent['main-content']['product-content'];
content[4].textContent = siteContent['main-content']['vision-content'];

const middleimg = document.querySelector('.middle-img');
console.log(middleimg);
middleimg.setAttribute('src', siteContent['main-content']['middle-img-src']);
console.log(middleimg);

const navigation = document.querySelectorAll('nav a');
navigation[0].textContent = siteContent['nav']['nav-item-1'];
navigation[1].textContent = siteContent['nav']['nav-item-2'];
navigation[2].textContent = siteContent['nav']['nav-item-3'];
navigation[3].textContent = siteContent['nav']['nav-item-4'];
navigation[4].textContent = siteContent['nav']['nav-item-5'];
navigation[5].textContent = siteContent['nav']['nav-item-6'];

navigation.forEach(link => {link.style.color = 'green'}) 

const add = document.createElement('a');
add.textContent = 'Shop';
const nav = document.querySelector('nav');
nav.appendChild(add)

const add2 = document.createElement('a');
add2.textContent = 'Info';
nav.prepend(add2);

const img = document.querySelector('#cta-img');
console.log(img);
img.setAttribute('src', siteContent['cta']['img-src']);
console.log(img);

const header = document.querySelector('.cta-text h1');
console.log(header);
header.textContent = siteContent['cta']['h1'];

const button = document.querySelector('.cta-text button');
console.log(button);
button.textContent = siteContent['cta']['button'];

const address = document.querySelectorAll('.contact p');
address[0].textContent = siteContent['contact']['address'];
address[1].textContent = siteContent['contact']['phone'];
address[2].textContent = siteContent['contact']['email'];

const header2 = document.querySelector('.contact h4');
console.log(header2);
header2.textContent = siteContent['contact']['contact-h4'];

const footer = document.querySelector('footer p');
console.log(footer);
footer.textContent = siteContent['footer']['copyright'];
