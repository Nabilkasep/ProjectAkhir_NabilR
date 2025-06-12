function showError(message) {
  alert("Error: " + message);
}

function validasiInput(input) {
  if (!input) {
    showError("Input tidak boleh kosong.");
    return false; 
  }
  if (typeof input !== "string") {
    showError("Input harus berupa teks."); 
    return false; 
  }

  if (input.length < 3) {
    showError("Nama motor terlalu pendek."); 
    return false;
  }

  return true;
}

export { showError, validasiInput };
