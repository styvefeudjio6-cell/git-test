#include <iostream>
using namespace std;
int main() {
    const int ligne = 4;
    const int colonne = 8;
    char grille[ligne][colonne];
    for (int i = 0; i < ligne; i++)
    {
        for (int j = 0; j < colonne ; j++)
        {
            grille[i][j] = '-'; 
        }
        
    }
    cout << "+";
    for (int j = 0; j < colonne; j++)
    {
        cout << "--+";
    }
    cout << endl;

    
    return 0;
}