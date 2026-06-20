#include<stdio.h>
#include<stdlib.h>
#include<time.h>

void tri_bulle(int tab[], int n){
    int i, j, cle;

    for ( i = 0; i < n-1; i++)
    {
        for ( j = 0; j < n-i-1; j++)
        {
            if (tab[j] > tab[j+1])
            {
                cle=tab[j];
                tab[j]=tab[j+1];
                tab[j+1]=cle;
                
            }
            
        }
        
    }
    
}
void affichertableau(int tab[], int n){
    for (int i = 0; i < n; i++)
    {
        printf("%d ", tab[i]);
    }
    
}

int* creertableau(int n) {
    return malloc(n * sizeof(int));
}
void remplirtableau(int tab[], int n){
    for (int i = 0; i < n; i++)
    {
        printf("tab[%d] = ", i);
        scanf("%d", &tab[i]);
    }
    
}

int main(void){
    int n;
    printf("entrer la taille du tableau : ");
    scanf("%d",&n);
    int *tab = creertableau(n);
    remplirtableau(tab, n);
    tri_bulle(tab, n);
    affichertableau(tab, n);
    free (tab);
    return 0;
}