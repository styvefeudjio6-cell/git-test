#include "fonction.h"
#include<stdio.h>
#include<stdlib.h>
#include<time.h>

int *creerTableau_FEUDJIO(int n_FK) {
    return malloc(n_FK * (sizeof(int)));
}
void remplirAleatoire_FEUDJIO(int tab_FK[], int n_FK){
    for (int i_FK = 0; i_FK < n_FK; i_FK++)
    {
        tab_FK[i_FK] = rand()%100;
    }
}
void remplirClavier_FEUDJIO(int tab_FK[], int n_FK) {
    for (int i_FK = 0; i_FK < n_FK; i_FK++)
    {
        printf("tab[%d] : ", i_FK);
        scanf("%d", &tab_FK[i_FK]);
    }
}
void afficherTableau_FEUDJIO(int tab_FK[], int n_FK){
    printf("[ ");
    for (int i_FK = 0; i_FK < n_FK; i_FK++)
    {
        printf("%d, ", tab_FK[i_FK]);
    }
    printf(" ]\n");
}
//TRIS

void triBulles_FEUDJIO(int tab_FK[], int n_FK){
    for (int i_FK = 0; i_FK < n_FK-1; i_FK++)
    {
        for (int j_FK= 0; j_FK < n_FK-1-i_FK; j_FK++)
        {
            if (tab_FK[j_FK] > tab_FK[j_FK+1])
            {
                int tmp_FK = tab_FK[j_FK];
                tab_FK[j_FK] = tab_FK[j_FK+1];
                tab_FK[j_FK+1] = tmp_FK;
            }
        }
    }
}
void triSelection_FEUDJIO(int tab_FK[], int n_FK) {
    for (int i_FK = 0; i_FK < n_FK; i_FK++)
    {
        for (int j_FK = i_FK+1; j_FK < n_FK; j_FK++)
        {
            int min_FK = i_FK;
            if (tab_FK[j_FK] < tab_FK[min_FK])
            {
                min_FK = j_FK;
            }
            int tmp_FK = tab_FK[i_FK];
            tab_FK[i_FK] = tab_FK[min_FK];
            tab_FK[min_FK] = tmp_FK;
        }
    }
}
void triInsertion_FEUDJIO(int tab_FK[], int n_FK) {
    int i_FK, j_FK, cle_FK;
    j_FK = 1;                              
    while(j_FK < n_FK)
    {
        cle_FK = tab_FK[j_FK];            
        i_FK = j_FK - 1;                  
        while(i_FK >= 0 && tab_FK[i_FK] > cle_FK) 
        {
            tab_FK[i_FK+1] = tab_FK[i_FK]; 
            i_FK--;                         
            tab_FK[i_FK+1] = cle_FK;          
            j_FK++;
        }
    }
}
