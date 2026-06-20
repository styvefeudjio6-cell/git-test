#include<stdio.h>
#include<stdlib.h>
#include<time.h>
#include"fonction.h"
int main (void) {
    srand(time(NULL));
    int i_FK, n_FK, choixRemplissage_FK, choixTri_FK;
    printf("\n=====MENU======\n");
    printf("Taille du tableau : ");
    scanf("%d", &n_FK);
    int *tab_FK = creerTableau_FEUDJIO(n_FK);
    printf("\n========REMPLISSAGE======\n");
    printf("1. remplissageAleatoire\n");
    printf("2. remplissageClavier\n");
    scanf("%d", &choixRemplissage_FK);
    switch (choixRemplissage_FK)
    {
    case 1:
        remplirAleatoire_FEUDJIO(tab_FK, n_FK);
        break;
    case 2:
        remplirClavier_FEUDJIO(tab_FK, n_FK);
        break;
    default:
        printf("option invalide\n");
        free(tab_FK);
        return 1;
    }
    printf("Avant : \n");
    afficherTableau_FEUDJIO(tab_FK, n_FK);
    printf("\n=====TRIS=====\n");
    printf("1. Tri bulle\n");
    printf("2. Tri selection\n");
    printf("3. Tri insertion\n");
    scanf("%d", &choixTri_FK);
    switch (choixTri_FK)
    {
    case 1:
        triBulles_FEUDJIO(tab_FK, n_FK);
        break;
    case 2:
        triSelection_FEUDJIO(tab_FK, n_FK);
        break;
    case 3:
        triInsertion_FEUDJIO(tab_FK, n_FK);
        break;    
    default:
        printf("Option invalide\n");
        free(tab_FK);
        return 1;
    }
    printf("Apres :\n");
    afficherTableau_FEUDJIO(tab_FK, n_FK);
    free(tab_FK);
    return 0;
}

