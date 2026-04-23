#include <stdio.h>

void triBulles(int tab[], int n) {
    for (int i = 0; i < n-1 ; i++)
    {
        for (int j = 0; j < n-i-1 ; j++)
        if (tab[j] > tab[j+1]) 
        {
            int tmp = tab[j];
            tab[j] = tab[j+1];
            tab[j+1] = tmp;
        }
        
    }
    
}void triInsertion(int tab[], int n) {
    for (int i = 1; i < n; i++) {
        int cle = tab[i];
        int j = i - 1;
        
        while (j >= 0 && tab[j] > cle) {
            tab[j+1] = tab[j];
            j--;
        }
        tab[j+1] = cle;
    }
}

int main (void) {
    int tab[] = {9, 4, 7, 2, 6};
    int n = 5;
    triBulles(tab, n);
    triInsertion(tab, n);
    for (int i = 0; i < n; i++)
    {
        printf("%d  ", tab[i]);
    }
    return 0;
}
void afficherTableau(int tab[], int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("%d ", tab[i]);
    }
    
}
