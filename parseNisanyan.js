#!/usr/bin/env node
const axios = require("axios");
const specialLanguages = require("./specialLanguages.js");
const {
  caseEndings,
  affixesHandler,
  dirHandler,
  lerHandler,
  veyaHandler,
  caseHandler,
} = require("./helperFunc.js");

const loadJson = async (request) => {
  const response = await callAPI(request);
  return response;
};

const callAPI = async (req) => {
  function genHexString(len) {
    const hex = "0123456789ABCDEF";
    let output = "";
    for (let i = 0; i < len; ++i) {
      output += hex.charAt(Math.floor(Math.random() * hex.length));
    }

    return output;
  }
  try {
    const encodedReq = encodeURIComponent(req);
    const response = await axios.get(
      `https://www.nisanyansozluk.com/api/words/${encodedReq}?session=${genHexString(
        12
      )}`
    );

    return response.data;
  } catch (error) {
    console.error("Error!: ", error);
    throw error;
  }
};

const parseSegments = function (
  currentSegment,
  nextSegment,
  prevSegment,
  outcome
) {
  if (
    currentSegment.definition === "" &&
    currentSegment.romanizedText === "" &&
    currentSegment.languages[0].abbreviation === "?"
  ) {
    outcome.push("Bu sözcüğün kökeni belirsizdir.");
    return outcome;
  }

  if (prevSegment && currentSegment.relation.abbreviation !== "§") {
    if (
      currentSegment.relation.abbreviation == "/" ||
      currentSegment.relation.abbreviation == "+"
    ) {
      outcome.push(currentSegment.relation.text.trim());
    } else if (
      currentSegment.paranthesis == "(" ||
      currentSegment.paranthesis == "()"
    ) {
      outcome.push(`(NOT: Bu ${prevSegment.wordClass.name}`);
    } else {
      outcome.push(`Bu ${prevSegment.wordClass.name}`);
    }
  } else if (prevSegment && currentSegment.relation.abbreviation == "§") {
    //$ Review the words "ambar"
    outcome.push(`Bu ${prevSegment.wordClass.name}`);
  } else if (
    !prevSegment &&
    (currentSegment.paranthesis == ")" || currentSegment.paranthesis == "()")
  ) {
    outcome.push(`(NOT:`);
  }
  //   // outcome.push(`Bu ${currentSegment.wordClass.name}`); //$ To handle "devasa", more data validation is needed to determine the importance of this
  // }

  //> Some languages that we do not want to be parsed.
  if (
    !specialLanguages
      .map((language) => language.abbreviation)
      .includes(currentSegment.languages[0].abbreviation)
  ) {
    //> the map below is in case there are multiple languages in the currentSegment.languages array.
    outcome.push(
      "\u001b[1;32m" +
        currentSegment.languages
          .map((language) => language.name + "\u001b[0m")
          .join(" ve ")
    );
  }

  if (currentSegment.grammar.semiticRoot) {
    outcome.push(
      currentSegment.grammar.semiticRoot.split("#")[1] + " kökünden gelen" //> in the response, semitic roots are usually written #ktb, the split removes the #.
    );
  }

  if (currentSegment.definition == "a.a.") {
    outcome.push("aynı anlama gelen");
  }

  if (
    currentSegment.romanizedText.charAt(0) == "*" ||
    (currentSegment.wordClass.abbreviation == "b" &&
      currentSegment.romanizedText !== "")
  ) {
    if (currentSegment.definition == "?") {
      outcome.push("anlamı bilinmeyen");
    }
    outcome.push("yazılı örneği bulunmayan");
    outcome.push(
      currentSegment.romanizedText
        .replace("/", " veya ")
        .replace(1, "\u{00b9}")
        .replace(2, "\u{00b2}")
        .replace(3, "\u{00b3}")
    );
  } else {
    //> OriginalText (that is not reconstructed *word) is handled by the veyaHandler function.
    outcome.push(veyaHandler(currentSegment).join(" "));
  }

  if (
    currentSegment.definition !== "a.a." &&
    currentSegment.definition !== "" &&
    currentSegment.definition !== "?"
  ) {
    let cleanedDefinition = currentSegment.definition.replace("%b", "");
    outcome.push(
      `\u001b[3m“${cleanedDefinition
        .trim()
        .replace("a.a.", "aynı anlamda")
        .replace("(esk.)", "(eskimiş)")
        .replace("[esk.]", "[eskimiş]")
        .replace("(mec.)", "(mecazi)")}”\u001b[0m`
    );
  }
  if (
    specialLanguages
      .map((language) => language.abbreviation)
      .includes(currentSegment.languages[0].abbreviation)
  ) {
    const match = /\((.*?)\)/.exec(
      currentSegment.languages.map((x) => x.name.trim())
    );

    outcome.push(
      match
        ? match[1].replace(
            "onomatope",
            currentSegment.definition ? "ses yansımalı" : "bir ses yansımalı"
          )
        : ""
    );
  }

  //> Managing wordClass, affixes (if found) and relation below. Refer to the README.md to understand how it is parsed.

  if (currentSegment.relation.abbreviation !== "§") {
    let splitRelation = currentSegment.relation.text.trim().split(" ");
    //> First Segment.
    if (!prevSegment) {
      if (nextSegment && nextSegment.relation.abbreviation == "/") {
        return;
      }
      //$ I could have made all of this a string literal but then JS will treat everything as a string and .filter method won't extract whitespaces.

      outcome.push(
        caseEndings(
          currentSegment.wordClass.name,
          splitRelation[0],
          currentSegment.relation.abbreviation,
          currentSegment.definition
        )
      );
      outcome.push(affixesHandler(currentSegment));
      if (
        currentSegment.paranthesis !== ")" &&
        currentSegment.paranthesis !== "()"
      ) {
        outcome.push(splitRelation.filter((x, index) => index > 0).join(" "));
      } else {
        outcome.push(
          splitRelation.filter((x, index) => index > 0).join(" ") + ")"
        );
      }

      //> Next Segments
    } else {
      //$ If the segment before has case, the current segment will parse it

      if (
        prevSegment.grammar.case &&
        caseHandler(prevSegment, currentSegment)
      ) {
        if (nextSegment && nextSegment.relation.abbreviation == "/") {
          return;
        }
        outcome.push(
          caseEndings(
            currentSegment.wordClass.name,
            prevSegment.grammar.grammaticalCase.split(" ")[0],
            currentSegment.relation.abbreviation
          )
        );
        outcome.push(affixesHandler(currentSegment));
        if (
          prevSegment.grammar.semiticForm &&
          currentSegment.languages[0].abbreviation == "Ar"
        ) {
          outcome.push(`${prevSegment.grammar.semiticForm.name} vezninde`);
        }
        if (
          currentSegment.paranthesis !== ")" &&
          currentSegment.paranthesis !== "()"
        ) {
          outcome.push(
            dirHandler(
              prevSegment.grammar.case.map((x) => x.description).join(" ")
            )
          );
        } else {
          outcome.push(
            dirHandler(
              prevSegment.grammar.case.map((x) => x.description).join(" ")
            ) + ")"
          );
        }
      } else {
        //> When multiple ve segments in succession (check hipoglisemi)
        if (
          nextSegment &&
          nextSegment.relation.abbreviation == "+" &&
          currentSegment.paranthesis == ""
        ) {
          return;
        }

        if (currentSegment.relation.abbreviation == "+") {
          outcome.push(lerHandler(currentSegment.wordClass.name));
          outcome.push(affixesHandler(currentSegment).trim());

          if (
            currentSegment.paranthesis !== ")" &&
            currentSegment.paranthesis !== "()"
          ) {
            outcome.push("bileşiğidir.");
          } else {
            outcome.push("bileşiğidir.)");
          }
        } else if (currentSegment.relation.abbreviation == "/") {
          outcome.push(
            caseEndings(
              currentSegment.wordClass.name,
              prevSegment.relation.text.trim().split(" ")[0],
              currentSegment.relation.abbreviation,
              currentSegment.definition,
              currentSegment.romanizedText
            )
          );
          outcome.push(
            prevSegment.relation.text
              .trim()
              .split(" ")
              .filter((x, index) => index > 0)
              .join(" ")
          );
        } else {
          //$ Check the word "çekirdek" for why this is needed.
          if (nextSegment && nextSegment.relation.abbreviation == "/") {
            return;
          }
          if (
            //$ Check the word "fikir" for why this is needed.
            prevSegment.grammar.semiticForm &&
            currentSegment.relation.abbreviation == "<"
          ) {
            outcome.push(currentSegment.wordClass.name + "inin");
            outcome.push(prevSegment.grammar.semiticForm.name + " veznidir.");
          } else {
            outcome.push(
              caseEndings(
                currentSegment.wordClass.name,
                splitRelation[0],
                currentSegment.wordClass.abbreviation,
                currentSegment.definition,
                currentSegment.romanizedText
              )
            );

            outcome.push(affixesHandler(currentSegment) || "");

            if (
              currentSegment.paranthesis !== ")" &&
              currentSegment.paranthesis !== "()"
            ) {
              outcome.push(
                splitRelation.filter((x, index) => index > 0).join(" ")
              );
            } else {
              outcome.push(
                splitRelation.filter((x, index) => index > 0).join(" ") + ")"
              );
            }
          }
        }
      }
    }
  }

  return outcome;
};

const parseWordEtymologies = (word) => {
  let outcome = [];

  for (let i = 0; i < word.etymologies.length; i++) {
    const currentSegment = word.etymologies[i];
    const nextSegment =
      i + 1 < word.etymologies.length ? word.etymologies[i + 1] : null;
    const prevSegment = i > 0 ? word.etymologies[i - 1] : null;
    parseSegments(currentSegment, nextSegment, prevSegment, outcome);
  }

  stringOutcome = outcome
    .map((word) => word.trim()) // Trim each word
    .filter((word) => word !== "") // Filter out empty strings
    .join(" ") // Join with a single space
    .trimStart(); // Ensure no leading space

  let capitalizedOutcome =
    stringOutcome[0].toUpperCase() + stringOutcome.slice(1);
  return capitalizedOutcome;
};
const parseJsonFile = async (file) => {
  try {
    const root = await loadJson(file);

    let multipleWords = [];

    for (let i = 0; i < root.words.length; i++) {
      const word = root.words[i];
      const parsedWord = parseWordEtymologies(word);
      multipleWords.push("\n\n");
      multipleWords.push("\u001b[35;1mKöken\u001b[0m" + ":");
      multipleWords.push(parsedWord);
      multipleWords.push("\n");
    }

    return multipleWords.join("\n");
  } catch (error) {}
};

const padding = " ".repeat(5);
const maxWidth = 100; // Set the maximum width for each line

const wrapText = (text, maxWidth) => {
  const lines = [];
  let currentLine = "";

  text.split(" ").forEach((word) => {
    if ((currentLine + word).length > maxWidth) {
      lines.push(currentLine.trim());
      currentLine = word + " ";
    } else {
      currentLine += word + " ";
    }
  });

  if (currentLine) {
    lines.push(currentLine.trim());
  }

  return lines.join("\n");
};

const args = process.argv.filter((x, index) => index > 1).join(" ");

parseJsonFile(args).then((result) => {
  try {
    const wrappedResult = wrapText(result, maxWidth)
      .split("\n")
      .map((line) => padding + line)
      .join("\n");

    console.log(wrappedResult);
  } catch {
    console.error("Could not find a match!");
  }
});

module.exports = parseJsonFile;
