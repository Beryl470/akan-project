const form_element = document.getElementById("akan-Form");
console.log(form_element)


form_element.addEventListener("submit", function(e) {
  e.preventDefault();

  const birthdate = document.getElementById("birthdate").value;
  console.log(birthdate)
  const gender = document.getElementById("gender").value;
  const resultDiv = document.getElementById("akan-Name");

  if (!birthdate || !gender) {
    resultDiv.textContent = "Please enter all details!";
    return;
  }

  const date = new Date(birthdate);
  const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday

  const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  const femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    
  let akanName = "";

  if (gender === "male") {
    akanName = maleNames[dayOfWeek];
  } else if (gender === "female") {
    akanName = femaleNames[dayOfWeek];
  }

    resultDiv.textContent = `You were born on a ${daysOfWeek[dayOfWeek]}. Your Akan name is: ${akanName}`;

});
