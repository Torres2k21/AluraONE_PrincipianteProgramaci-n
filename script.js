document.getElementById('encryptBtn').addEventListener('click', function () {
  let inputText = document.getElementById('inputText').value;
  // Ejemplo simple de encriptación (Base64)
  let encryptedText = btoa(inputText);
  alert("Texto encriptado: " + encryptedText);
});

document.getElementById('decryptBtn').addEventListener('click', function () {
  let inputText = document.getElementById('inputText').value;
  try {
    // Ejemplo simple de desencriptación (Base64)  
    let decryptedText = atob(inputText);
    alert("Texto desencriptado: " + decryptedText);
  } catch (e) {
    alert("Texto inválido para desencriptar");
  }
});
