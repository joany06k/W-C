//
// Nom : planets.js
// Date et auteur :
//		Créé par HACHE
//
// Description :
//		Affiche la description et l'image d'une planète au survol (onmouseover)
//		et rétablit l'état initial quand la souris sort (onmouseout)
//

// Texte initial mémorisé une seule fois au chargement
// (le script est chargé en fin de page, l'élément #desc existe déjà)
const texteParDefaut = document.getElementById("desc").textContent;

function writeText(texte)
{
	document.getElementById("desc").textContent = texte;
}

function writeDefault()
{
	document.getElementById("desc").textContent = texteParDefaut;
}

function showImage(source_image)
{
	const gifPlanete = document.getElementById("gifPlanete");
	gifPlanete.src = source_image;
	gifPlanete.style.display = "inline";
}

function hideImage()
{
	document.getElementById("gifPlanete").style.display = "none";
}