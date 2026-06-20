#include "Etudiant.h"
#include <iostream>

int main() {
    Etudiant e;
    e.setNomEtud("Ali");
    e.setMatricule(123);
    e.setNbrNotes(10);

    float notes[] = {2, 8, 9, 11, 1, 6, 5, 12, 15, 19};
    for (int i = 0; i < 10; i++) {
        e.setTabNotes(notes[i], i);
    }

    e.affichage();

    std::cout << "Non trie: ";
    for (int i = 0; i < 10; i++) {
        std::cout << e.getTabNotes()[i];
        if (i < 9) std::cout << ", ";
    }
    std::cout << "\n";

    e.trierNotes();

    std::cout << "Trie: ";
    for (int i = 0; i < 10; i++) {
        std::cout << e.getTabNotes()[i];
        if (i < 9) std::cout << ", ";
    }
    std::cout << "\n";

    return 0;
}
