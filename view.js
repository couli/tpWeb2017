//implementation
Forme.prototype.paint = function(ctx){
    ctx.lineWidth = this.epaisseur;
    ctx.strokeStyle = this.couleur;
}

Rectangle.prototype.paint = function(ctx) {
    Forme.prototype.paint.call(this, ctx);
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineWidth=this.epaisseur;
    ctx.strokeStyle = this.couleur;
    console.log(""+this.x + " "+ this.y+ " "+ + " "+this.width+ " "+this.height)
    ctx.rect(this.x, this.y, this.x+this.width, this.y+this.height);
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    Forme.prototype.paint.call(this, ctx);
    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    console.log(this.couleur);
    ctx.strokeStyle = this.couleur;
        ctx.stroke();

};


Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

//modification
function modifierListeForme(forme, couleur, id){
    var node = document.createElement("li");
    node.setAttribute("id", id);
    var textnode;

    var button = document.createElement("button");
    button.className = "btn btn-default shape-list-button";
    var span = document.createElement("span");
    span.className = "glyphicon glyphicon-remove-sign";
    /*button.onclick = function() {
          var id = this.parentNode.id;
          console.log(id);
      };*/
    button.appendChild(span);
    node.appendChild(button);

    switch (forme) {
        case 0:
            textnode = document.createTextNode("Rectangle");
            break;
        case 1:
            textnode = document.createTextNode("Line");
            break;
    }
    node.appendChild(textnode);
    node.style.color = couleur;
    document.getElementById('shapeList').appendChild(node);
    return button;
}