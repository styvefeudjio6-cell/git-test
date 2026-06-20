#include<iostream>
#include<string>
using namespace std;

class joueur {
    private :
        string nom;
        char symbole;

    public :
    joueur(string n, char s) : nom(n), symbole(s) {}
    string getNom() const { return nom; }
    char getSymbole() const { return symbole; }
    void setNom(string nouveauNom) {
        if (!nouveauNom.empty())
        {
            nom = nouveauNom;
        }
        else
        {
            cout << "Erreur !" <<endl;
        }
        
    }
    void setSymbole(char nouveauSymbole) {
    if (nouveauSymbole == 'X' || nouveauSymbole == 'O') {
        symbole = nouveauSymbole;
    } else {
        cout << "❌ Erreur : Le symbole doit être 'X' ou 'O' !" << endl;
    }
}
    
    void presenterJoueur() const {
        cout << "======== JOUEUR "<< symbole << "========"<< endl;
        cout <<"NOM : " << nom << endl;
        cout << "SYMBOLE : " << symbole << endl;
        cout << "=======================================" << endl;
    }
};
int main() {
    string nomSaisi;
    char symboleSaisi;
    cout << "=============== CREATION DE JOUEUR =============" << endl;
    cout << "Entrez le nom du joueur 1 : "<< endl;
    getline(cin, nomSaisi);
    cout << "entrez le symbole du joueur 1 : "<< endl;
    cin >> symboleSaisi;
    cin.ignore();
    joueur j1(nomSaisi, symboleSaisi);
    j1.presenterJoueur();
    
    cout << "Entrez le nom du joueur 2 : "<< endl;
    getline(cin, nomSaisi);
    cout << "entrez le symbole du joueur 2 : "<< endl;
    cin >> symboleSaisi;
    cin.ignore();
    joueur j2(nomSaisi, symboleSaisi);
    j2.presenterJoueur();
    cout <<"\n LES DEUX JOUEURS ONT BIEN ETE CREE !" << endl;
    return 0;
}
