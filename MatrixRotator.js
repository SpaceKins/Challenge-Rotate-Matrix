/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *  
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
exports.MatrixRotator = MatrixRotator;
var Direction = require("./Direction").Direction;

function MatrixRotator(matrix){
  this.matrix = matrix; 

 // console.log(this.matrix);
};

//                                         |-- Must be Direction.CW
//                                         v        or Direction.CCW
MatrixRotator.prototype.rotate = function(direction) {
  // do work here

  var newRows=[];

  for(var i=0;i<this.matrix.length;i++)
  {
    newRows.push([]);
  }

  //console.log("New Rows =" + this.matrix.length);
  //console.log(newRows);
  for(var i=0;i<this.matrix.length;i++)
  {
  //  console.log(this.matrix[i]);
  	for(var j=0;j<this.matrix[i].length;j++)
  	{
  //    console.log("adding " +this.matrix[i][j] + " to row " + j)    ;
  		 newRows[j].unshift(this.matrix[i][j]);
  	}
  }

  //console.log(newRows);
  this.matrix=newRows;
  // must be a valid Direction, see Direction.js
  MatrixRotator(this.matrix);

};



