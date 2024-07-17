// statcounter refuse cookies
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://statcounter.com/about/set-refusal-cookie/?set=1");
xhr.send();
xhr.onload();
