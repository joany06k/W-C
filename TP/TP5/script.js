/*
    Nom : script.js
    Auteur : HACHE
    Description :
        Todo List Alpine.js (TP5bis) :
        - ajout, suppression et validation des tâches, statistiques
        - thème clair/sombre et lecture facilitée
        - persistance des préférences et des tâches avec localStorage
        - fonctions de gestion des cookies

    Réflexion localStorage / cookies :
        - Un cookie est envoyé au serveur à CHAQUE requête : inutile pour des
          préférences d'affichage qui ne concernent que le navigateur.
        - localStorage reste côté client, stocke plus de données, et son API
          (setItem / getItem / removeItem) est plus simple que document.cookie.
        - Les cookies restent utiles pour ce que le SERVEUR doit lire
          (ex. identification de session).

    Pourquoi JSON.stringify() / JSON.parse() ?
        localStorage ne stocke que des chaînes de caractères. Un tableau d'objets
        doit donc être converti en texte (stringify) avant l'écriture, puis
        reconverti en tableau (parse) à la lecture.
*/


// Lecture sécurisée des tâches : si les données sont absentes ou corrompues,
// JSON.parse lèverait une erreur et bloquerait toute l'application.
function chargerTaches() {
    try {
        const taches = JSON.parse(localStorage.getItem('mesTaches'));
        return Array.isArray(taches) ? taches : [];
    } catch (erreur) {
        return [];
    }
}


function monApplication() {
    return {

        modeSombre: localStorage.getItem('themeSombre') === 'oui',
        modeDyslexie: localStorage.getItem('themeDyslexie') === 'oui',


        listeTaches: chargerTaches(),
        texteSaisi: '',

        changerSombre() {
            this.modeSombre = !this.modeSombre;
            localStorage.setItem('themeSombre', this.modeSombre ? 'oui' : 'non');
        },

        changerDyslexie() {
            this.modeDyslexie = !this.modeDyslexie;
            localStorage.setItem('themeDyslexie', this.modeDyslexie ? 'oui' : 'non');
        },

        ajouterTache() {
            const nom = this.texteSaisi.trim(); 
            if (nom === '') {
                return;
            }
            this.listeTaches.push({
                id: Date.now(),
                nom: nom,
                fini: false
            });
            this.texteSaisi = '';
            this.sauvegarderLocal();
        },

        supprimer(idTache) {
            this.listeTaches = this.listeTaches.filter(t => t.id !== idTache);
            this.sauvegarderLocal();
        },

        sauvegarderLocal() {
            localStorage.setItem('mesTaches', JSON.stringify(this.listeTaches));
        },

        compterFaites() {
            let compteur = 0;
            for (const t of this.listeTaches) {
                if (t.fini === true) {
                    compteur++;
                }
            }
            return compteur;
        }
    };
}



function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value)
        + "; expires=" + date.toUTCString() + "; path=/; samesite=lax";
}

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const position = cookie.indexOf("="); 
        const cle = decodeURIComponent(cookie.substring(0, position));
        if (cle === name) {
            return decodeURIComponent(cookie.substring(position + 1));
        }
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = encodeURIComponent(name) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}