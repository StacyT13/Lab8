window.onload = initBannerLink;

let theAd = 0;
let adURL = new Array("marvel.com/","movies.disney.com/the-incredibles","thecomicbookstore.website/","britannica.com/topic/list-of-superheroes-2024795", 
"comicsbookcase.com/updates/2018/9/12/top-modern-superhero-artists-the-sultans-of-style-at-marvel-and-dc","nationaltoday.com/national-superhero-day/");
let adImages = new
Array ("images/superhero1.png","images/superhero2.png","images/superhero3.png","images/superhero4.png","images/superhero5.png","images/superhero6.png");


function initBannerLink() {
    if (document.getElementById("adBanner").parentNode.tagName == "a")
    {
        document.getElementById("adBanner").parentNode.onClick = newLocation;
    }

rotate();

}

function newLocation() {
    document.location.href = "https://www." + adURL[theAd];
    return false;
}



function rotate() {
    theAd++;
    if(theAd == adImages.length) {
        theAd = 0;
    }
    document.getElementById("adBanner").src=adImages[theAd];
 
    setTimeout(rotate,3*1000);
}
