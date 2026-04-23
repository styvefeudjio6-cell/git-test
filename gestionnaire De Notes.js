const classe = [
  { nom: "Styve", note: 15, matiere: "Math" },
  { nom: "Paul", note: 8, matiere: "Math" },
  { nom: "Marie", note: 17, matiere: "Math" },
  { nom: "Jean", note: 5, matiere: "Math" },
  { nom: "Awa", note: 12, matiere: "Math" },
  { nom: "Karim", note: 19, matiere: "Math" },
]

    const admis = classe.filter((eleve) => eleve.note >= 10);
    console.log(admis);
