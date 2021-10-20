let listeATriee = [];
for (let valeurAjoute;valeurAjoute!="arret";valeurAjoute=prompt("Nombre que vous mettez dans la liste.(tappez arret pour arrêter)"))
{
    valeurAjoute=+valeurAjoute;
    if (!isNaN(valeurAjoute))
    {
        {
            listeATriee.push(valeurAjoute);
            console.log(listeATriee);
        }
    } 
}
let ordre=prompt("croissant ou décroissant")
function triee(listeATriee, ordre)
{
    let listeTriee = []
    if (ordre == 'croissant') 
    {
        for (let a = 0; a < listeATriee.length; a++) 
        {
            listeTriee.push(listeATriee[a]);
        }
        for (let a = 0; a < listeATriee.length; a++) 
        {
            let compteur = 0;
            for (let b = 0; b < listeATriee.length; b++) 
            {
                if (listeATriee[a] > listeATriee[b]) 
                {
                    compteur += 1
                }
            }
            listeTriee[compteur] = listeATriee[a];
        }
    }

    if (ordre == 'décroissant') {
        for (let a = 0; a < listeATriee.length; a++) 
        {
            let compteur = 0;
            for (let b = 0; b < listeATriee.length; b++) 
            {
                if (listeATriee[a] < listeATriee[b]) 
                {
                    compteur += 1
                }
            }
            listeTriee[compteur] = listeATriee[a];
        }
    }
    return listeTriee;
}
console.log(triee(listeATriee,ordre))