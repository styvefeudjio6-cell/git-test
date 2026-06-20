#include "Etudiant.h"
#include "Cours.h"

void Etudiant::sInscrireACours(Cours* c) {
    
    if (std::find(cours.begin(), cours.end(), c) == cours.end()) {
        cours.push_back(c);
        c->ajouterEtudiant(this);  
    }
}

void Etudiant::seDesinscrireDeCours(Cours* c) {
    cours.erase(std::remove(cours.begin(), cours.end(), c), cours.end());
    c->retirerEtudiant(this);  
}
