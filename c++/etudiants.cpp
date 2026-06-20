#include <iostream>
#include <vector>
#include <string>

using namespace std;

class Cours;

class Etudiant {

    private:
        string nomEtud;
        int matricule;
        vector<Cours*> coursSuivis;
    public:
        friend class cours;
        Etudiant();
        Etudiant(string n, int m);
        Etudiant(const Etudiant& e);
        string getNomEtud();
        int getMatricule();
        void setNomEtud(string n);
        void setMatricule(int m);
        void ajouterCours(Cours* c);
        void afficherCours();
};


class Cours {
    private:
        string nomCour;
        vector<Etudiant*> etudiants;
    public:
        Cours();
        Cours(string t);
        Cours(const Cours& c);
        string getNomCour();
        void setNomCour(string t);
        void ajouterEtudiant(Etudiant* e);
        void afficherEtudiants();
        friend class Etudiant;
};

Etudiant::Etudiant() {
    nomEtud = "";
    matricule = 0;
}

Etudiant::Etudiant(string n, int m) {
    nomEtud = n;
    matricule = m;
}

Etudiant::Etudiant(const Etudiant& e) {
    nomEtud = e.nomEtud;
    matricule = e.matricule;
    coursSuivis = e.coursSuivis;
}

string Etudiant::getNomEtud() {
    return nomEtud;
}

int Etudiant::getMatricule() {
    return matricule;
}

void Etudiant::setNomEtud(string n) {
    nomEtud = n;
}

void Etudiant::setMatricule(int m) {
    matricule = m;
}

Cours::Cours() {
    nomCour = "";
}

Cours::Cours(string t) {
    nomCour = t;
}

Cours::Cours(const Cours& c) {
    nomCour = c.nomCour;
    etudiants = c.etudiants;
}

string Cours::getNomCour() {
    return nomCour;
}

void Cours::setNomCour(string t) {

    nomCour = t;
}

void Etudiant::ajouterCours(Cours* c) {
    // ajout du cours à l'étudiant
    coursSuivis.push_back(c);
    // ajout automatique de l'étudiant au cours
    c->etudiants.push_back(this);
}

void Cours::ajouterEtudiant(Etudiant* e) {
    e->ajouterCours(this);
}

void Etudiant::afficherCours() {
    cout << "\nEtudiant : "<< nomEtud<< " | Matricule : "<< matricule<< endl;
    cout << "Cours suivis par l'etudiant :" << endl;
    for(int i = 0; i < coursSuivis.size(); i++) {
        cout << "- "<< coursSuivis[i]->getNomCour()<< endl;
    }
}

void Cours::afficherEtudiants() {
    cout << "\nCours : "<< nomCour<< endl;
    cout << "Liste des etudiants inscrit a ce cour:" << endl;
    for(int i = 0; i < etudiants.size(); i++){
        cout << "- "<< etudiants[i]->getNomEtud()<< " | Matricule : "<< etudiants[i]->getMatricule()<< endl;
    }
}

int main() {
    Etudiant e1("Paul", 101);
    Etudiant e2("Jean", 102);
    Etudiant e3(e1);
    Cours c1("POO");
    Cours c2("Algorithmique");
    e1.ajouterCours(&c1);
    e1.ajouterCours(&c2);
    e2.ajouterCours(&c1);
    cout << endl;
    e1.afficherCours();
    e2.afficherCours();
    cout << endl;
    c2.afficherEtudiants();
    return 0;
}