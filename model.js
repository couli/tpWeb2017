
 //Implémenter ici les 4 classes du modèle.
 //N'oubliez pas l'héritage
//fonction drawing
function Drawing() {

    this.forme = [];

    this.ajouterForme = function (forme) {
        this.forme.push(forme);
    }

//retourne la forme
    this.getForms = function () {
        return this.forme;
    }
//retoune l'index
    this.getIndex = function (forme) {
        return this.forme.indexOf(forme);
    }
}

//classe forme
function Forme(epaisseur,couleur){
    this.couleur=couleur;
    this.epaisseur=epaisseur;
}

//heritage

var inheritsFrom=function (child,parent) {
    child.prototype= Object.create(parent.prototype);

}

//classe ligne
    function Line(x1, y1, x2, y2, epaisseur, couleur){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        Forme.call(this, epaisseur, couleur);

    }
    Line.prototype = new Forme();


//classe rectangle
    function Rectangle(x, y, width, height, epaisseur, couleur){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        console.log("toto " + x + this.x);
        Forme.call(this, epaisseur, couleur);

    }
    Rectangle.prototype = new Forme();
