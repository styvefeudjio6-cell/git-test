const classe = [
    { nom: "Styve", note: 15, matiere: "Math" },
    { nom: "Paul", note: 8, matiere: "Math" },
    { nom: "Marie", note: 17, matiere: "Math" },
    { nom: "Jean", note: 5, matiere: "Math" },
    { nom: "Awa", note: 12, matiere: "Math" },
    { nom: "Karim", note: 19, matiere: "Math" },
]
    const getAdmis = classe.filter((eleve) => eleve.note >= 10);
    console.log(getAdmis);
    const meuilleureEtudiant = classe.reduce((meilleur, eleve) => {
        if(eleve.note > meilleur.note) {
            return eleve;
        } else {
        return meilleur;
        }
    });
    console.log(meuilleureEtudiant);
    const moyenneClasse = classe.reduce((acc, eleve) => acc + eleve.note, 0) / classe.length;
    console.log(moyenneClasse);
    const getRecales = classe.filter((eleve) => eleve.note < 10);
    console.log(getRecales);
    const Majuscule = classe.map((eleve) => eleve.nom.toUpperCase());
    console.log(Majuscule);

    const panier = [
  { nom: "Laptop",   prix: 800, quantite: 1 },
  { nom: "Souris",   prix: 25,  quantite: 2 },
  { nom: "Clavier",  prix: 60,  quantite: 1 },
  { nom: "Écran",    prix: 200, quantite: 2 },
  { nom: "USB",      prix: 10,  quantite: 5 },
]

const calculerTotal = panier.reduce((acc,produit) => acc + (produit.prix * produit.quantite), 0)
console.log("le prix total est :",calculerTotal) 
const appliquerReduction = (panier, pourcentage) => {
    const total = panier.reduce((acc, produit) => acc + (produit.prix * produit.quantite), 0);
    return total - (total * pourcentage / 100);
}
console.log("le prix total après réduction est :",appliquerReduction(panier, 10))   
const getProduitsChers = panier.filter((seuil) => seuil.prix > 50);
console.log("les produits chers sont :",getProduitsChers)
 const getResume = (panier) => panier.map(f => `${f.nom} x ${f.quantite} = ${f.prix * f.quantite}$`)
 console.log (getResume(panier))
 const getProduitLePlusCher = panier.reduce((produit, plusChers) => {
    if (produit.prix > plusChers.prix){
        return produit
    }
    else {
        return plusChers
        } 
 })
  console.log(getProduitLePlusCher)n
  ùmg
  -