const motors = [
  { name: "DUCATI PANIGALE V4", stock: 3 },
  { name: "Yamaha R1M", stock: 2 },
  { name: "BMWS1000RR", stock: 1 },
  { name: "Kawasaki ZX6RR", stock: 1 },
  { name: "Honda cbr1000RRR", stock: 1 }
];

function getMotors() {
  return motors; 
}

function findMotorByName(name) {
  return motors.find(
    (motor) => motor.name.toLowerCase() === name.toLowerCase()
  );
}

//  mengurangi stok motor berdasarkan nama
function KurangiStock(motorName) {
  const motor = findMotorByName(motorName); 
  if (motor && motor.stock > 0) { 
    motor.stock--; 
    return true; 
  } else {
    return false; 
  }
}

export { getMotors, findMotorByName, KurangiStock };



// getMotors(): Mengembalikan semua data motor.

// findMotorByName(name): Mencari motor berdasarkan nama (tidak peduli kapital/kecil).

// KurangiStock(motorName): Mengurangi stok motor jika tersedia.

// ! kebalikan gaboleh string kalo bukan string error

// 