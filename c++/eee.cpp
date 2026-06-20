#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int carré(int x) {
        return x * x;
    }

    bool estpremier(int nb) {
        if(nb <= 1) return false;
        for (int i = 2; i * i < nb; i++)
        {
            if (nb % i == 0) return false;
        }
        return true;
    }
    void rempliraleatoire(int n, int* tab) {
        for (int i = 0; i < n; i++)
        {
            tab[i] = rand() % 1000;
        }
    }

    void affichertableau(int* tab, int n) {
        for (int i = 0; i < n; i++)
        {
            cout << tab[i] << " ";
        }
    }

int main() {
    cout <<"HELLO WORD !" << endl;
    int a, b, c;
    cout << "entrer le premier nombre : ";
    cin >> a;
    cout << "entrer le deuxième nombre : ";
    cin >> b;
    cout <<"la somme est de : " << a + b << endl;  
    int nombre;
    cout <<"entrer un nombre : ";
    cin >> nombre;
    if (nombre % 2 == 0)
    {
        cout  <<nombre<< ", est pair !!"<< endl ;
    }
    else
    cout << nombre << ", est inpair !!"<< endl;
    if (a > b)
    {
        cout << a << ", est plus grand que, " << b << endl;
    }
    else if (a < b) {
        cout << b << ", est plus petit que, " << a << endl; 
    }
    else if (a == b)
    {
        cout << a << ", est égale à, " << b << endl;
    }
    int n;
    cout << "entrer la quantité de nombre désirée : ";
    cin >> n;
    for (int i = 0; i <= n; i++)
    {

        cout << i << " ";
    }
    cout << endl;
    int N, somme = 0;
    cout << "entrer un nombre : ";
    cin >> N;
    for (int i = 1; i <= N ; i++)
    {
        somme += i;
    }
    cout << "La somme de 1 à " << N << " est : "<< somme << endl;
    
    int nbr;
    cout << "entrer un nombre : ";
    cin >> nbr;
    cout << "Le carré de " << nbr << " est : " << carré(nombre) << endl;
    cout << "Enter un nombre : ";
    cin >>nbr;
    if (estpremier(nbr))
    {
        cout << nbr << " est un nombre premier !" << endl;
    }
    else
    {
        cout << nbr << " n'est pas un nombre premier !" << endl;
    }
    int* tab = new int[n], i;
    cout << "entrer la taille du tableau : ";
    cin >> n;
    rempliraleatoire(n, tab);
    affichertableau(tab, n);
    int max = tab[0];
    for (int i = 0; i < n; i++)
    {
        if (tab[i] > max)
        {
            max = tab[i];
        }
        cout << "le plus grand nombre : " << max << endl;
    }
    delete[] tab;
    
    return 0;
}