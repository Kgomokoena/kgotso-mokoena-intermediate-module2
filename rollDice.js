//b) Roll Dice 

var mainCatergories = ["Best Consumer Solution",
                   "Best Enterprise Solution",
                   "Most Innovative Solution",
                   "Best Gaming Solution",
                   "Best Health Solution",
                   "Best Agricultural Solution",
                   "Best Educational Solution",
                   "Best Financial Solution",
                   "Best Hackathon Solution",
                   "Best South African Solution",
                   "Best Campus Cup Solution",
                   "Best African Solution"];

var prediction = Math.floor(Math.random() * 12);

console.log("The category that will win MTN Business App of the Year in the year 2022 is "+ mainCatergories[prediction]);
