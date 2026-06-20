#include <iostream>
#include <cstdlib> 
#include <algorithm>
using namespace std;

void affichertableau(int* tab, int n) {
    cout << "Notes : [";
    for (int i = 0; i < n; i++)
    {
        cout << tab[i] ;
        if (i < n-1) cout << ", ";
        
    }
    cout << "]" << endl;
}

void triertableau(int* tab, int n){
    sort( tab, tab + n );
    }    
void moyenne_étudiant( int somme, int n) {
    string nom;
    float moyenne = 0.00f;
    moyenne = somme / n ;
    cout << "la moyenne de l'etudiant " << nom << " est : " << moyenne;   
}
    
void afficherstats( int* tab, int n) {
    int max = tab[0], min = tab[0];
    for (int i = 1; i < n; i++)
    {
        if (tab[i] > max) max = tab[i];
        if (tab[i] < min) min = tab[i];
    }    
    cout <<"Note maximale : " << max << endl;
    cout <<"Note minimale : " << min << endl; 
}

int main(void) {
    string nom;
    int i, n;
    
    float somme = 0.0f; 
    
    cout << "Nom de l'étudiant : ";
    cin >>nom;
    do
    {
        cout << "Nombre de notes : ";
        cin >> n;
    } while (n < 1 || n > 10);

    int* tab = new int[n];
        cout << "Entrer les "<< n << " notes : ";
        
    for (int i = 0; i < n; i++)
    {
        cin >> tab[i]; 
        while (tab[i] < 0 || tab[i] > 20) {
            cout << "invalide ! Reéssayez : ";
            cin >> tab[i];
        }
        
        somme += tab[i];
    
    }
    affichertableau(tab, n);
    cout << "La somme des notes est de : " << somme << endl;
    
    moyenne_étudiant(somme, n);
    cout << "=======  INFOS DE L'ETUDIANT  ======"<< endl;
    cout << "NOM : " << nom << endl;
    cout << "NOMBRE DE NOTES : "  << n << endl;
    affichertableau(tab, n);
    afficherstats(tab, n); 
    cout << "SOMME DES NOTES : " << somme << endl;
    moyenne_étudiant(somme, n);
    delete[] tab;
    return 0;
}