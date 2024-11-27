var sheetName = "Skills";
var colorsPath = {
  green: "#274e13",
  grey: "#d9d9d9",
};
var mutations = {
  magicSensibilities: {
    cell: "I38",
    colorPath: ["M42", "L42", "K42", "J42", "I42", "I41", "I40", "I39"],
    active: false,
  },
  piercingCold: {
    cell: "C38",
    colorPath: ["G36", "F36", "E36"],
    active: false,
  },
  conductorsOfMagic: {
    cell: "C44",
    colorPath: ["C39", "C40"],
    active: false,
  },
  adrenalineRush: {
    cell: "I32",
    colorPath: ["C34", "C33", "C32", "C31", "D31", "E31", "F31", "H31"],
    active: false,
  },
  secondLife: {
    cell: "C26",
    colorPath: ["G29", "F29", "E29", "D29", "C29", "C28", "C27"],
    active: false,
  },
  Bloodbath: {
    cell: "C26",
    colorPath: ["G29", "F29", "E29", "D29", "C29", "C28", "C27"],
    active: false,
  },
  catEyes: {
    cell: "O26",
    colorPath: ["G29", "F29", "E29", "D29", "C29", "C28", "C27"],
    active: false,
  },
};

function makeColorPath(route, color) {
  route.forEach((cell) => {
    var cell = sheet.getRange(cell);
    cell.setBackground(color);
  });
}

function talentFunctionality(e) {
  spreadSheet = e.source;
  activeSheetName = spreadSheet.getActiveSheet().getName();
  // Browser.msgBox(a1)
  if (activeSheetName != sheetName) return;
  Browser.msgBox("active");
}
