#include"vecteur.h"

Vecteurs2D::Vecteurs2D(){
    this->X = 0.00;
    this->Y = 0.00;
}

int Vecteurs2D::nbObjets = 0;

Vecteurs2D::Vecteurs2D(double x, double y){
    this->X = x;
    this->Y = y; 

    nbObjets++;
}

Vecteurs2D::Vecteurs2D(Vecteurs2D& v){
    this->X = v.X;
    this->Y = v.Y;

}

int Vecteurs2D::getNbObjets(){
    return nbObjets;
}

double Vecteurs2D::getX(){
    return X;
}

double Vecteurs2D::getY(){
    return Y;
}

void Vecteurs2D::setX(double x){
    this->X = x;
}

void Vecteurs2D::setY(double y){
    this->Y = y;
}



string Vecteurs2D::ToString(){
    return "X = "+to_string(X)+" - Y = "+to_string(Y);
}

bool Vecteurs2D::Equals(Vecteurs2D v){
    if((X==v.X) && (Y==v.Y)){
        return true;
    }else{
        return false;
    } 
}

double Vecteurs2D::norme(){
    double somme = (X*X) + (Y*Y);

    return sqrt(somme);
}


// vecteurs3D

int Vecteurs3D::nbObjets = 0;

int Vecteurs3D::getNbObjets(){
    return nbObjets;
}
 
double Vecteurs3D::getZ(){
    return Z;
}

void Vecteurs3D::setZ(double z){
    this->Z = z;
}

Vecteurs3D::Vecteurs3D():Vecteurs2D(){
    this->Z = 0.00;
}

Vecteurs3D::Vecteurs3D(double x, double y, double z):Vecteurs2D(x,y){
    this->Z = z;

    nbObjets++;
}

Vecteurs3D::Vecteurs3D(const Vecteurs3D& v){
    this->Z = v.Z;

    // nbObjets++;
}
string Vecteurs3D::ToString(){
    return "X = "+to_string(getX())+" - Y = "+to_string(getY())+" - Z = "+to_string(Z);
}

bool Vecteurs3D::Equals(Vecteurs3D v){
    if((getX()==v.getX()) && (getY()==v.getY()) && (Z==v.Z)){
        return true;
    }else{
        return false;
    } 
}

double Vecteurs3D::norme(){
    double somme = (getX()*getX()) + (getY()*getY()) + (Z*Z);

    return sqrt(somme);
}