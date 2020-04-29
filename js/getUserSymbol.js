function getUserSymbol(UserID) {
  return "User=" + UserID + "&SymbolID=" + Math.random().toString(36).substring(2, 15) + "-" + Math.random().toString(36).substring(2, 15);
}