import MissPlete from './MissPlete.js';

new MissPlete({
  input: document.querySelector('input[name="city"]'),

  // Each subarray contains an option and all its synonyms
  options: [["Barcelona", "BCN"], ["San Francisco", "SF"]],

  // OPTIONAL
  // It must return an object with at least the properties `score` and  
  // `displayValue`.
  // Default is a Jaro–Winkler similarity function.
  scoreFn: (inputValue, optionSynonyms) => {
    // Crazy random example
    const score = Math.random();
    return { score: score, displayValue: `${optionSynonyms[0]} (${score})` };
  },

  // OPTIONAL
  // Called for each scored option, in order, starting with the one with the
  // greatest score. It's passed the scored option (as returned by scoreFn)
  // and its index in the score-sorted list. It must return the <li> node
  // to display, or null if nothing else has to be displayed.
  // Default returns <li> nodes for the 8 best-scored options.
  listItemFn: (scoredOption, itemIndex) => {
    const li = scoredOption.score < 0.5 ? null : document.createElement("li");
    li && li.appendChild(document.createTextNode(scoredOption.displayValue));
    return li;
  }  
});