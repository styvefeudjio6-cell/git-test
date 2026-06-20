#include "function.h"
#include<stdio.h>
#include<stdlib.h>

int* creerTableau(int n) {
    return malloc(n * (sizeof(int)));
}
void remplirAleatoire(int tab[], int n) {
    for (int i = 0; i < n; i++)
    {
        tab[i] = rand() % 100;
    }
}
void remplirClavier(int tab[], int n) {
    for (int i = 0; i < n; i++) {
        printf("tab[%d] = ", i);
        scanf("%d", &tab[i]);
    }
}

void afficherTableau(int tab[], int n) {
    for (int i = 0; i < n; i++)
    {
        printf("%d ", tab[i]);    
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
    for (int i = 1; i < n; i++)
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
int estPuissanceDeDeux(int n) {
    if (n <= 0) return 0;
    while (n > 1) {
        if (n % 2 != 0) return 0;
        n = n / 2;
    }
    return 1;
}
int partition(int tab[], int g, int d) {
    int pivot = tab[d];
    int i = g - 1;
    for (int j = g; j < d; j++) {
        if (tab[j] <= pivot) {
            i++;
            int tmp = tab[i];
            tab[i] = tab[j];
            tab[j] = tmp;
        }
    }
    int tmp = tab[i+1];
    tab[i+1] = tab[d];
    tab[d] = tmp;
    return i + 1;
}

void triRapide(int tab[], int n) {
    if (n > 1) {
        int p = partition(tab, 0, n-1);
        triRapide(tab, p);
        triRapide(tab + p + 1, n - p - 1);
    }
}
void triSelection(int tab[], int n) {
    for (int i = 0; i < n-1; i++) {
        int min;
        for (int j = i+1; j < n; j++) {
            if (tab[j] < tab[min]) {
                min = j;
            }   
        }
        int tmp = tab[i];
        tab[i] = tab[min];
        tab[min] = tmp;
    }
}
void fusion(int tab[], int g, int m, int d) {
    int n1 = m - g + 1;
    int n2 = d - m;

    int G[n1], D[n2];

    for (int i = 0; i < n1; i++) G[i] = tab[g + i];
    for (int j = 0; j < n2; j++) D[j] = tab[m + 1 + j];

    int i = 0, j = 0, k = g;
    while (i < n1 && j < n2)
        tab[k++] = (G[i] <= D[j]) ? G[i++] : D[j++];
    while (i < n1) tab[k++] = G[i++];
    while (j < n2) tab[k++] = D[j++];
}

void triFusionRec(int tab[], int g, int d) {
    if (g < d) {
        int m = (g + d) / 2;
        triFusionRec(tab, g, m);
        triFusionRec(tab, m + 1, d);
        fusion(tab, g, m, d);
    }
}

void triFusion(int tab[], int n) {
    triFusionRec(tab, 0, n - 1);
}
void compEchange(int tab[], int i, int j, int montant) {
    if ((montant && tab[i] > tab[j]) || (!montant && tab[i] < tab[j])) {
        int tmp = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;
    }
}

void fusionBitonique(int tab[], int bas, int cnt, int montant) {
    if (cnt > 1) {
        int k = cnt / 2;
        for (int i = bas; i < bas + k; i++)
            compEchange(tab, i, i + k, montant);
        fusionBitonique(tab, bas, k, montant);
        fusionBitonique(tab, bas + k, k, montant);
    }
}

void triBitoniqueRec(int tab[], int bas, int cnt, int montant) {
    if (cnt > 1) {
        int k = cnt / 2;
        triBitoniqueRec(tab, bas, k, 1);
        triBitoniqueRec(tab, bas + k, k, 0);
        fusionBitonique(tab, bas, cnt, montant);
    }
}

void triBitonique(int tab[], int n) {
    triBitoniqueRec(tab, 0, n, 1);
}