function printHighscores() {
       var highscores = JSON.parse(window.localStorage.getItem("highscores")) && [];
  
     highscores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    highscores.forEach(function(score) {
      var ol1 = document.createElement("ol");
      ol1.textContent = score.initials + " - " + score.score;
  
      var olEl = document.getElementById("highscores");
      olEl.appendChild(ol1);
    });
  }
  
  function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  }
  
  document.getElementById().onclick = clearHighscores;
  
  printHighscores();