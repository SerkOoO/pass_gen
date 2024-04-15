function generate_pass() {

    //Get HTML element

  const span_pass = document.getElementById("password");
  const length = parseInt(document.getElementById("length_pass").value);

  // variable declaration
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!:;,*ù$^=)àç_è-(é&";
    let password = "";



  if (isNaN(length) || length === 0) {
    alert("La longueur doit être un nombre supérieur à zéro.");
    return;
  }
 
  // generate the password
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  span_pass.innerHTML = password;

  return password;
}
