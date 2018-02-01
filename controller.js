
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentForme = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
    var pencil = this;
    document.getElementById('butRect').onclick = function(){
        pencil.currEditingMode = editingMode.rect;
    }

    document.getElementById('butLine').onclick = function(){
        pencil.currEditingMode = editingMode.line;
    }

    document.getElementById('spinnerWidth').onchange = function(){
        pencil.currLineWidth = this.value;
    }

    document.getElementById('colour').onchange = function(){
        pencil.currColour = this.value;
    }


	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
    this.onInteractionStart = function(DnD){
        switch (this.currEditingMode) {
            case 0:
                this.currentForme = new Rectangle(DnD.x1, DnD.y1, 0, 0, this.currLineWidth, this.currColour);
                break;
            case 1:
                this.currentForme = new Line(DnD.x1, DnD.y1, DnD.x1, DnD.y1, this.currLineWidth, this.currColour);
                console.log(this.currColour);
                console.log(this.currentForme.couleur);

                break;
        }
        drawing.paint(ctx);
        this.currentForme.paint(ctx);
    }

    this.onInteractionUpdate = function(DnD){
        switch (this.currEditingMode) {
            case 0:
                this.currentForme.width = DnD.x2 - this.currentForme.x;
                this.currentForme.height = DnD.y2 - this.currentForme.y;
                break;
            case 1:
                this.currentForme.x2 = DnD.x2;
                this.currentForme.y2 = DnD.y2;
                break;
        }
        drawing.paint(ctx);
        this.currentForme.paint(ctx);
    }

    this.onInteractionEnd = function(DnD){
        switch (this.currEditingMode) {
            case 0:
                this.currentForme.width = DnD.x2 - this.currentForme.x;
                this.currentForme.height = DnD.y2 - this.currentForme.y;
                break;
            case 1:
                this.currentForme.x2 = DnD.x2;
                this.currentForme.y2 = DnD.y2;
                break;
        }
        drawing.ajouterForme(this.currentForme);
        var b = modifierListeForme(this.currEditingMode, this.currColour, drawing.getIndex(this.currentForme));
        b.onclick = function() {
            var id = this.parentNode.id;
            delete drawing.forme[id];
            drawing.paint(ctx);
            var element = document.getElementById(id);
            element.outerHTML = "";
            delete element;
        };
        drawing.paint(ctx);
    }
};


