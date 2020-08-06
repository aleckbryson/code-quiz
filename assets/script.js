var hornetsObj = [
    {
        question: "Who was the first player ever drafted in the college draft by the Hornets?",
        choices: ["Johnny Newman", "J. R. Reid", "Rex Chapman", "Muggsy Bogues"],
        correctChoice: 2,
    },
    {
        question: "How tall is Muggsy Bogues?",
        choices: ["5ft 5in", "5ft 8in", "5ft 6in", "5ft 3in"],
        correctChoice: 3,
    },
    {
        question: "The Hornets traded the rights to which player for Vlade Divac in the summer of 1996?",
        choices: ["Jerry Stackhouse", "Kobe Bryant", "Rasheed Wallace", "Allen Iverson"],
        correctChoice: 1,
    },
    {
        question: "What famous rapper joined the Hornets in January of 1999?",
        choices: ["Will Smith", "Master P", "Snoop Dogg", "P. Diddy"],
        correctChoice: 1,
    },
    
]

function startButton() {
    var x = document.getElementById("start-button");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }