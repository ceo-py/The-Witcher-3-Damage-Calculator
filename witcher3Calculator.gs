var sheetName = "Skills";

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

var dependencies = {
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

function resetMutationSkills(mutations) {
  mutations.forEach((m) => {
    // makeColorPath(m.colorPath, mutationColorPaths.green)
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
  for (const talents of dependencies[talentName]) {
    if (talents.every((cd) => mutations[cd].active)) {
      return true;
    }
  }
  return false;
}

function talentFunctionality(e) {
  const spreadSheet = e.source.getActiveSheet();
  const activeSheetName = spreadSheet.getName();

  // Browser.msgBox(a1)
  if (activeSheetName != sheetName) return;

  const strengthenedSynapsesValue = spreadSheet
    .getRange(mutations.strengthenedSynapses.cell)
    .getValue();

  if (!strengthenedSynapsesValue) {
    Object.keys(mutations).forEach((mutation) => {
      mutations[mutation].active = false;
      resetTickButton(spreadSheet, mutations[mutation].cell);
    });
  }
  const range = e.range;
  // const activeCellValue = range.getValue();
  // const cellAddress = range.getA1Notation();
  getTickButtonStatus(spreadSheet, mutations);
  Object.keys(mutations)
    .slice(4)
    .forEach((mutation) => {
      const canBeDone = canActivateTalent(mutation);
      mutations[mutation].active = canBeDone;
      if (!canBeDone) resetTickButton(spreadSheet, mutations[mutation].cell);
    });
}
