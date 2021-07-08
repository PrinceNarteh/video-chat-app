import * as constants from "./constants.js";
import * as elements from "./elements.js";

export const updatePersonalCode = (personalCode) => {
  const personalCodeParagraph = document.getElementById(
    "personalCodeParagraph"
  );
  personalCodeParagraph.innerHTML = personalCode;
};

export const showIncomingCallingDialog = (
  callType,
  acceptCallHandler,
  rejectCallHandler
) => {
  const callTypeInfo =
    callType === constants.callType.CHAT_PERSONAL_CODE ? "Chat" : "Video";
  const incomingCallDialog = elements.getIncomingCallDialog(
    callTypeInfo,
    acceptCallHandler,
    rejectCallHandler
  );

  const dialog = document.getElementById("dialog");
  dialog.querySelectorAll("*").forEach((dialog) => dialog.remove());
  dialog.appendChild(incomingCallDialog);
};
