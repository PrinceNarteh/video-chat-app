let state = {
  socketId: null,
  localStream: null,
  remoteStream: null,
  screenSharingStream: null,
  allowConnectionsFromStrangers: false,
  screenSharingActive: false,
};

export const getState = () => state;

export const setSocketId = (socketId) => {
  state = {
    ...state,
    socketId,
  };
};

export const setRemoteStream = (stream) => {
  state = {
    ...state,
    remoteStream: stream,
  };
};

export const setLocalStream = (stream) => {
  state = {
    ...state,
    localStream: stream,
  };
};

export const setAllowConnectionsFromStrangers = (allowConnection) => {
  state = {
    ...state,
    allowConnectionsFromStrangers: allowConnection,
  };
};

export const setScreenSharingActive = (screenSharingActive) => {
  state = {
    ...state,
    screenSharingActive,
  };
};

export const setScreenSharingStream = (screenSharingStream) => {
  state = {
    ...state,
    screenSharingStream,
  };
};
