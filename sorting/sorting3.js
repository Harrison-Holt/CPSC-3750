var numbernames=0;
var names = new Array();

function SortNames() {
   // Get the name from the text field
   thename=document.theform.newname.value;
   // Convert the name to uppercase
   thename = thename.toUpperCase();
   // Add the name to the array
   names[numbernames]=thename;
   // Increment the counter
   numbernames++;
   // Sort the array
   names.sort();
   // Create a numbered list of names and display them in the textarea
   document.theform.sorted.value=names.map((name, index) => `${index + 1}. ${name}`).join("\n");
}

// Listen for the ENTER key
document.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    // Prevent the default action of the ENTER key
    event.preventDefault();
    // Call the SortNames() function
    SortNames();
  }
});
