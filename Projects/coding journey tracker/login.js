let data = [];
let user = {
  email: "",
  pass: "",
};

let pass = document.getElementById("pass");
let email = document.getElementById("email");

function assignData() {
  user.email = email.value;
  user.pass = pass.value;
  data.push(user);
}

function saveDataToLocalStorage() {
  localStorage.setItem("userdata", JSON.stringify(data));
}

const logBtn = document.querySelector("#log-btn");
const signBtn = document.querySelector("#sign-btn");

assignData();
saveDataToLocalStorage();

logBtn.addEventListener("click", () => {
  const localStorageData = JSON.parse(localStorage.getItem("userdata"));
  console.log(localStorageData);
});
