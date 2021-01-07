const input = document.querySelector(`input`);
const div = document.querySelector(`div`);
const passwords = ["jedEN", "DwA"];
const messages = ["super", "działa!"];

const showMessage = (e) => {
  div.textContent = "";

  const value = e.target.value;

  passwords.forEach((password, index) => {
    if (value.toLowerCase() === password.toLowerCase()) {
      div.textContent = messages[index];
      e.target.value = "";
    }
  });
};

input.addEventListener(`input`, showMessage);

input.addEventListener(`focus`, () => {
  input.classList.add("active");
});

input.addEventListener(`blur`, () => {
  input.classList.remove("active");
});
