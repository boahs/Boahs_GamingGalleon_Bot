const randomCongrats = () => {
    const quoteArr = [
        "Lets give them a round of applause!",
        "Will anyone challenge this contender?",
        "A CHAMPION!",
        "A HERO AMONGST THE PEOPLE!",
        "Will anyone take this person down?!",
        "Ring the bell tower!",
        "the harder you have to try, the more points you deserve!",
        "The right man in the wrong place can make all the difference in the world.",
        "Always fear the flame, lest you be devoured by it, and lose yourself.",
        "Be wise. Be safe. Be aware.",
        "the crown is within their sights!",

    ];

    
    const randomQuotes = Math.floor(Math.random() * quoteArr.length);
    const randomQuote = quoteArr[randomQuotes];
    return randomQuote;
  };


  
  module.exports = {
    randomCongrats
  };
  