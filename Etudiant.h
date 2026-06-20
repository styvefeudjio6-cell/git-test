#ifndef ETUDIANT_H
#define ETUDIANT_H

#include <string>

class Etudiant {
private:
    static int dernierMatricule;
    int matricule;
    std::string nomEtud;
    int nbrNotes;
    float *TabNotes;

public:
    Etudiant();
    Etudiant(std::string nom, int nb);
    Etudiant(const Etudiant &e);
    ~Etudiant();

    int getMatricule() const;
    std::string getNomEtud() const;
    int getNbrNotes() const;
    float* getTabNotes() const;

    void setMatricule(int m);
    void setNomEtud(std::string n);
    void setNbrNotes(int nb);
    void setTabNotes(float note, int index);

    void affichage() const;
    void trierNotes();
};

#endif
