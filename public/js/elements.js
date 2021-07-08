export const getIncomingCallDialog = (
  callTypeInfo,
  acceptCallHandler,
  rejectCallHandler
) => {
  // dialog wrapper
  const dialog = document.createElement("div");
  dialog.classList.add("dialog_wrapper");

  // dialog content
  const dialogContent = document.createElement("div");
  dialogContent.classList.add("dialog_content");
  dialog.appendChild(dialogContent);

  const title = document.createElement("p");
  title.classList.add("dialog_title");
  title.innerHTML = `Incoming ${callTypeInfo} Call`;

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("dialog_image_container");
  const image = document.createElement("img");
  image.src = "./images/dialogAvatar.png";
  imageContainer.appendChild(image);

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("dialog_button_container");

  const acceptCallBtn = document.createElement("button");
  acceptCallBtn.classList.add("dialog_accept_call_button");
  const acceptCallImg = document.createElement("img");
  acceptCallImg.classList.add("dialog_button_image");
  acceptCallImg.src = "./images/acceptCall.png";
  acceptCallBtn.appendChild(acceptCallImg);
  btnContainer.appendChild(acceptCallBtn);

  const rejectCallBtn = document.createElement("button");
  rejectCallBtn.classList.add("dialog_reject_call_button");
  const rejectCallImg = document.createElement("img");
  rejectCallImg.classList.add("dialog_button_image");
  rejectCallImg.src = "./images/rejectCall.png";
  rejectCallBtn.appendChild(rejectCallImg);
  btnContainer.appendChild(rejectCallBtn);

  dialogContent.appendChild(title);
  dialogContent.appendChild(imageContainer);
  dialogContent.appendChild(btnContainer);

  return dialog;
};
