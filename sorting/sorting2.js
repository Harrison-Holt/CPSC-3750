var numbernames=0;
var names = new Array();
function SortNames() {
   thename=document.theform.newname.value;
   thename = thename.toUpperCase();
   names[numbernames]=thename;
   numbernames++;
   names.sort();
   var output = "";
   for (var i=0; i<names.length; i++) {
       output += (i+1) + ". " + names[i] + "\n";
   }
   document.theform.sorted.value=output;
}
