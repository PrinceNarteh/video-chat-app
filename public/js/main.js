const socket = io("/");

socket.on("connect", () => {
  console.log("Successfully connected to socket.io server");
  console.log("Working");
  console.log(socket.id);
});
