//
// Nom : exercices.js
// Date et auteur :
//		Modifié le 11/11/2026 par HACHE
//
// Description :
//		Exercices en javascript
//		Calcul de la suite de Fibonacci
//		Ecriture de la fonction range(stop, [start], [step]) qui prend trois
// arguments en paramètre et renvoie le tableau des entiers compris entre
// start (inclus) et stop (exclu) avec un pas de step.
//


// Fonction Appeler_Fibonacci :
//		- appelée par un événement javascript depuis une page html (comme "onclick")
//		- lit le rang n dans l'entrée html
//		- appelle la fonction Fibonacci()
function Appeler_Fibonacci()
{
	const zoneResultat = document.getElementById("resultat_fibonacci");
	const texteN = document.forms["fibonacci"]["n"].value.trim();

	// champ vide : Number("") vaudrait 0, on refuse explicitement
	if (texteN === "")
	{
		zoneResultat.textContent = "Veuillez saisir un rang.";
		return;
	}

	const n = Number(texteN);
	const fibo = Fibonacci(n);

	// Fibonacci() renvoie undefined si n n'est pas un entier positif ou nul
	if (fibo === undefined)
	{
		zoneResultat.textContent = "Le rang doit être un entier positif ou nul.";
		return;
	}

	zoneResultat.textContent = "Résultat : Fibonacci(" + n + ") = " + fibo;
}


// Retourne/renvoie la suite de Fibonacci au rang n
function Fibonacci(n)
{
	// contrôle du paramètre n
	if (!Number.isInteger(n) || n < 0)
	{
		return undefined;
	}

	// cas particulier
	if (n === 0)
	{
		return 0;
	}

	// cas général
	let fibo2 = 0;
	let fibo1 = 0;
	let fibo = 1;
	for (let i = 1; i < n; i++)
	{
		fibo2 = fibo1;
		fibo1 = fibo;
		fibo = fibo1 + fibo2;
	}
	return fibo;
}


// Fonction Appeler_Range :
//		- appelée par un événement javascript depuis une page html (comme "onclick")
//		- lit les données dans les entrées html
//		- appelle la fonction Range()
function Appeler_Range()
{
	const zoneResultat = document.getElementById("affichage_range");
	const texteStop = document.getElementById("stop").value.trim();
	const texteStart = document.getElementById("start").value.trim();
	const texteStep = document.getElementById("step").value.trim();

	// stop est obligatoire
	if (texteStop === "")
	{
		zoneResultat.textContent = "Veuillez saisir au moins la valeur de Stop.";
		return;
	}

	// start et step restent undefined si le champ est vide :
	// les valeurs par défaut de Range() s'appliquent alors
	const stop = Number(texteStop);
	const start = (texteStart === "") ? undefined : Number(texteStart);
	const step = (texteStep === "") ? undefined : Number(texteStep);

	const tableauResultat = Range(stop, start, step);
	zoneResultat.textContent = "Range = [" + tableauResultat + "]";
}


// Fonction Range(stop, start=0, step=1)
// Retourne/Renvoie le tableau des entiers compris entre start (inclus) et
// stop (exclu) avec un pas de step.
// Seul le cas step > 0 est traité : sinon on renvoie le tableau vide
// (un pas nul ou négatif provoquerait une boucle infinie).
function Range(stop, start = 0, step = 1)
{
	// valeurs non numériques (NaN, Infinity) ou pas non strictement positif
	if (!Number.isFinite(stop) || !Number.isFinite(start) || !Number.isFinite(step) || step <= 0)
	{
		return [];
	}

	if (stop <= start)
	{
		return [];
	}

	const resultat = [];
	for (let i = start; i < stop; i = i + step)
	{
		resultat.push(i);
	}
	return resultat;
}