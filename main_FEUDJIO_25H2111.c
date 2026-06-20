#include <stdio.h>
#include <stdlib.h>

typedef struct Cellule_FK {
    int info_FK;
    struct Cellule_FK *suivant_FK;
} Cellule_FK, *Liste_FK;

Liste_FK creer_2_elements_FEUDJIO();
Liste_FK creer_n_elements_FEUDJIO(int n_FK);
int rechercher_valeur_FEUDJIO(Liste_FK tete_FK, int val_FK);
void afficher_liste_FEUDJIO(Liste_FK L_FK);

int main() {
    int choix_FK, n_FK, val_FK;
    Liste_FK maListe_FK = NULL;

    printf("1. Creer une liste de 2 elements\n");
    printf("2. Creer une liste de n elements\n");
    printf("Choix : ");
    scanf("%d", &choix_FK);

    if (choix_FK == 1) {
        maListe_FK = creer_2_elements_FEUDJIO();
    } else {
        printf("Entrer n : ");
        scanf("%d", &n_FK);
        maListe_FK = creer_n_elements_FEUDJIO(n_FK);
    }

    afficher_liste_FEUDJIO(maListe_FK);

    printf("\nValeur a rechercher : ");
    scanf("%d", &val_FK);

    if (rechercher_valeur_FEUDJIO(maListe_FK, val_FK)) {
        printf("Trouve : VRAI\n");
    } else {
        printf("Trouve : FAUX\n");
    }

    return 0;
}
