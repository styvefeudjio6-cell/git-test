#include <iostream>

using namespace std;
class Banque;
class compte
{
private:
    int numero;
    double solde;
    string nom;
    public:
        compte(int num, double solde_init, const string& tit){
            numero = num;
            solde = solde_init;
            nom = tit;
        }
        void afficher() const {
            cout << "Numéro de compte : " << numero << endl;
            cout << "Nom : " << nom << endl;
            cout << "solde du compte : " << solde << endl;
        }
        friend class Banque;
};

class Banque {
    public:
    void virement(compte& source, compte& dest, double montant){
        if (source.solde >= montant)
        {
            source.solde -= montant;
            dest.solde += montant;
            cout << "Virement de " <<montant<< " effectué avec successe !" << endl;
        }
        else
        {
            cout << "Virement impossible, solde insuffisant !" << endl;
        }
    }
    void afficherSolde(const compte& c) const {
        cout << "Numéro de compte : " << c.numero << endl;
        cout << "Nom : " << c.nom << endl; 
        cout << " Solde : " << c.solde << " XAF"<< endl;
    }
};

int main() {
    compte c1(1, 150000, "Alice");
    compte c2(2, 30000, "Bob");
    Banque banque;
    banque.virement(c1, c2, 1250000);
    return 0;
}