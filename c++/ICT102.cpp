#include <iostream>
#include<ctime>
using namespace std;

void visite_Ville_Accepter(int n) {
    int valeur = rand()% 2;

        if (valeur == 0)
        {
            cout << " VOTRE DEMANDE A ETE ACCEPTER !" << endl;
        }
        else {
            cout << "VOTRE DEMANDE A ETE REFUSEE !" << endl;
        }
    }

int main() {
    srand(time(NULL));
    int choix, n, verification;
    cout << "Que choissisez vous ?" << endl;
    cout << "1. ville" << endl;
    cout << "2. Musee" << endl;
    cin >> choix;
    switch (choix)
    {
    case 1:
        cout << "Votre demade est en cours d'analyse" << endl;
        cout << "Demander une reverification "<< endl;
        cout << "Entrer 1 pour envoyer une demande de verification" << endl;
        cin >> verification;
            cout << "votre demande est en cours de traitement " << endl;
            visite_Ville_Accepter(n);
        break;
    case 2:
        cout << "Votre demade est en cours d'analyse" << endl;
        cout << "Demander une reverification "<< endl;
        cout << "Entrer 1 pour envoyer une demande de verification" << endl;
        cin >> verification;
        if (verification == 1)
        {
            cout << "votre demande est en cours de traitement " << endl;
            visite_Ville_Accepter(n);
        }
        else
        {
            cout << "Commande invalide !" << endl;
        }
        
        break;
    default:
        cout << "Choix invalide !" << endl;
        break;
    }
    return 0;
}