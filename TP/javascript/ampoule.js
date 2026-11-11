//
// Nom : ampoule.js
// Date et auteur :
//		Créé par HACHE
//
// Description :
//		Allume ou éteint l'ampoule à chaque clic sur l'image
//

function OnOffAmpoule()
{
	const image = document.getElementById("monAmpoule");

	if (image.src.search("bulboff") !== -1)
	{
		image.src = "images/pic_bulbon.gif";
		image.alt = "Ampoule allumée";
	}
	else
	{
		image.src = "images/pic_bulboff.gif";
		image.alt = "Ampoule éteinte";
	}
}