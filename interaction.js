
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
    // Définir i0ci les attributs de la 'classe'
    var x1= 0;
    var y1= 0;
    var x2 = 0;
    var y2 = 0;
    var dragok = false;
        console.log(interactor)

    // Developper les 3 fonctions gérant les événements


        //pression
    this.mousedown = function(evt) {

        //console.log('titi');
        this.x1=getMousePosition(canvas,evt).x;
        this.y1=getMousePosition(canvas,evt).y;
        console.log(this.x1) ;
        console.log(this.y1) ;
        this.dragok = true;

        //ajout de la'appel aux fonctions
        console.log(interactor)
        interactor.onInteractionStart(this);

    }.bind(this);

//deplacement
    this.mousemove = function(evt){
        if (this.dragok){
            this.x2=getMousePosition(canvas,evt).x;
            this.y2=getMousePosition(canvas,evt).y;
            interactor.onInteractionUpdate(this);

        }
    }.bind(this);

//relachement
    this.mouseup = function(evt){
        this.dragok = false;
        console.log(this.x2) ;
        console.log(this.y2) ;
        interactor.onInteractionEnd(this);

    }.bind(this);


    // Associer les fonctions précédentes aux évènements du canvas.

    canvas.addEventListener('mousedown', this.mousedown, false);
    canvas.addEventListener('mousemove', this.mousemove, false);
    canvas.addEventListener('mouseup', this.mouseup, false);




};

// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};

