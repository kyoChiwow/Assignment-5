// Time and Date Function here
function getDateAndTime () {
  const thisMoment = new Date();
  return thisMoment;
}
// ********************************


// Interactive Buttons Function
function showSection (id){

  // Hide all the sections
  document.getElementById('card-container').classList.add('hidden');
  document.getElementById('history-container').classList.add('hidden');

  // Show the clicked id section
  document.getElementById(id).classList.remove('hidden');
}
// ****************************************************************************

