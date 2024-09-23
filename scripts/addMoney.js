document.getElementById('noakhali-donate-btn').addEventListener('click', function () {
  const addMoney = getInputValue('noakhali-donation-input');
  const walletBalance = getInputText('current-balance');
  if (isNaN(addMoney) || addMoney > walletBalance || addMoney <= 0) {
    alert('Please enter a valid number or Check your wallet balance!')

    return;
  }

  else {
    const cardBalance = getInputText('noakhali-balance');
    const newCardbalance = addMoney + cardBalance;
    document.getElementById('noakhali-balance').innerText = newCardbalance;

    // Deducting Money from wallet

    const newWalletBalance = walletBalance - addMoney;
    document.getElementById('current-balance').innerText = newWalletBalance;

    // Adding your donation history
    
    const dateAndTime = getDateAndTime();
    console.log(dateAndTime);
    const log = document.createElement('div');
    log.innerHTML = `

      <div class="border mt-8 lg:w-[63%] mx-auto p-8 rounded-xl">
      <h1 class="font-bold text-xl text-main">
        ${addMoney} Taka is Donated for Famine-2024 at Noakhali, Bangladesh
      </h1>
      <p class="font-light text-mainSeventypOpacity text-base">Date: ${dateAndTime}</p>
      </div>

    `;
    document.getElementById('history-container').appendChild(log);

    // Showing the modal
    document.getElementById('my-modal-5').showModal();
  }
})