const userDialog = document.querySelector(".setup");
userDialog.classList.remove("hidden");

const SimilarUser = document.querySelector(".setup-similar");
SimilarUser.classList.remove("hidden");

const similarListElement = document.querySelector(".setup-similar-list");
const similarWizardTemplate = document
  .querySelector("#similar-wizard-template")
  .content.querySelector(".setup-similar-item");

//список похожих персонажей

let WIZARD_NAME = [
  "Гарри Поттер1",
  "Герри сротер2",
  "Гарри Поттер3",
  "Герри сротер4",
];
let wizards = [
  {
    name: WIZARD_NAME[0],
    coatColor: "rgb(255, 0, 0)",
    eyesColor: "rgb(0, 0, 255)",
  },
  {
    name: WIZARD_NAME[1],
    coatColor: "rgb(240, 226, 38)",
    eyesColor: "rgb(0, 0, 255)",
  },
  {
    name: WIZARD_NAME[2],
    coatColor: "rgb(255, 0, 221)",
    eyesColor: "rgb(43, 255, 0)",
  },
  {
    name: WIZARD_NAME[3],
    coatColor: "rgb(28, 2, 255)",
    eyesColor: "rgb(252, 35, 136)",
  },
];

const renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(".setup-similar-label").textContent = wizard.name;
  wizardElement.querySelector(".wizard-coat").style.fill = wizard.coatColor;
  wizardElement.querySelector(".wizard-eyes").style.fill = wizard.eyesColor;

  return wizardElement;
};

const fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector(".setup-similar").classList.remove("hidden");

// for (var i = 0; i < wizards.length; i++) {
//   var wizardElement = similarWizardTemplate.cloneNode(true);

//   wizardElement.querySelector(".setup-similar-label").textContent =
//     wizards[i].name;
//   wizardElement.querySelector(".wizard-coat").style.fill = wizards[i].coatColor;
//   wizardElement.querySelector(".wizard-eyes").style.fill = wizards[i].eyesColor;

//   similarListElement.appendChild(wizardElement);
// }
