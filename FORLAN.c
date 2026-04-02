#include <stdio.h>

int main(void) {
    int choix;
    float a, b;

    printf("1: Addition\n");
    printf("2: Soustraction\n");
    printf("3: Multiplication\n");
    printf("4: Carre\n");
    printf("5: Module\n");

    printf("Choix: ");
    scanf("%d", &choix);
    if (choix == 1) {
        printf("Entrez deux nombres: ");
        scanf("%f", &a);
        scanf("%f", &b);
        printf("Resultat = %f", a + b);
    }

    else if (choix == 2) {
        printf("Entrez deux nombres: ");
        scanf("%f", &a);
        scanf("%f", &b);
        printf("Resultat = %f", a - b);
    }

    else if (choix == 3) {
        printf("Entrez deux nombres: ");
        scanf("%f", &a);
        scanf("%f", &b);
        printf("Resultat = %f", a * b);
    }

    else if (choix == 4) {
        printf("Entrez un nombre: ");
        scanf("%f", &a);
        printf("Carre = %f", a * a);
    }

    else if (choix == 5) {
        printf("Entrez un nombre: ");
        scanf("%f", &a);

        if (a < 0)
            printf("Module = %f", -a);
        else
            printf("Module = %f", a);
    }

    else {
        printf("Mauvais choix");
    }

    return 0;
}