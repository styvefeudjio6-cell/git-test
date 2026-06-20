#include<iostream>
#include<string>
#include<cmath>

using namespace std;

class Vecteurs2D{
    private :
        double X;
        double Y;
        static int nbObjets;
    public:
        Vecteurs2D();
        Vecteurs2D(double x, double y);
        Vecteurs2D(Vecteurs2D& v);
        double getX();
        double getY();
        static int getNbObjets();
        void setX(double x);
        void setY(double y);
        string ToString();
        bool Equals(Vecteurs2D v);
        double norme();
};

class Vecteurs3D : public Vecteurs2D{
    private : 
        double Z;
        static int nbObjets;
    public:
        Vecteurs3D();
        Vecteurs3D(double x, double y, double z);
        Vecteurs3D (const Vecteurs3D& v);
        double getZ();
        static int getNbObjets();
        void setZ(double x);
        string ToString();
        bool Equals(Vecteurs3D v);
        double norme();
};