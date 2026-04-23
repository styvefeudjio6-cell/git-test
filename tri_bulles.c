#include<stdio.h>
#include<stdlib.h>
#include<time.h>

int* creerTableau(int n) {
    return malloc(n * sizeof(int));
}
void remplirAleatoire(int tab[], int n) {
    for (int i = 0; i < n; i++)
    {
        tab[i] = rand() % 100;
    }
    
}
void afficherAleatoire(int tab[], int n) {
    for (int i = 0; i < n; i++)
    {
        printf("%d ", tab[i]);
    }
    
}
void triBulles (int tab[], int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (tab[j] > tab[j+1]){
                int tmp = tab[j];
                tab[j] = tab[j+1];
                tab[j+1] = tmp ;
            }
        }
    }
}
int main(void) {
    srand(time(NULL));
    int n = 5;
    int* tab = creerTableau(n);
    remplirAleatoire(tab, n);
    printf("Avant : ");
    afficherAleatoire(tab, n);
    triBulles(tab, n);
    printf("\nApres : ");
    afficherAleatoire(tab, n);
    return 0;
}
