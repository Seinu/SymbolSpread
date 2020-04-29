function getuserID() {
  return Math.random().toString(36).substring(2, 15) + "-" + Math.random().toString(36).substring(2, 15);
}
function includeUser() {
  var UserID = getuserID();
  e = document.getElementsByName("User");
  e[0].setAttribute("href", UserID);

}