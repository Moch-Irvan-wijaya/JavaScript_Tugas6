import users from "./data.js";

const index = () => {
  users.map((user, i) => {
    console.log((i + 1) + ". " + user.nama + " | " + user.umur + " | " + user.alamat + " | " + user.email);
  });
  console.log("Jumlah data: " + users.length);
  console.log("-----------------------------");
};

const store = (user) => {
  users.push(user);
};

const destroy = (nomor) => {
  if (!Number.isInteger(nomor) || nomor < 1 || nomor > users.length) {
    return false;
  }
  users.splice(nomor - 1, 1);
  return true;
};

export { index, store, destroy };