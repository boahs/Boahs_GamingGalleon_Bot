const randomBalsum = () => {
    const testArr = [
      "Balsum can cook pretty well",
      "Balsum is an architect",
      "Balsum likes to play fetch with Kaya",
      "Balsum doesn't smoke weed",
      "Balsum has had his nuts crushed",
      "Balsum is a big fan of mayonnaise",
      "Balsum smokes cigarettes",
      "Balsum shaves his balls",
      "Balsum makes a mean chicken pot pie",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ];
  
    const randomNumber = Math.floor(Math.random() * testArr.length);
    const randomQuote = testArr[randomNumber];
    return randomQuote;
  };
  
  module.exports = {
    randomBalsum,
  };
  