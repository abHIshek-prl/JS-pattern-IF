var i = 1;
var j = 1;
var size = 5;
for(i = 1; i <= size; i++) {
    var row = " ";
    for(j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
