#include "Cours.h"
#include "Etudiant.h"

void Cours::ajouterEtudiant(Etudiant* e) {
    // Vérifier si l'étudiant n'est pas déjà dans la liste
    if (std::find(etudiants.begin(), etudiants.end(), e) == etudiants.end()) {
        etudiants.push_back(e);
    }
}

void Cours::retirerEtudiant(Etudiant* e) {
    // Retirer l'étudiant de la liste
    etudiants.erase(std::remove(etudiants.begin(), etudiants.end(), e), etudiants.end());
}
