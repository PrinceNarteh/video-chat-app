import * as store from "./store.js";
import * as wss from "./wss.js";
import * as webRTC from "./webRTCHandler.js";
import * as constants from "./constants.js";

// initialization of socketIO connection
const socket = io("/");
wss.registerSocketEvents(socket);

// register event lister for personal code copy
const personalCodeCopyBtn = document.getElementById("personalCodeCopyButton");
personalCodeCopyBtn.addEventListener("click", () => {
  const personalCode = store.getState().socketId;
  navigator?.clipboard.writeText(personalCode);
});

// register event lister for connection buttons
const personalCodeChatBtn = document.getElementById("personalCodeChatButton");
const personalCodeVideoBtn = document.getElementById("personalCodeVideoButton");

personalCodeChatBtn.addEventListener("click", () => {
  console.log("Chat button clicked");
  const calleePersonalCode = document.getElementById("personalCodeInput").value;
  const callType = constants.callType.CHAT_PERSONAL_CODE;
  webRTC.sendPreOffer(callType, calleePersonalCode);
});

personalCodeVideoBtn.addEventListener("click", () => {
  console.log("Chat Video clicked");
  const calleePersonalCode = document.getElementById("personalCodeInput").value;
  const callType = constants.callType.VIDEO_PERSONAL_CODE;
  webRTC.sendPreOffer(callType, calleePersonalCode);
});
