#include "function.h"
#include<stdio.h>
#include<stdlib.h>

int* creerTableau(int n) {
    return malloc(n * (sizeof(int)));
}
void remplirAleatoire(int tab[], int n) {
    for (int i = 0; i < n; i++)
    {
        printf("%d ", tab[i]);
    }
}
void afficherTableau(int tab[], int n) {
    for (int i = 0; i < n; i++)
    {
        tab[i] = rand() % 100;    
    }
}
void triBulles(int tab[], int n) {
    for (int i = 0; i < n-1; i++)
    {
        for (int j = 0; j < n-i-1; j++)
        {
            if (tab[j] > tab[j+1])
            {
                int tmp = tab[j];
                tab[j] = tab[j+1];
                tab[j+1] = tmp ;
            }
        }
    }
}
void triInsertion(int tab[], int n) {
    for (int i = 0; i < n; i++)
    {
        int cle = tab [i];
        int j = i - 1;
    
    while (j >= 0 && tab[j] > cle)
    {
        tab[j+1] = tab[j] ;
        j--;
    }
    tab[j+1] = cle;
    }
}
