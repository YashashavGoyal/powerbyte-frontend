 export function isUserLoggedin() {
  const user = localStorage.getItem('user');
  if (user === "true") {
    return true;
  } else {
    return false;
  }
}
