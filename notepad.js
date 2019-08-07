const saveButton = document.getElementById("btnSave");
const note = document.getElementById("note");
const notesList= document.getElementById("notesList");
init();

function init() {
const noteText= localStorage.getItem("theNote");
notesList.innerHTML="<div class='note'><h3>" + noteText + "</h3></div>";
}

// This is a variable to store the noteText
saveButton.onclick = function() {
    const noteText = note.value;
    localStorage.setItem("theNote", noteText)//Saves to local
}
