#include <stdio.h>
#include <stdlib.h>

typedef struct Cellule_FK {
    int info_FK;
    struct Cellule_FK *suivant_FK;
} Cellule_FK, *Liste_FK;
//CODE DE LA LISTE CHAINEE DE 2 ELEMENTS
Liste_FK creer_2_elements_FEUDJIO() {
    Liste_FK tete_FK = NULL;
    Liste_FK p1_FK, p2_FK;

    p1_FK = (Liste_FK)malloc(sizeof(Cellule_FK));
    printf("Entrer la premiere valeur de la liste : ");
    scanf("%d", &p1_FK->info_FK);
    p1_FK->suivant_FK = tete_FK;
    tete_FK = p1_FK;

    p2_FK = (Liste_FK)malloc(sizeof(Cellule_FK));
    printf("Entrer la deuxieme valeur de la liste : ");
    scanf("%d", &p2_FK->info_FK);
    p2_FK->suivant_FK = tete_FK;
    tete_FK = p2_FK;

    return tete_FK;
}

// CODE DE LA LISTE CHAINEE DE N ELEMENTS

Liste_FK creer_n_elements_FEUDJIO(int n_FK) {
    Liste_FK tete_FK = NULL;
    Liste_FK P_FK;
    int i_FK;
    for (i_FK = 1; i_FK <= n_FK; i_FK++) {
        P_FK = (Liste_FK)malloc(sizeof(Cellule_FK));
        printf("Entrer l'element %d : ", i_FK);
        scanf("%d", &P_FK->info_FK);
        P_FK->suivant_FK = tete_FK;
        tete_FK = P_FK;
    }
    return tete_FK;
}

// FONCTION D'AFFICHAGE DE LA LISTE CHAINEE

void afficher_liste_FEUDJIO(Liste_FK L_FK) {
    Liste_FK temp_FK = L_FK;
    printf("Liste actuelle : ");
    while (temp_FK != NULL) {
        printf("[%d] -> ", temp_FK->info_FK);
        temp_FK = temp_FK->suivant_FK;
    }
    printf("NULL\n");
}

// PROGRAMME PRINCIPAL

int main() {
    int choix_FK, n_FK;
    Liste_FK maListe_FK = NULL;

    printf("1. Liste de 2\n2. Liste de n\nChoix : ");
    scanf("%d", &choix_FK);

    if (choix_FK == 1) {
        maListe_FK = creer_2_elements_FEUDJIO();
    } else {
        printf("Nombre d'elements : ");
        scanf("%d", &n_FK);
        maListe_FK = creer_n_elements_FEUDJIO(n_FK);
    }

    afficher_liste_FEUDJIO(maListe_FK);
    
    return 0;
}
