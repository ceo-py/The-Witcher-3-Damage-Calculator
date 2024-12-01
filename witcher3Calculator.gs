// Browser.msgBox(a1)
// const range = e.range;
// const activeCellValue = range.getValue();
// const cellAddress = range.getA1Notation();

var sheetName = "Skills";

// mutations setting start
var mutationColorPaths = {
  green: "#274e13",
  grey: "#d9d9d9",
};

var mutations = {
  strengthenedSynapses: {
    cell: "N44:P44",
    colorPath: [],
    active: false,
  },
  toxicBlood: {
    cell: "T38:V38",
    colorPath: ["U39", "U40", "U41", "U42", "T42", "S42", "R42", "Q42"],
    active: false,
  },
  deadlyCounter: {
    cell: "N38:P38",
    colorPath: ["O40:039"],
    active: false,
  },
  magicSensibilities: {
    cell: "H38:J38",
    colorPath: ["M42", "L42", "K42", "J42", "I42", "I41", "I40", "I39"],
    active: false,
  },
  piercingCold: {
    cell: "B38:D38",
    colorPath: ["G36", "F36", "E36"],
    active: false,
  },
  conductorsOfMagic: {
    cell: "B44:D44",
    colorPath: ["C39", "C40"],
    active: false,
  },
  adrenalineRush: {
    cell: "H32:J32",
    colorPath: ["C34", "C33", "C32", "C31", "D31", "E31", "F31", "H31"],
    active: false,
  },
  secondLife: {
    cell: "B26:D26",
    colorPath: ["G29", "F29", "E29", "D29", "C29", "C28", "C27"],
    active: false,
  },
  bloodbath: {
    cell: "N26:P26",
    colorPath: ["G29", "F29", "E29", "D29", "C29", "C28", "C27"],
    active: false,
  },
  catEyes: {
    cell: "T32:V32",
    colorPath: ["G29", "F29", "E29", "D29", "C29", "C28", "C27"],
    active: false,
  },
  metamorphosis: {
    cell: "Z26:AB26",
    colorPath: ["W29", "X29", "Y29", "Z29", "AA29", "AA28", "AA27"],
    active: false,
  },
  euphoria: {
    cell: "Z38:AB38",
    colorPath: ["W36", "X36", "Y36"],
    active: false,
  },
  mutatedSkin: {
    cell: "Z44:AB44",
    colorPath: ["AA39", "AA40"],
    active: false,
  },
};

var mutationDependencies = {
  toxicBlood: [["strengthenedSynapses"]],
  deadlyCounter: [["strengthenedSynapses"]],
  magicSensibilities: [["strengthenedSynapses"]],
  euphoria: [
    ["toxicBlood"],
    ["catEyes", "bloodbath", "deadlyCounter"],
    [
      "catEyes",
      "bloodbath",
      "adrenalineRush",
      "piercingCold",
      "magicSensibilities",
    ],
  ],
  mutatedSkin: [
    ["toxicBlood", "euphoria"],
    ["euphoria", "catEyes", "bloodbath", "deadlyCounter"],
    [
      "euphoria",
      "catEyes",
      "bloodbath",
      "adrenalineRush",
      "piercingCold",
      "magicSensibilities",
    ],
  ],
  catEyes: [
    ["toxicBlood", "euphoria"],
    ["bloodbath", "deadlyCounter"],
    ["bloodbath", "adrenalineRush", "piercingCold", "magicSensibilities"],
  ],
  metamorphosis: [
    ["catEyes", "toxicBlood", "euphoria"],
    ["catEyes", "bloodbath", "deadlyCounter"],
    [
      "catEyes",
      "bloodbath",
      "adrenalineRush",
      "piercingCold",
      "magicSensibilities",
    ],
  ],
  bloodbath: [
    ["catEyes", "toxicBlood", "euphoria"],
    ["deadlyCounter"],
    ["adrenalineRush", "piercingCold", "magicSensibilities"],
  ],
  adrenalineRush: [
    ["bloodbath", "catEyes", "toxicBlood", "euphoria"],
    ["bloodbath", "deadlyCounter"],
    ["piercingCold", "magicSensibilities"],
  ],
  conductorsOfMagic: [
    ["piercingCold", "magicSensibilities"],
    ["piercingCold", "adrenalineRush", "bloodbath", "deadlyCounter"],
    [
      "piercingCold",
      "adrenalineRush",
      "bloodbath",
      "catEyes",
      "euphoria",
      "toxicBlood",
    ],
  ],
  piercingCold: [
    ["magicSensibilities"],
    ["adrenalineRush", "bloodbath", "deadlyCounter"],
    ["adrenalineRush", "bloodbath", "catEyes", "euphoria", "toxicBlood"],
  ],
  secondLife: [
    ["adrenalineRush", "piercingCold", "magicSensibilities"],
    ["adrenalineRush", "bloodbath", "deadlyCounter"],
    ["adrenalineRush", "bloodbath", "catEyes", "euphoria", "toxicBlood"],
  ],
};
// mutations setting start

// combat talents setting start
var combatTalents = {
  T1: {
    dropDownOptions: [3, 3, 2, 1, 3],
    dropDownCells: ["C10:D10", "E10:F10", "G10:H10", "I10:J10", "K10:L10"],
  },
  T2: {
    dropDownOptions: [3, 3, 1, 3, 3],
    dropDownCells: ["C13:D13", "E13:F13", "G13:H13", "I13:J13", "K13:L13"],
    requiredSpendPoints: { cell: "N12:O12", points: 6 },
  },
  T3: {
    dropDownOptions: [3, 3, 3, 3, 3],
    dropDownCells: ["C16:D16", "E16:F16", "G16:H16", "I16:J16", "K16:L16"],
    requiredSpendPoints: { cell: "N15:O15", points: 12 },
  },
  T4: {
    dropDownOptions: [3, 3, 2, 3, 3],
    dropDownCells: ["C19:D19", "E19:F19", "G19:H19", "I19:J19", "K19:L19"],
    requiredSpendPoints: { cell: "N18:O18", points: 18 },
  },
};
// combat talents setting end

function makeColorPath(route, color) {
  route.forEach((cell) => {
    var cell = sheet.getRange(cell);
    cell.setBackground(color);
  });
}

function resetTickButton(sheet, cellPosition) {
  const cellToChange = sheet.getRange(cellPosition);
  cellToChange.uncheck();
}

function resetMutationSkills(spreadSheet, mutations) {
  Object.keys(mutations).forEach((mutation) => {
    mutations[mutation].active = false;
    resetTickButton(spreadSheet, mutations[mutation].cell);
  });
}

function getTickButtonStatus(sheet, mutations) {
  Object.keys(mutations).forEach((mutation) => {
    mutations[mutation].active = sheet
      .getRange(mutations[mutation].cell)
      .getValue();
  });
}

function canActivateTalent(talentName) {
  for (const talents of mutationDependencies[talentName]) {
    const activeTalents = talents.every((cd) => mutations[cd].active);
    if (activeTalents) {
      return true;
    }
  }
  return false;
}

function generateTalentCells(talents) {
  return Object.values(talents)
    .map((t) => t.dropDownCells)
    .flat().join(", ");
}

function generateButtonsOptions(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}

function dropDownResetCell(spreadSheet, cell) {
  const tier = generateButtonsOptions(0, 0);
  dropdown = spreadSheet.getRange(cell);
  rule = SpreadsheetApp.newDataValidation().requireValueInList(tier).build();
  dropdown.setDataValidation(rule);
  dropdown.setValue(0);
}

function mutationsTalentLogic(spreadSheet, mutations) {
  Object.keys(mutations)
    .slice(4)
    .forEach((mutation) => {
      const canBeDone = canActivateTalent(mutation);
      if (mutations[mutation].active) {
        mutations[mutation].active = canBeDone;
      }
      if (!canBeDone) resetTickButton(spreadSheet, mutations[mutation].cell);
    });
}

function talentFunctionality(e) {
  const spreadSheet = e.source.getActiveSheet();
  const activeSheetName = spreadSheet.getName();
  if (activeSheetName != sheetName) return;

  const range = e.range;
  const activeCellValue = range.getValue();
  const cellAddress = range.getA1Notation();

  const isMutationsCell = Object.values(mutations).some((mutation) =>
    mutation.cell.includes(cellAddress)
  );

  if (isMutationsCell) {
    const strengthenedSynapsesValue = spreadSheet
      .getRange(mutations.strengthenedSynapses.cell)
      .getValue();
    if (!strengthenedSynapsesValue) {
      resetMutationSkills(spreadSheet, mutations);
    } else if (strengthenedSynapsesValue) {
      getTickButtonStatus(spreadSheet, mutations);
      mutationsTalentLogic(spreadSheet, mutations);
    }
    return;
  }

  const isCombatCell = generateTalentCells(combatTalents).includes(cellAddress);
  if (isCombatCell) {
    
  }
}
