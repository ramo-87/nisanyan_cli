const grammaticalCases = require("./maps/grammaticalCases.js");
const specialGrammaticalCases = require("./specialGrammaticalCases.js");

const caseEndings = function (
  wordClass,
  relation,
  abbreviation,
  definition,
  romanizedText
) {
  switch (wordClass) {
    case "sözcük":
      if (relation == "den" && romanizedText == "" && definition == "") {
        wordClass = "bir sözcük";
        relation = "ten";
        return wordClass + relation;
      }
      if (relation == "den") {
        wordClass = "sözcüğün";
        return wordClass + relation;
      }

      if (relation == "ile") {
        wordClass = "sözcüğü";
        return wordClass + " " + relation;
      }
      if (relation == "lerinin") {
        wordClass = "sözcük";
        return wordClass + relation;
      }
      if (
        grammaticalCases.map((caseObject) => caseObject.name).includes(relation)
      ) {
        wordClass = "sözcüğünün";
        return wordClass;
      }
      if (relation == "dir.") {
        wordClass = "sözcüğü";
        relation = "dür.";
        return wordClass + relation;
      }

    case "fiil":
      if (
        grammaticalCases
          .map((caseObject) => caseObject.name)
          .includes(relation) &&
        abbreviation !== "+"
      ) {
        wordClass = "fiilinin";
        return wordClass;
      }
      if (
        grammaticalCases
          .map((caseObject) => caseObject.name)
          .includes(relation) &&
        abbreviation == "+"
      ) {
        wordClass = "fiillerininin";
        return wordClass;
      }

      if (relation == "den") {
        wordClass = "fiilin";
        return wordClass + relation;
      }
      if (relation == "ile") {
        wordClass = "fiili";
        return wordClass + " " + relation;
      }
      if (relation == "lerinin") {
        wordClass = "fiil";
        return wordClass + relation;
      }

    case "marka":
      if (
        grammaticalCases.map((caseObject) => caseObject.name).includes(relation)
      ) {
        wordClass = "ticari markasının";
        return wordClass;
      }
      if (relation == "den") {
        wordClass = "ticari markasın";
        relation = "dan";
        return wordClass + relation;
      }

    case "ünlem":
      if (relation == "den") {
        wordClass = "ünlemin";
        return wordClass + relation;
      }
      if (relation == "dir." && definition !== "") {
        wordClass = "ünlemi";
        return wordClass + relation;
      } else {
        wordClass = "bir ünlem";
        return wordClass + relation;
      }

    case "özel isim":
      if (
        grammaticalCases
          .map((caseObject) => caseObject.name)
          .includes(relation) &&
        abbreviation !== "+"
      ) {
        wordClass = "özel isminin";
        return wordClass;
      }
      if (relation == "den") {
        wordClass = "özel ismin";
        return wordClass + relation;
      }
    case "deyim":
      if (
        grammaticalCases
          .map((caseObject) => caseObject.name)
          .includes(relation) &&
        abbreviation !== "+"
      ) {
        wordClass = "deyiminin";
        return wordClass;
      }
      if (
        grammaticalCases
          .map((caseObject) => caseObject.name)
          .includes(relation) &&
        abbreviation == "+"
      ) {
        wordClass = "deyimlerinin";
        return wordClass;
      }
      if (relation == "den") {
        wordClass = "deyimin";
        return wordClass + relation;
      }

    case "biçim":
      if (
        grammaticalCases.map((caseObject) => caseObject.name).includes(relation)
      ) {
        wordClass = "biçiminin";
        return wordClass;
      }
      if (relation == "den" && romanizedText == "") {
        wordClass = "bir sözcük";
        relation = "ten";
        return wordClass + relation;
      }
      if (relation == "den") {
        wordClass = "biçimin";
        return wordClass + relation;
      }
      if (relation == "lerinin") {
        wordClass = "biçim";
        return wordClass + relation;
      }

    case "edat":
      if (relation == "den" && abbreviation == "/") {
        wordClass = "edatların";
        relation = "dan";
        return wordClass + relation;
      }
      if (relation == "den") {
        wordClass = "edatın";
        relation = "dan";
        return wordClass + relation;
      }
      if (relation == "lerinin") {
        wordClass = "edat";
        relation = "larının";
        return wordClass + relation;
      }
    case "kök":
      if (relation == "den") {
        wordClass = "kökün";

        return wordClass + relation;
      }
      if (relation == "ile") {
        wordClass = "kökü";

        return wordClass + " " + relation;
      }
    case "çocuk sözü":
      relation = "den";
      wordClass = "çocuk dilin";
      return wordClass + relation;

    default:
      return wordClass + relation;
  }
};

const dirHandler = function (grammarCase) {
  let lastLetter = grammarCase[grammarCase.length - 1];
  let ending = "";
  switch (lastLetter) {
    case "e":
      ending = "dir.";
      return grammarCase + ending;
    case "i":
      ending = "dir.";
      return grammarCase + ending;
    case "a":
      ending = "dır.";
      return grammarCase + ending;
    case "ı":
      ending = "dır.";
      return grammarCase + ending;
    case "u":
      ending = "dur.";
      return grammarCase + ending;
    case "o":
      ending = "dur.";
      return grammarCase + ending;
    case "ö":
      ending = "dür.";
      return grammarCase + ending;
    case "ü":
      ending = "dür.";
      return grammarCase + ending;
  }
};
const lerHandler = function (wordClass) {
  let beforeLastLetter = wordClass[wordClass.length - 2];
  let ending = "";
  switch (beforeLastLetter) {
    case "e":
      ending = "lerinin";
      return wordClass + ending;
    case "i":
      ending = "lerinin";
      return wordClass + ending;
    case "a":
      ending = "larının";
      return wordClass + ending;
    case "ı":
      ending = "larının";
      return wordClass + ending;
    case "u":
      ending = "larının";
      return wordClass + ending;
    case "o":
      ending = "larının";
      return wordClass + ending;
    case "ö":
      ending = "lerinin";
      return wordClass + ending;
    case "ü":
      ending = "lerinin";
      return wordClass + ending;
  }
};

const affixesHandler = function (segment) {
  let translatedOriginalText = [];
  if (segment.originalText == "y") {
    translatedOriginalText.push("Yeni Türkçe");
  } else if (segment.originalText == "e") {
    translatedOriginalText.push("Eski Türkçe");
  } else if (segment.originalText == "t") {
    translatedOriginalText.push("Türkiye Türkçesi");
  }

  if (segment.affixes.suffix) {
    if (segment.affixes.prefix) {
      translatedOriginalText.push(segment.affixes.prefix.name);
      translatedOriginalText.push("ön ekiyle ve");
    }
    translatedOriginalText.push(
      segment.affixes.suffix.name.replace(1, "\u{00b9}").replace(2, "\u{00b2}")
    );
    translatedOriginalText.push("ekiyle");
  } else if (segment.affixes.prefix) {
    if (segment.affixes.suffix) {
      translatedOriginalText.push(`${segment.affixes.suffix.name} ekiyle ve`);
    }

    translatedOriginalText.push(
      `${segment.affixes.prefix.name
        .replace(1, "\u{00b9}")
        .replace(2, "\u{00b2}")} ön ekiyle`
    );
  }
  return translatedOriginalText.filter((x) => x !== "").join(" ");
};
const veyaHandler = function (segment) {
  let parsedRomanizedOriginalText = [];
  let splitRomanized = segment.romanizedText.split("/");
  let splitOriginal = [];
  const hasChar = ["e", "t", "y"].some((char) =>
    segment.originalText.includes(char)
  );
  if (!hasChar) {
    splitOriginal = segment.originalText.split("/");
  }

  if (splitOriginal.length == splitRomanized.length) {
    for (let i = 0; i < splitRomanized.length; i++) {
      parsedRomanizedOriginalText.push(splitRomanized[i]);
      if (splitOriginal[i]) {
        parsedRomanizedOriginalText.push(splitOriginal[i]);
      }
      if (i < splitRomanized.length - 1) {
        parsedRomanizedOriginalText.push("veya");
      }
    }
  } else if (splitOriginal.length == 1) {
    for (let x = 0; x < splitRomanized.length; x++) {
      parsedRomanizedOriginalText.push(splitRomanized[x]);

      if (x < splitRomanized.length - 1) {
        parsedRomanizedOriginalText.push("veya");
      }
    }
    if (splitOriginal[0]) {
      parsedRomanizedOriginalText.push(splitOriginal[0]);
    }
  } else {
    parsedRomanizedOriginalText.push(splitRomanized.join(" veya "));
  }

  parsedRomanizedOriginalText.filter((x) => x !== "").join("");
  return parsedRomanizedOriginalText;
};

const caseHandler = function (prevSegment, currentSegment) {
  if (currentSegment.languages[0].abbreviation !== "Ar") {
    if (
      specialGrammaticalCases.includes(
        prevSegment.grammar.grammaticalCase.split(" ")[0]
      )
    ) {
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
};
module.exports = {
  caseEndings,
  affixesHandler,
  dirHandler,
  lerHandler,
  veyaHandler,
  caseHandler,
};
