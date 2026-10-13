function OnOffAmpoule() {
    let image = document.getElementById("monAmpoule");
    let sourceActuelle = image.src;

    if (sourceActuelle.search("bulboff") !== -1) {
        image.src = "images/pic_bulbon.gif"; 
    } else {
        image.src = "images/pic_bulboff.gif";
    }
}