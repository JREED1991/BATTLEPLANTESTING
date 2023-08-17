// script.js

function generateResults() {
  const lighting = parseInt(document.getElementById("lighting").value);
  const visibility = parseInt(document.getElementById("visibility").value);
  const response = parseInt(document.getElementById("response").value);
  const training = parseInt(document.getElementById("training").value);

  const totalWeightedScore = (lighting + visibility + response + training) / 4;
  const totalGrade = calculateGrade(totalWeightedScore);

  document.getElementById("lightingResult").innerText = `Lighting: ${lighting}%`;
  document.getElementById("visibilityResult").innerText = `Visibility: ${visibility}%`;
  document.getElementById("responseResult").innerText = `Response: ${response}%`;
  document.getElementById("trainingResult").innerText = `Training Programs: ${training}%`;
  document.getElementById("totalGrade").innerText = `Total Grade: ${totalGrade}`;

  document.getElementById("results").style.display = "block";
  document.getElementById("offer").style.display = "block";
}

function calculateGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function purchaseOffer() {
  alert("Thank you for your interest in the special offer!");
}