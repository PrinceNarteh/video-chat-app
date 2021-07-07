export const updatePersonalCode = (personalCode) => {
  const personalCodeParagraph = document.getElementById(
    "personalCodeParagraph"
  );
  personalCodeParagraph.innerHTML = personalCode;
};
