#include <stdio.h>
#include <stdlib.h>

typedef struct Cellule_FK {
    int info_FK;
    struct Cellule_FK *suivant_FK;
} Cellule_FK, *Liste_FK;

Liste_FK creer_2_elements_FEUDJIO() {
    Liste_FK tete_FK = NULL;
    Liste_FK P_FK;

    P_FK = (Liste_FK)malloc(sizeof(Cellule_FK));
    printf("Entrer la premiere valeur de la liste : ");
    scanf("%d", &P_FK->info_FK);
    P_FK->suivant_FK = tete_FK;
    tete_FK = P_FK;

    P_FK = (Liste_FK)malloc(sizeof(Cellule_FK));
    printf("Entrer la deuxieme valeur de la liste : ");
    scanf("%d", &P_FK->info_FK);
    P_FK->suivant_FK = tete_FK;
    tete_FK = P_FK;

    return tete_FK;
}

Liste_FK creer_n_elements_FEUDJIO(int n_FK) {
    Liste_FK tete_FK = NULL;
    Liste_FK P_FK;

    for (int i_FK = 1; i_FK <= n_FK; i_FK++) {
        P_FK = (Liste_FK)malloc(sizeof(Cellule_FK));
        if (P_FK == NULL) exit(1);

        printf("Entrer l'element %d : ", i_FK);
        scanf("%d", &P_FK->info_FK);

        P_FK->suivant_FK = tete_FK;
        tete_FK = P_FK;
    }
    return tete_FK;
}

int rechercher_valeur_FEUDJIO(Liste_FK tete_FK, int val_FK) {
    Liste_FK P_FK = tete_FK;
    // Tant que (P != null) et (P.info != val)
    while (P_FK != NULL && P_FK->info_FK != val_FK) {
        P_FK = P_FK->suivant_FK;
    }

    if (P_FK == NULL) return 0;
    else return 1;              
}

void afficher_liste_FEUDJIO(Liste_FK L_FK) {
    printf("Etat de la liste : ");
    while (L_FK != NULL) {
        printf("[%d] -> ", L_FK->info_FK);
        L_FK = L_FK->suivant_FK;
    }
    printf("NULL\n");
}
