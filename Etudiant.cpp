#include "Etudiant.h"
#include <iostream>

int Etudiant::dernierMatricule = 0;

Etudiant::Etudiant() {
    dernierMatricule++;
    matricule = dernierMatricule;
    nomEtud = "Inconnu";
    nbrNotes = 0;
    TabNotes = nullptr;
}

Etudiant::Etudiant(std::string nom, int nb) {
    dernierMatricule++;
    matricule = dernierMatricule;
    nomEtud = nom;
    nbrNotes = nb;
    TabNotes = new float[nbrNotes];
    for (int i = 0; i < nbrNotes; i++) {
        TabNotes[i] = 0.0f;
    }
}

Etudiant::Etudiant(const Etudiant &e) {
    matricule = e.matricule;
    nomEtud = e.nomEtud;
    nbrNotes = e.nbrNotes;
    TabNotes = new float[nbrNotes];
    for (int i = 0; i < nbrNotes; i++) {
        TabNotes[i] = e.TabNotes[i];
    }
}

Etudiant::~Etudiant() {
    delete[] TabNotes;
}

int Etudiant::getMatricule() const { return matricule; }
std::string Etudiant::getNomEtud() const { return nomEtud; }
int Etudiant::getNbrNotes() const { return nbrNotes; }
float* Etudiant::getTabNotes() const { return TabNotes; }

void Etudiant::setMatricule(int m) { matricule = m; }
void Etudiant::setNomEtud(std::string n) { nomEtud = n; }

void Etudiant::setNbrNotes(int nb) {
    if (nb >= 0) {
        float* newTab = new float[nb];
        int min = (nb < nbrNotes) ? nb : nbrNotes;
        for (int i = 0; i < min; i++) {
            newTab[i] = TabNotes[i];
        }
        for (int i = min; i < nb; i++) {
            newTab[i] = 0.0f;
        }
        delete[] TabNotes;
        TabNotes = newTab;
        nbrNotes = nb;
    }
}

void Etudiant::setTabNotes(float note, int index) {
    if (index >= 0 && index < nbrNotes) {
        TabNotes[index] = note;
    }
}

void Etudiant::affichage() const {
    std::cout << "Nom : " << nomEtud << "\n";
    std::cout << "Matricule : " << matricule << "\n";
    std::cout << "Nombre de notes : " << nbrNotes << "\n";
    std::cout << "Notes : [";
    for (int i = 0; i < nbrNotes; i++) {
        std::cout << TabNotes[i];
        if (i < nbrNotes - 1) std::cout << ", ";
    }
    std::cout << "]\n";
}

void Etudiant::trierNotes() {
    for (int i = 0; i < nbrNotes - 1; i++) {
        for (int j = 0; j < nbrNotes - i - 1; j++) {
            if (TabNotes[j] > TabNotes[j + 1]) {
                float temp = TabNotes[j];
                TabNotes[j] = TabNotes[j + 1];
                TabNotes[j + 1] = temp;
            }
        }
    }
}
