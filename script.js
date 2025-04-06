function calculatePayable() {
  const amount = parseFloat(document.getElementById("loanAmount").value);
  const duration = parseInt(document.getElementById("duration").value);

  if (!isNaN(amount) && !isNaN(duration)) {
    const interestRate = 0.02;
    const totalInterest = amount * interestRate * duration;
    const totalPayable = amount + totalInterest;
    document.getElementById("payable").value = totalPayable.toFixed(2) + " ৳";
  } else {
    document.getElementById("payable").value = "";
  }
}

function validateLoanForm() {
  const requiredFields = [
    "name", "village", "postOffice", "thana", "district",
    "income", "profession", "reason", "loanAmount",
    "duration", "bkash"
  ];

  for (let id of requiredFields) {
    const el = document.getElementById(id);
    if (!el.value.trim()) {
      alert("সব ঘর অবশ্যই পূরণ করতে হবে!");
      el.focus();
      return false;
    }
  }

  alert("আবেদন সফলভাবে গ্রহণ করা হয়েছে!");
  return true;
}
