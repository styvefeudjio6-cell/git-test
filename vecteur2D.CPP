#include <iostream>
#include <cmath>

using namespace std;

class Vecteur2D
{
private:
    int x;
    int y;
    
public:
    vecteur2D(double x = 0, double y = 0) {
        this->x = x;
        this->y = y;
}
void setx(double x){
    this->x = x;
}
void sety(double y){
    this->y = y;
}
friend double norme(const Vecteur2D& v);
friend Vecteur2D operator+(const Vecteur2D& a, Vecteur2D& b);
friend ostream& operator<<(ostream& os, const Vecteur2D& v);
};

double norme(const Vecteur2D& v) {
    return sqrt (v.x * v.x + v.y * v.y);
}

Vecteur2D operator+(const Vecteur2D& a, const Vecteur2D& b) {
    return Vecteur2D(a.x + b.x, a.y + b.y);
}

ostream& operator<<(ostream& os, const Vecteur2D& v) {
    os << "(" << v.x << "," << v.y << ")";
    return os;
}

int main() {
    Vecteur2D v1(3, 4);
    Vecteur2D v2(1, 2);
    Vecteur2D somme = v1 + v2;
    cout << "La somme des vecteurs v1 et v2 est : " << somme << endl;
    cout << "La norme du vecteur v1 est : " << norme(v1) << endl;
    return 0;
}
