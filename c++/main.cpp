#include <iostream>
#include "Etudiant.h"
#include "Cours.h"

int main() {
    // Créer des étudiants
    Etudiant alice("Alice");
    Etudiant bob("Bob");

    // Créer des cours
    Cours maths("Mathématiques");
    Cours physique("Physique");
    
    alice.sInscrireACours(&maths);
    alice.sInscrireACours(&physique);

    bob.sInscrireACours(&maths);
    std::cout << alice.getNom() << " suit les cours : ";
    for (Cours* c : alice.getCours()) {
        std::cout << c->getTitre() << " ";
    }
    std::cout << std::endl;

    std::cout << "Étudiants en " << maths.getTitre() << " : ";
    for (Etudiant* e : maths.getEtudiants()) {
        std::cout << e->getNom() << " ";
    }
    std::cout << std::endl;
    
    bob.seDesinscrireDeCours(&maths);

    
    std::cout << "Étudiants en " << maths.getTitre() << " après désinscription : ";
    for (Etudiant* e : maths.getEtudiants()) {
        std::cout << e->getNom() << " ";
    }
    std::cout << std::endl;

    return 0;
}
