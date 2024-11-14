const allCheckBox = document.querySelectorAll(".custom-checkbox");
const allInputField = document.querySelectorAll(".goal-input");
const errorLabel = document.querySelector(".error-label");
const progressBar = document.querySelector(".progress-bar");
const progressValue = document.querySelector(".progress-value");
const progressLabel = document.querySelector(".progress-label");
const progressQuoteBottom = document.querySelector(".quote");

const quoteBottom = [
  '“Move one step ahead, today!”',
  '“Keep Going, You’re making great progress!”',
  '“Keep Going, You’re making great progress!”',
  '“Keep Going, You’re making great progress!”',
  '“Keep Going, You’re making great progress!”',
  '“Keep Going, You’re making great progress!”'
]

const allQuotes = [
  "Raise the bar by completing your goals!",
  "Well begun is half done!",
  "Just a step away, keep going!",
  "Whoa! You just completed all the goals, time for chill :D",
];

// page reload code for save
const allGoals = JSON.parse(localStorage.getItem("allInputs")) || {};
let completedGoalsCount = Object.values(allGoals).filter(
  (goal) => goal.completed
).length;

progressValue.style.width = `${(completedGoalsCount / allInputField.length) * 100}%`;
progressValue.firstElementChild.innerText = `${completedGoalsCount}/${allInputField.length} completed`;
progressLabel.innerText = allQuotes[completedGoalsCount];
progressQuoteBottom.innerText = quoteBottom[completedGoalsCount];
//

allCheckBox.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    const allInputFieldsFilled = [...allInputField].every((input) => {
      return input.value;
    });

    if (allInputFieldsFilled) {
      checkbox.parentElement.classList.toggle("completed");
      const inputId = checkbox.nextElementSibling.id;
      allGoals[inputId].completed = !allGoals[inputId].completed;
      let completedGoalsCount = Object.values(allGoals).filter(
        (goal) => goal.completed
      ).length;
      // for label bar code on check condition
      progressValue.style.width = `${(completedGoalsCount / allInputField.length) * 100}%`;
      progressValue.firstElementChild.innerText = `${completedGoalsCount}/${allInputField.length} completed`;
      progressLabel.innerText = allQuotes[completedGoalsCount];
      progressQuoteBottom.innerText = quoteBottom[completedGoalsCount];
      //
      localStorage.setItem("allInputs", JSON.stringify(allGoals));
    } else {
      progressBar.classList.add("show-error");
    }
  });
});

allInputField.forEach((input) => {
  if (allGoals[input.id]) {
    input.value = allGoals[input.id].name;

    if (allGoals[input.id].completed) {
      input.parentElement.classList.add("completed");
    }
  }

  input.addEventListener("focus", () => {
    progressBar.classList.remove("show-error");
  });

  input.addEventListener("input", (e) => {
    if (allGoals[input.id] && allGoals[input.id].completed) {
      input.value = allGoals[input.id].name;
      return;
    }

    if (allGoals[input.id]) {
      allGoals[input.id].name = input.value;
    } else {
      allGoals[input.id] = {
        name: input.value,
        completed: false,
      };
    }
    localStorage.setItem("allInputs", JSON.stringify(allGoals));
  });
});
