// const btn = document.querySelector("#copy-btn");
// const txt = document.querySelector(".copy-text");
// const tooltip = document.querySelector("#tooltip");

// btn.addEventListener("click", function () {
//   const cleaned = txt.value.trim().replace(/;$/, "");
//   if (cleaned !== "") {
//     navigator.clipboard.writeText(cleaned).then(() => {
//       // Show tooltip
//       tooltip.classList.add("show");

//       // Hide after 2 seconds
//       setTimeout(() => {
//         tooltip.classList.remove("show");
//       }, 2000);
//     });
//   } else {
//     alert("Please enter text to copy.");
//   }
// });
<<<<<<< Updated upstream
console.log("testing the source tree");
=======
console.log("sumitkumar deshpande is using source tree");
>>>>>>> Stashed changes
const resendBtn = document.getElementById("resendBtn");
const timerEl = document.getElementById("timer");

let countdown;
const duration = 30; // seconds
const timerKey = "otp_timer_start";

function startTimer(seconds) {
  let remaining = seconds;

  resendBtn.disabled = true;
  timerEl.textContent = remaining;

  countdown = setInterval(() => {
    remaining--;
    timerEl.textContent = remaining;

    if (remaining <= 0) {
      clearInterval(countdown);
      resendBtn.disabled = false;
      resendBtn.textContent = "Resend OTP";
      localStorage.removeItem(timerKey);
    }
  }, 1000);
}

function handleResendClick() {
  // Start new timer
  const startTime = Date.now();
  localStorage.setItem(timerKey, startTime);

  resendBtn.textContent = `Resend OTP (${duration}s)`;
  startTimer(duration);

  // Trigger OTP send logic here (e.g., API call)
  console.log("OTP resent");
}

// Check on page load if timer was running
window.onload = function () {
  const savedTime = localStorage.getItem(timerKey);

  if (savedTime) {
    const elapsed = Math.floor((Date.now() - parseInt(savedTime)) / 1000);
    const remaining = duration - elapsed;

    if (remaining > 0) {
      resendBtn.textContent = `Resend OTP (${remaining}s)`;
      startTimer(remaining);
    } else {
      resendBtn.disabled = false;
      resendBtn.textContent = "Resend OTP";
      localStorage.removeItem(timerKey);
    }
  }
};

// Attach click event to button
resendBtn.addEventListener("click", handleResendClick);
