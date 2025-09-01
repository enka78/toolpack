export function initButtons() {
  document.querySelectorAll(".tp-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(`Button clicked: ${btn.innerText}`);
    });
  });
}
