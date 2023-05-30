const regForm = document.getElementById("regForm");
const display = document.getElementById("display");

regForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    display.innerHTML = `
    <h2>Registration Details</h2>
    <h3><p><strong>Name:</strong> ${name}</p></h3>
    <h3><p><strong>Email:</strong> ${email}</p></h3>
    <h3><p><strong>Password:</strong> ${password}</p></h3>
  `;
  regForm.reset();
});
