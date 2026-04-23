#include<stdio.h>
#include<stdlib.h>
#include<time.h>
int* creerTableau(int n ) {
    return malloc(n * sizeof(int));
}
void remplirAleatoire(int tab[], int n) {
    for (int i = 0; i < n; i++)
    {
        tab[i] = rand() % 100;
    }
    
}
void afficherTableau (int tab[], int n) {
    for (int i = 0; i < n; i++)
    {
        printf("%d ", tab[i]);
    }
    
}
int main(void) {
    srand(time(NULL));
    int n = 5;
    int* tab = creerTableau(n);
    remplirAleatoire(tab, n);
    afficherTableau(tab, n);
    return 0;
}