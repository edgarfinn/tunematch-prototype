import keyMap from './camelotKeys';

const musicalToCamelot = str => {
  return Object.keys(keyMap).reduce((acc, key) => {
    const {
      musical: { harmonic, enharmonic }
    } = keyMap[key];
    if (harmonic === str || enharmonic === str) {
      acc = key;
    }
    return acc;
  }, "");
}

const getRelativeFifth = (note, scale) => {
  const relativeFifthNote = note === 12 ? 1 : note + 1;
  return `${relativeFifthNote}${scale}`;
}

const getRelativeFourth = (note, scale) => {
  const relativeFourthNote = note === 1 ? 12 : note - 1;
  return `${relativeFourthNote}${scale}`;
}

const getRelativeScale = (note, scale) => {
  const relativeScale = scale === "A" ? "B" : "A";
  return `${note}${relativeScale}`
}

const getUpSemitone = (note, scale) => {
  const upSemiToneNote = note < 6 ? note + 7 : note - 5;
  return `${upSemiToneNote}${scale}`;
}

const getDownSemitone = (note, scale) => {
  const downSemiToneNote = note > 6 ? note - 7 : note + 5;
  return `${downSemiToneNote}${scale}`;
}

const getKeyMatches = camelotId => {
  const currentKey = keyMap[camelotId];
  const {
    camelot: {
      note,
      scale
    }
  } = currentKey;
  const matches = {};
  matches.relativeFifth = getRelativeFifth(note, scale);
  matches.relativeFourth = getRelativeFourth(note, scale);
  matches.relativeScale = getRelativeScale(note, scale);
  return matches;
}
