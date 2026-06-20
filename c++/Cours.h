#ifndef COURS_H
#define COURS_H

#include <string>
#include <vector>
#include <algorithm>  // Pour find

// Déclaration anticipée de Etudiant (car Cours et Etudiant se référencent mutuellement)
class Etudiant;

class Cours {
private:
    std::string titre;
    std::vector<Etudiant*> etudiants;  // Liste des étudiants inscrits

public:
    Cours(const std::string& t) : titre(t) {}
    ~Cours() {}

    // Méthodes
    void ajouterEtudiant(Etudiant* e);
    void retirerEtudiant(Etudiant* e);
    std::string getTitre() const { return titre; }
    const std::vector<Etudiant*>& getEtudiants() const { return etudiants; }
};

#endif
