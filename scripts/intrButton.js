// Donation Button Function
document.getElementById('donation-btn-intr').addEventListener('click', function(){
  showSection('card-container');
  
  document.getElementById('donation-btn-intr').classList.remove('bg-transparent', 'font-medium', 'text-xl', 'text-mainSeventypOpacity');
  document.getElementById('donation-btn-intr').classList.add('bg-buttonBg', 'font-semibold', 'text-main', 'text-xl');
  document.getElementById('history-btn-intr').classList.remove('bg-buttonBg', 'font-semibold', 'text-main', 'text-xl');
  document.getElementById('history-btn-intr').classList.add('bg-transparent', 'font-medium', 'text-xl', 'text-mainSeventypOpacity');
})
// **********************************************************************************


// History Button Function
document.getElementById('history-btn-intr').addEventListener('click', function(){
  showSection('history-container');

  document.getElementById('history-btn-intr').classList.remove('bg-transparent', 'font-medium', 'text-xl', 'text-mainSeventypOpacity');
  document.getElementById('history-btn-intr').classList.add('bg-buttonBg', 'font-semibold', 'text-main', 'text-xl');
  document.getElementById('donation-btn-intr').classList.remove('bg-buttonBg', 'font-semibold', 'text-main', 'text-xl');
  document.getElementById('donation-btn-intr').classList.add('bg-transparent', 'font-medium', 'text-xl', 'text-mainSeventypOpacity');
  
})
// **********************************************************************************