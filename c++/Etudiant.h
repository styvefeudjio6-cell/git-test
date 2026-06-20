#ifndef ETUDIANT_H
#define ETUDIANT_H

#include <string>
#include <vector>
#include <algorithm>  

class Cours;  // Déclaration anticipée

class Etudiant {
private:
    std::string nom;
    std::vector<Cours*> cours;  // Liste des cours suivis

public:
    Etudiant(const std::string& n) : nom(n) {}
    ~Etudiant() {}

    // Méthodes
    void sInscrireACours(Cours* c);
    void seDesinscrireDeCours(Cours* c);
    std::string getNom() const { return nom; }
    const std::vector<Cours*>& getCours() const { return cours; }
};

#endif
