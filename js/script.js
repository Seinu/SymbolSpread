// If the user clicks in the window, set the background color of <body> to yellow
function FlipSymbol(ID) {
  var SymbolSet, SymbolCount, FileExt;
  var e = document.getElementById("symbol");
  var symbolType = e.options[e.selectedIndex].value;
  if (symbolType == "Futhark") {
    SymbolSet = "futhark";
    SymbolCount = 24;
    FileExt = "png";
  }
  if (symbolType == "Crowley") {
    SymbolSet = "thoth";
    SymbolCount = 78;
    FileExt = "JPG";
    var e = document.getElementById("MajorArc");
    if (e.checked == true) {
      SymbolCount = 22;
    }
  }
  var Symbol = Math.floor(Math.random() * SymbolCount);
  if (symbolType == "Futhark") {
    switch (Symbol) {
      case 0:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='http://www.sunnyway.com/runes/meanings.html' target='_blank'>Fehu</a>";
        break;
      case 1:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='http://www.sunnyway.com/runes/meanings.html' target='_blank'>Uruz</a>";
        break;
      case 2:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='http://www.sunnyway.com/runes/meanings.html' target='_blank'>Thurisaz</a>";
        break;
      case 3:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='http://www.sunnyway.com/runes/meanings.html' target='_blank'>Ansuz</a>";
        break;
      case 4:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='http://www.sunnyway.com/runes/meanings.html' target='_blank'>Raidho</a>";
        break;
      case 5:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='http://www.sunnyway.com/runes/meanings.html' target='_blank'>Kenaz</a>";
        break;
      case 6:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='http://www.sunnyway.com/runes/meanings.html' target='_blank'>Gebo</a>";
        break;
      case 7:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='http://www.sunnyway.com/runes/meanings.html' target='_blank'>Wunjo</a>";
        break;
      case 8:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='http://www.sunnyway.com/runes/meanings.html' target='_blank'>Hagalaz</a>";
        break;
      case 9:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='http://www.sunnyway.com/runes/meanings.html' target='_blank'>Nauthiz</a>";
        break;
      case 10:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='http://www.sunnyway.com/runes/meanings.html' target='_blank'>Isa</a>";
        break;
      case 11:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='http://www.sunnyway.com/runes/meanings.html' target='_blank'>Jera</a>";
        break;
      case 12:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='http://www.sunnyway.com/runes/meanings.html' target='_blank'>Eihwaz</a>";
        break;
      case 13:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='http://www.sunnyway.com/runes/meanings.html' target='_blank'>Perthro</a>";
        break;
      case 14:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='http://www.sunnyway.com/runes/meanings.html' target='_blank'>Algiz</a>";
        break;
      case 15:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='http://www.sunnyway.com/runes/meanings.html' target='_blank'>Sowilo</a>";
        break;
      case 16:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='http://www.sunnyway.com/runes/meanings.html' target='_blank'>Tiwaz</a>";
        break;
      case 17:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='http://www.sunnyway.com/runes/meanings.html' target='_blank'>Berkano</a>";
        break;
      case 18:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='http://www.sunnyway.com/runes/meanings.html' target='_blank'>Ehwaz</a>";
        break;
      case 19:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='http://www.sunnyway.com/runes/meanings.html' target='_blank'>Mannaz</a>";
        break;
      case 20:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='http://www.sunnyway.com/runes/meanings.html' target='_blank'>Laguz</a>";
        break;
      case 21:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='http://www.sunnyway.com/runes/meanings.html' target='_blank'>Ingwaz</a>";
        break;
      case 22:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='http://www.sunnyway.com/runes/meanings.html' target='_blank'>Dagaz</a>";
        break;
      case 23:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='http://www.sunnyway.com/runes/meanings.html' target='_blank'>Othala</a>";
        break;
      default:
      // code block
    }
  }
  if (symbolType == "Crowley") {
    switch (Symbol) {
      case 0:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/The_Fool_(Tarot_card)' target='_blank'>The Fool</a>";
        break;
      case 1:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/The_Magician_(Tarot_card)' target='_blank'>The Magician</a>";
        break;
      case 2:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/The_High_Priestess_(Tarot_card)' target='_blank'>The Priestess</a>";
        break;
      case 3:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/The_Empress_(Tarot_card)' target='_blank'>The Empress</a>";
        break;
      case 4:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/The_Emperor_(Tarot_card)' target='_blank'>The Emperor</a>";
        break;
      case 5:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/The_Hierophant' target='_blank'>The Hierophant</a>";
        break;
      case 6:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/The_Lovers_(Tarot_card)' target='_blank'>The Lovers</a>";
        break;
      case 7:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/The_Chariot_(Tarot_card)' target='_blank'>The Chariot</a>";
        break;
      case 8:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Justice_(Tarot_card)' target='_blank'>Justice</a>";
        break;
      case 9:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/The_Hermit_(Tarot_card)' target='_blank'>The Hermit</a>";
        break;
      case 10:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Wheel_of_Fortune_(Tarot_card)' target='_blank'>Fortune</a>";
        break;
      case 11:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Strength_(Tarot_card)' target='_blank'>Strength</a>";
        break;
      case 12:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/The_Hanged_Man_(Tarot_card)' target='_blank'>Hanged Man</a>";
        break;
      case 13:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Death_(Tarot_card)'' target='_blank'>Death</a>";
        break;
      case 14:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Temperance_(Tarot_card)' target='_blank'>Temperance</a>";
        break;
      case 15:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/The_Devil_(Tarot_card)' target='_blank'>The Devil</a>";
        break;
      case 16:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/The_Tower_(Tarot_card)' target='_blank'>The Tower</a>";
        break;
      case 17:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/The_Star_(Tarot_card)' target='_blank'>The Star</a>";
        break;
      case 18:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/The_Moon_(Tarot_card)' target='_blank'>The Moon</a>";
        break;
      case 19:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/The_Sun_(Tarot_card)' target='_blank'>The Sun</a>";
        break;
      case 20:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Judgement_(Tarot_card)' target='_blank'>Judgement</a>";
        break;
      case 21:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/The_World_(Tarot_card)' target='_blank'>The World</a>";
        break;
      case 22:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Ace of Wands</a>";
        break;
      case 23:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Two of Wands</a>";
        break;
      case 24:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Three of Wands</a>";
        break;
      case 25:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Four of Wands</a>";
        break;
      case 26:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Five of Wands</a>";
        break;
      case 27:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Six of Wands</a>";
        break;
      case 28:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Seven of Wands</a>";
        break;
      case 29:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Eight of Wands</a>";
        break;
      case 30:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Nine of Wands</a>";
        break;
      case 31:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Ten of Wands</a>";
        break;
      case 32:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Page of Wands</a>";
        break;
      case 33:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Knight of Wands</a>";
        break;
      case 34:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Queen of Wands</a>";
        break;
      case 35:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>King of Wands</a>";
        break;
      case 36:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Ace of Cups</a>";
        break;
      case 37:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Two of Cups</a>";
        break;
      case 38:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Three of Cups</a>";
        break;
      case 39:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Four of Cups</a>";
        break;
      case 40:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Five of Cups</a>";
        break;
      case 41:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Six of Cups</a>";
        break;
      case 42:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Seven of Cups</a>";
        break;
      case 43:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Eight of Cups</a>";
        break;
      case 44:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Nine of Cups</a>";
        break;
      case 45:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Ten of Cups</a>";
        break;
      case 46:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Page of Cups</a>";
        break;
      case 47:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Knight of Cups</a>";
        break;
      case 48:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Queen of Cups</a>";
        break;
      case 49:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>King of Cups</a>";
        break;
      case 50:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Ace of Swords</a>";
        break;
      case 51:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Two of Swords</a>";
        break;
      case 52:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Three of Swords</a>";
        break;
      case 53:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Four of Swords</a>";
        break;
      case 54:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Five of Swords</a>";
        break;
      case 55:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Six of Swords</a>";
        break;
      case 56:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Seven of Swords</a>";
        break;
      case 57:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Eight of Swords</a>";
        break;
      case 58:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Nine of Swoords</a>";
        break;
      case 59:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Ten of Swords</a>";
        break;
      case 60:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Page of Swords</a>";
        break;
      case 61:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Knight of Swords</a>";
        break;
      case 62:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Queen of Swords</a>";
        break;
      case 63:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>King of Swords</a>";
        break;
      case 64:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Ace of Disks</a>";
        break;
      case 65:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Two of Disks</a>";
        break;
      case 66:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Three of Disks</a>";
        break;
      case 67:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Four of Disks</a>";
        break;
      case 68:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Five of Disks</a>";
        break;
      case 69:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Six of Disks</a>";
        break;
      case 70:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Seven of Disk</a>";
        break;
      case 71:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Eight of Disks</a>";
        break;
      case 72:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Nine of Disks</a>";
        break;
      case 73:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Ten of Disks</a>";
        break;
      case 74:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Page of Disks</a>";
        break;
      case 75:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Knight of Disks</a>";
        break;
      case 76:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>Queen of Disks</a>";
        break;
      case 77:
        document.getElementById("Tspan" + ID).innerHTML = "<a href='https://en.wikipedia.org/wiki/Minor_Arcana' target='_blank'>King of Disks</a>";
        break;
      default:
      // code block
    }
  }
  var e = document.getElementsByName("User");
  var UserID = e[0].getAttribute("href");
  var SymbolUUID = getUserSymbol(UserID);
  var UUID = processUserSymbol(SymbolUUID);
  document.getElementById("Canvas" + ID).setAttribute("href", UUID);
  document.getElementById("Canvas" + ID).style.backgroundImage = "url(/imgs/" + SymbolSet + "/" + Symbol + "." + FileExt + ")";
}

function SetSpread() {
  var ids = document.querySelectorAll('[id^="td"]');
  var x;
  for (x = 0; x < ids.length; x++) {
    ids[x].style.visibility = "hidden";
  }
  var ids = document.querySelectorAll('[id^="Tspan"]');
  var x;
  for (x = 0; x < ids.length; x++) {
    ids[x].innerHTML = "";
  }
  var ids = document.querySelectorAll('[id^="Canvas"]');
  var x;
  var e = document.getElementById("symbol");
  var symbolType = e.options[e.selectedIndex].value;
  var blank;
  if (symbolType == "Futhark") {
    blank = "url(/imgs/futhark/back.png)";
    var MajorArc = document.querySelectorAll(".MajorArc");
    MajorArc[0].style.visibility = "hidden";
    MajorArc[1].style.visibility = "hidden";
  }
  if (symbolType == "Crowley") {
    blank = "url(/imgs/thoth/back.JPG)";
    var MajorArc = document.querySelectorAll(".MajorArc");
    MajorArc[0].style.visibility = "visible";
    MajorArc[1].style.visibility = "visible";
  }
  for (x = 0; x < ids.length; x++) {
    ids[x].style.backgroundImage = blank;
  }
  var e = document.getElementById("spread");
  var spreadType = e.options[e.selectedIndex].value;
  if (spreadType == "Single") {
    document.getElementById("td00").style.visibility = "visible";
  }
  if (spreadType == "4Quarters") {
    document.getElementById("td10").style.visibility = "visible";
    document.getElementById("Bspan10").innerHTML = "Greatest Inner Strengths and Weaknesses in the Present Situation.";
    document.getElementById("td00").style.visibility = "visible";
    document.getElementById("Bspan00").innerHTML = "Inner Strengths and Weaknesses in the Present Situation.";
    document.getElementById("td20").style.visibility = "visible";
    document.getElementById("Bspan20").innerHTML = "Inner Strengths and Weaknesses in the Present Situation.";
    document.getElementById("td01").style.visibility = "visible";
    document.getElementById("Bspan01").innerHTML = "Immediate future.";
    document.getElementById("td03").style.visibility = "visible";
    document.getElementById("Bspan03").innerHTML = "Immediate future.";
    document.getElementById("td04").style.visibility = "visible";
    document.getElementById("Bspan04").innerHTML = "Current difficulties.";
    document.getElementById("td14").style.visibility = "visible";
    document.getElementById("Bspan14").innerHTML = "Greatest Current difficulties.";
    document.getElementById("td24").style.visibility = "visible";
    document.getElementById("Bspan24").innerHTML = "Current difficulties.";
    document.getElementById("td21").style.visibility = "visible";
    document.getElementById("Bspan21").innerHTML = "Outcome/Long-term future.";
    document.getElementById("td23").style.visibility = "visible";
    document.getElementById("Bspan23").innerHTML = "Outcome/Long-term future.";
    document.getElementById("td12").style.visibility = "visible";
    document.getElementById("Bspan12").innerHTML = "Current situation.";
  }
  if (spreadType == "PPF") {
    document.getElementById("td00").style.visibility = "visible";
    document.getElementById("Bspan00").innerHTML = "Past";
    document.getElementById("td01").style.visibility = "visible";
    document.getElementById("Bspan01").innerHTML = "Present";
    document.getElementById("td02").style.visibility = "visible";
    document.getElementById("Bspan02").innerHTML = "Future";
  }
  if (spreadType == "3Symbol") {
    document.getElementById("td00").style.visibility = "visible";
    document.getElementById("Bspan00").innerHTML = "The Overview of the situation.";
    document.getElementById("td01").style.visibility = "visible";
    document.getElementById("Bspan01").innerHTML = "The Challenge that you are facing in this situation.";
    document.getElementById("td02").style.visibility = "visible";
    document.getElementById("Bspan02").innerHTML = "The Action you should take OR avoid in this situation.";
  }
  if (spreadType == "4Symbol") {
    document.getElementById("td00").style.visibility = "visible";
    document.getElementById("Bspan00").innerHTML = "The character of the issue";
    document.getElementById("td01").style.visibility = "visible";
    document.getElementById("Bspan01").innerHTML = "The condition from which the condition arose";
    document.getElementById("td02").style.visibility = "visible";
    document.getElementById("Bspan02").innerHTML = "The direction in which events are flowing";
    document.getElementById("td03").style.visibility = "visible";
    document.getElementById("Bspan03").innerHTML = "Likely outcome of the situation";
  }
  if (spreadType == "4Ele") {
    document.getElementById("td01").style.visibility = "visible";
    document.getElementById("Bspan01").innerHTML = "North: Earth - Physical";
    document.getElementById("td10").style.visibility = "visible";
    document.getElementById("Bspan10").innerHTML = "West: Water - Emotional";
    document.getElementById("td21").style.visibility = "visible";
    document.getElementById("Bspan21").innerHTML = "South: Fire - Destiny";
    document.getElementById("td12").style.visibility = "visible";
    document.getElementById("Bspan12").innerHTML = "East: Air - Knowledge";
  }
  if (spreadType == "NorseSpread") {
    document.getElementById("td11").style.visibility = "visible";
    document.getElementById("Bspan11").innerHTML = "The person asking the question and the direction in which he/she is coming from.";
    document.getElementById("td01").style.visibility = "visible";
    document.getElementById("Bspan01").innerHTML = "The spiritual forces involved.";
    document.getElementById("td10").style.visibility = "visible";
    document.getElementById("Bspan10").innerHTML = "Everything that is related to the question from the immediate past.";
    document.getElementById("td21").style.visibility = "visible";
    document.getElementById("Bspan21").innerHTML = "Hidden aspects to the questioner, something the questioner may have overlooked.";
    document.getElementById("td12").style.visibility = "visible";
    document.getElementById("Bspan12").innerHTML = "The answer to be read in conjunction with the previous four Symbols.";
  }
  if (spreadType == "ShamanSpread") {
    document.getElementById("td11").style.visibility = "visible";
    document.getElementById("Bspan11").innerHTML = "The power to call upon.";
    document.getElementById("td01").style.visibility = "visible";
    document.getElementById("Bspan01").innerHTML = "The challenge.";
    document.getElementById("td10").style.visibility = "visible";
    document.getElementById("Bspan10").innerHTML = "The present, and current influences.";
    document.getElementById("td21").style.visibility = "visible";
    document.getElementById("Bspan21").innerHTML = "The future, and the directions the energies are flowing.";
    document.getElementById("td12").style.visibility = "visible";
    document.getElementById("Bspan12").innerHTML = "The past, and the source of the problem.";
  }
  if (spreadType == "3Life") {
    document.getElementById("td11").style.visibility = "visible";
    document.getElementById("Bspan11").innerHTML = "The present view of the situation - what is occurring now.";
    document.getElementById("td01").style.visibility = "visible";
    document.getElementById("Bspan01").innerHTML = "Future incarnation and how what is occurring now will affect that incarnation.";
    document.getElementById("td10").style.visibility = "visible";
    document.getElementById("Bspan10").innerHTML = "The future of this life and what could happen.";
    document.getElementById("td21").style.visibility = "visible";
    document.getElementById("Bspan21").innerHTML = "The past incarnation and what baggage you are bringing with you that is affecting what is going on now.";
    document.getElementById("td12").style.visibility = "visible";
    document.getElementById("Bspan12").innerHTML = "The birth or childhood or your present life and how that has affected what is going on now.";
  }
  if (spreadType == "Ema4Ele") {
    document.getElementById("td01").style.visibility = "visible";
    document.getElementById("Bspan01").innerHTML = "Fire - Primordial Expansion";
    document.getElementById("td10").style.visibility = "visible";
    document.getElementById("Bspan10").innerHTML = "Air - Self-Knowledge";
    document.getElementById("td12").style.visibility = "visible";
    document.getElementById("Bspan12").innerHTML = "Water - Creation";
    document.getElementById("td21").style.visibility = "visible";
    document.getElementById("Bspan21").innerHTML = "Earth - Formation";
  }
  if (spreadType == "5Symbol") {
    document.getElementById("td00").style.visibility = "visible";
    document.getElementById("Bspan00").innerHTML = "The present view of the situation - what is occurring now.";
    document.getElementById("td01").style.visibility = "visible";
    document.getElementById("Bspan01").innerHTML = "The obstacle or challenge that you are facing in this situation.";
    document.getElementById("td02").style.visibility = "visible";
    document.getElementById("Bspan02").innerHTML = "The goal that you should try to or wish to achieve in this situation.";
    document.getElementById("td03").style.visibility = "visible";
    document.getElementById("Bspan03").innerHTML = "What your worry over the situation is. (This worry can be conscious or unconscious one.)";
    document.getElementById("td04").style.visibility = "visible";
    document.getElementById("Bspan04").innerHTML = "What the final result of the question will be IF all of the previous steps were followed.";
  }
  if (spreadType == "RHoE") {
    document.getElementById("td01").style.visibility = "visible";
    document.getElementById("Bspan01").innerHTML = "About Your Question";
    document.getElementById("td10").style.visibility = "visible";
    document.getElementById("Bspan10").innerHTML = "What May Help You";
    document.getElementById("td12").style.visibility = "visible";
    document.getElementById("Bspan12").innerHTML = "What May Hinder You";
    document.getElementById("td20").style.visibility = "visible";
    document.getElementById("Bspan20").innerHTML = "Possible Outcome No. 1";
    document.getElementById("td22").style.visibility = "visible";
    document.getElementById("Bspan22").innerHTML = "Possible Outcome No. 2";
  }
  if (spreadType == "CCross") {
    document.getElementById("td01").style.visibility = "visible";
    document.getElementById("Bspan01").innerHTML = "What will be the outcome of this experience?";
    document.getElementById("td10").style.visibility = "visible";
    document.getElementById("Bspan10").innerHTML = "What are you still lacking?";
    document.getElementById("td12").style.visibility = "visible";
    document.getElementById("Bspan12").innerHTML = "What will help you overcome this blockage?";
    document.getElementById("td21").style.visibility = "visible";
    document.getElementById("Bspan21").innerHTML = "What is blocking your progress?";
    document.getElementById("td31").style.visibility = "visible";
    document.getElementById("Bspan31").innerHTML = "How and where should you direct your energies?";
    document.getElementById("td41").style.visibility = "visible";
    document.getElementById("Bspan41").innerHTML = "What is the root of your lack of clarity?";
  }
  if (spreadType == "WTree") {
    document.getElementById("td01").style.visibility = "visible";
    document.getElementById("Bspan01").innerHTML = "What will be the outcome of learning this lesson?";
    document.getElementById("td10").style.visibility = "visible";
    document.getElementById("Bspan10").innerHTML = "What comes to warn you?";
    document.getElementById("td12").style.visibility = "visible";
    document.getElementById("Bspan12").innerHTML = "What do you need to let go?";
    document.getElementById("td21").style.visibility = "visible";
    document.getElementById("Bspan21").innerHTML = "What power will help you?";
    document.getElementById("td31").style.visibility = "visible";
    document.getElementById("Bspan31").innerHTML = "What is your guiding Symbol?";
    document.getElementById("td40").style.visibility = "visible";
    document.getElementById("Bspan40").innerHTML = "What do you need to learn?";
    document.getElementById("td42").style.visibility = "visible";
    document.getElementById("Bspan42").innerHTML = "What will challenge you?";
  }
  if (spreadType == "THammer") {
    document.getElementById("td01").style.visibility = "visible";
    document.getElementById("Bspan01").innerHTML = "What is your true self?";
    document.getElementById("td10").style.visibility = "visible";
    document.getElementById("Bspan10").innerHTML = "What is stopping you?";
    document.getElementById("td11").style.visibility = "visible";
    document.getElementById("Bspan11").innerHTML = "What is your destiny?";
    document.getElementById("td12").style.visibility = "visible";
    document.getElementById("Bspan12").innerHTML = "What do you need to learn to find your true self?";
    document.getElementById("td21").style.visibility = "visible";
    document.getElementById("Bspan21").innerHTML = "What do you hope to become?";
    document.getElementById("td31").style.visibility = "visible";
    document.getElementById("Bspan31").innerHTML = "How should you best approach this?";
    document.getElementById("td40").style.visibility = "visible";
    document.getElementById("Bspan40").innerHTML = "What fears are within you?";
    document.getElementById("td42").style.visibility = "visible";
    document.getElementById("Bspan42").innerHTML = "What are you seeking?";
    document.getElementById("td51").style.visibility = "visible";
    document.getElementById("Bspan51").innerHTML = "What mask do you show the world?";
  }
}
