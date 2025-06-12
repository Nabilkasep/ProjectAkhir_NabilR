import { getMotors, findMotorByName, KurangiStock } from "./data.js";
import { showError, validasiInput } from "./utils.js";

//  fungsi utama
function beliMotor() {
  const daftarMotor = getMotors();
  let lanjut = true;

  while (lanjut) {
    const daftarMotor = getMotors()
  .map((motor) => `- ${motor.name} (stok: ${motor.stock})`)
  .join("\n");

  const input = prompt(`== Daftar Motor Tersedia ==\n${daftarMotor}\n\nMasukkan nama motor yang ingin dibeli:`);

    if (!validasiInput(input)) continue;

    const motor = findMotorByName(input);
    if (!motor) {
      showError("Motor tidak ditemukan.");
      continue;
    }

    if (motor.stock <= 0) {
      showError("Stok motor habis.");
      continue;
    }

    const berhasil = KurangiStock(input);
    if (berhasil) {
      alert(
        `Pembelian berhasil! Anda membeli ${motor.name}. Sisa stok: ${motor.stock}`
      );
    }

    const konfirmasi = prompt("Ingin beli motor lain? (ya/tidak)");
    if (konfirmasi.toLowerCase() !== "ya") {
      lanjut = false;
    }
  }
}

beliMotor();


