// Browser.msgBox(a1)
// const range = e.range;
// const activeCellValue = range.getValue();
// const cellAddress = range.getA1Notation();

var sheetName = "Skills";

// mutations setting start
var mutations = {
  toxicBlood: {
    cell: "T38:V38",
    active: false,
  },
  deadlyCounter: {
    cell: "N38:P38",
    active: false,
  },
  magicSensibilities: {
    cell: "H38:J38",
    active: false,
  },
  piercingCold: {
    cell: "B38:D38",
    active: false,
  },
  conductorsOfMagic: {
    cell: "B44:D44",
    active: false,
  },
  adrenalineRush: {
    cell: "H32:J32",
    active: false,
  },
  secondLife: {
    cell: "B26:D26",
    active: false,
  },
  bloodbath: {
    cell: "N26:P26",
    active: false,
  },
  catEyes: {
    cell: "T32:V32",
    active: false,
  },
  metamorphosis: {
    cell: "Z26:AB26",
    active: false,
  },
  euphoria: {
    cell: "Z38:AB38",
    active: false,
  },
  mutatedSkin: {
    cell: "Z44:AB44",
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
    requiredSpendPoints: { cell: "N12:O12", points: 0 },
  },
  T3: {
    dropDownOptions: [3, 3, 3, 3, 3],
    dropDownCells: ["C16:D16", "E16:F16", "G16:H16", "I16:J16", "K16:L16"],
    requiredSpendPoints: { cell: "N15:O15", points: 0 },
  },
  T4: {
    dropDownOptions: [3, 3, 2, 3, 3],
    dropDownCells: ["C19:D19", "E19:F19", "G19:H19", "I19:J19", "K19:L19"],
    requiredSpendPoints: { cell: "N18:O18", points: 0 },
  },
};
// combat talents setting end

// signs talents setting start
var signsTalents = {
  T1: {
    dropDownOptions: [3, 3, 2, 3, 3],
    dropDownCells: ["T10:U10", "V10:W10", "X10:Y10", "Z10:AA10", "AB10:AC10"],
  },
  T2: {
    dropDownOptions: [3, 3, 3, 3, 3],
    dropDownCells: ["T13:U13", "V13:W13", "X13:Y13", "Z13:AA13", "AB13:AC13"],
    requiredSpendPoints: { cell: "AE12:AF12", points: 0 },
  },
  T3: {
    dropDownOptions: [3, 3, 3, 3, 3],
    dropDownCells: ["T16:U16", "V16:W16", "X16:Y16", "Z16:AA16", "AB16:AC16"],
    requiredSpendPoints: { cell: "AE15:AF15", points: 0 },
  },
  T4: {
    dropDownOptions: [3, 3, 3, 3, 3],
    dropDownCells: ["T19:U19", "V19:W19", "X19:Y19", "Z19:AA19", "AB19:AC19"],
    requiredSpendPoints: { cell: "AE18:AF18", points: 0 },
  },
};
// signs talents setting end

// alchemy talents setting start
var alchemyTalents = {
  T1: {
    dropDownOptions: [3, 3, 1, 3, 3],
    dropDownCells: [
      "AK10:AL10",
      "AM10:AN10",
      "AO10:AP10",
      "AQ10:AR10",
      "AS10:AT10",
    ],
  },
  T2: {
    dropDownOptions: [3, 3, 3, 3, 3],
    dropDownCells: [
      "AK13:AL13",
      "AM13:AN13",
      "AO13:AP13",
      "AQ13:AR13",
      "AS13:AT13",
    ],
    requiredSpendPoints: { cell: "AV12:AW12", points: 0 },
  },
  T3: {
    dropDownOptions: [3, 3, 3, 3, 3],
    dropDownCells: [
      "AK16:AL16",
      "AM16:AN16",
      "AO16:AP16",
      "AQ16:AR16",
      "AS16:AT16",
    ],
    requiredSpendPoints: { cell: "AV15:AW15", points: 0 },
  },
  T4: {
    dropDownOptions: [3, 3, 3, 3, 3],
    dropDownCells: [
      "AK19:AL19",
      "AM19:AN19",
      "AO19:AP19",
      "AQ19:AR19",
      "AS19:AT19",
    ],
    requiredSpendPoints: { cell: "AV18:AW18", points: 0 },
  },
};
// alchemy talents setting end

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
    .flat()
    .join(", ");
}

function generateDropDownOptions(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}

function dropDownResetCell(spreadSheet, cell) {
  const tier = generateDropDownOptions(0, 0);
  const dropdown = spreadSheet.getRange(cell);
  const rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(tier)
    .build();
  dropdown.setDataValidation(rule);
  dropdown.setValue(0);
}

function dropDownCreateCell(spreadSheet, max_points, cell) {
  tier = generateDropDownOptions(0, max_points);
  dropdown = spreadSheet.getRange(cell);
  rule = SpreadsheetApp.newDataValidation().requireValueInList(tier).build();
  dropdown.setDataValidation(rule);
}

function mutationsTalentLogic(spreadSheet, mutations) {
  Object.keys(mutations)
    .slice(3)
    .forEach((mutation) => {
      const canBeDone = canActivateTalent(mutation);
      if (mutations[mutation].active) {
        mutations[mutation].active = canBeDone;
      }
      if (!canBeDone) resetTickButton(spreadSheet, mutations[mutation].cell);
    });
}

function skillTalentLogic(spreadSheet, talents) {
  Object.keys(talents)
    .slice(1)
    .forEach((tier) => {
      const currentTier = talents[tier];
      const currentTierPoints = spreadSheet
        .getRange(currentTier.requiredSpendPoints.cell)
        .getValue();
      const pointsEnough =
        currentTierPoints === currentTier.requiredSpendPoints.points;
      if (!pointsEnough) {
        currentTier.dropDownCells.forEach((cell) => {
          dropDownResetCell(spreadSheet, cell);
        });
      } else if (pointsEnough) {
        currentTier.dropDownCells.forEach((cell, i) => {
          dropDownCreateCell(spreadSheet, currentTier.dropDownOptions[i], cell);
        });
      }
    });
}

function onEdit(e) {
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
    const mutationActive = Object.values(mutations)
      .slice(0, 3).some(m => spreadSheet.getRange(m.cell).getValue())
    if (!mutationActive) {
      resetMutationSkills(spreadSheet, mutations);
    } else if (mutationActive) {
      getTickButtonStatus(spreadSheet, mutations);
      mutationsTalentLogic(spreadSheet, mutations);
    }
    return;
  }

  const isCombatCell = generateTalentCells(combatTalents).includes(cellAddress);
  if (isCombatCell) {
    skillTalentLogic(spreadSheet, combatTalents);
    return;
  }
  const isSignCell = generateTalentCells(signsTalents).includes(cellAddress);
  if (isSignCell) {
    skillTalentLogic(spreadSheet, signsTalents);
    return;
  }
  const isAlchemyTalentsCell =
    generateTalentCells(alchemyTalents).includes(cellAddress);
  if (isAlchemyTalentsCell) {
    skillTalentLogic(spreadSheet, alchemyTalents);
    return;
  }
}
