const randomGester = () => {
    const quoteArr = [
        "Is this what you're looking for ",
        "Pardon me, but did you lose this ",
        "Leave the stream now. ",
        "I should VIP you ",
        "Congratulations ",
        "Begone ",
        "What did you think of the most recent current event ",
        "Don't you know...don't you know ",
        "Believe me when I say it ",
        "Coward! I remember that ",
        "I wonder ...", 
        "Go to town and find a watermelon ",
        "Big easter eggs await you ",
        "We didn't get this far to lose this quickly ",
        "Big winner!Big winner!BigWinner!BigWINNER! You have won nothing ",
        "Netflix and chill ",
        "BTC ot Ethereum ",
        "Favorite movie of yours ",
        "This is the clip of a life time", 
        "Peee peeee",
        "Brainless fool ", 
        "Click here to win 42 BITCOINS ",
        "Click here to win 42 DOGE ",
        "Click here to win NOTHING ",
        "Click here to win 42 ETHEREUM ", 
        "Remember what that guy said that one time ",
        "Left right left right right left right left ",
        "Dont enter bad cheatcodes ",
        "Valorant effort champion ",
        "Up, up, down, down, left, right, left, right, B, A ",
        "Powerless vermin ",
        "I remember you insulted me before ",
        "Hey I should mod you ",
        "Don't let them see you when you're feeling down ",
        "Eurika! We have found the lost treasure of the ages ",
        "30 22 55 99 00 00 00 00 00 01 01 00 99 88 H3 D1 K9 M8 00 03",
        "You're stoooooopid ",
        "Pies are your favorite food I bet ",
        "Enough is enough ",
        "Comma period comma what do they have in common? It isn't a comma ",
        "Bad jokes are a sin ",
        "Have you checked the store today ",
        "Heeeeeeeeeheeeeeeeee",
        "Youtube follow my youtube or get out of my life ",
        "Angry beavers ",
        "Hey arnold ",
        "Videogames and wine ",
        "Videogames and weed ",
        "Don't go alone! Take this ",
        "Disco time ",
        "I was uncreative with this random gester "
    ];

    
    const randomQuotes = Math.floor(Math.random() * quoteArr.length);
    const randomQuote = quoteArr[randomQuotes];
    return randomQuote;
  };


  
  module.exports = {
    randomGester
  };
  