#include "function.h"
#include <stdio.h>
#include<stdlib.h>
#include<time.h>

int main(void) {
    srand(time(NULL));

    int n, choixTri, choixRemplissage;
    printf("Taille du tableau : ");
    scanf("%d ",&n);

    int* tab = creerTableau(n);
    printf("====REMPLISSAGE====\n");
    printf("1. Aleatoire\n");
    printf("2. Clavier\n");
    printf("Choix : \n");
    scanf("%d",&choixRemplissage);

    switch (choixRemplissage)
    {
    case 1:
        remplirAleatoire(tab, n);
        break;
    
    case 2:
        remplirClavier(tab, n);
        break;
    default:
    printf("choix invalide\n");
    free(tab);
    return 1;    
    }

    printf("Avant : ");
    afficherTableau(tab, n);
    printf("\n====TRI====\n");
    printf("1. Tri bulles\n");
    printf("2. Tri insertion\n");
    printf("3. Tri selection\n");
    printf("4. Tri rapide\n");
    printf("5. Tri fusion\n");
    printf("6. Tri butonique\n");
    printf("Choix : \n");
    scanf("%d", choixTri);
    switch (choixTri)
    {
        case 1:
            triBulles(tab, n);
            break;
        case 2:
            triInsertion(tab, n);
            break;
        case 3:
            triSelection(tab, n);
            break;
        case 4:
            triRapide(tab, n);
            break;
        case 5: 
            triFusion(tab, n);
            break;
        case 6:
            triBitonique(tab, n);
            break;            
        default:
            printf("Choix invalide\n");
            free(tab);
        break;
    }
    printf("Apres : ");
    afficherTableau(tab, n);

    free(tab);
    return 0;
}