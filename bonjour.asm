# ===== ZONE DES DONNÉES =====
.data
    message: .asciiz "Bonjour\n"   # texte à afficher (\n = retour ligne)
                                    # .asciiz = chaîne finie par 0


.text
.globl main
main:
    li   $v0, 4          # $v0 = 4 → code du service "afficher une chaîne"
    la   $a0, message    # $a0 = adresse du texte à afficher
    syscall              # on appelle le système → il affiche "Bonjour"

    li   $v0, 10         # $v0 = 10 → code "fin du programme"
    syscall              # on quitte proprement
