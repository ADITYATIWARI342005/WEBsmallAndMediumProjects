const button = document.getElementById("btn");
const birthday = document.getElementById("birthday");

const result = document.getElementById("result");
button.addEventListener("click", ageCalculation);
function ageCalculation() {
  const birth = birthday.value;
    const age = getTheAge(birth);
    result.innerText = `${age}`;

}

function getTheAge(birth) {
  const currentDate = new Date();
  const birthdayDate = new Date(birth);
  let year = currentDate.getFullYear() - birthdayDate.getFullYear();
  let month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    year--;
  }
  return year;

}
