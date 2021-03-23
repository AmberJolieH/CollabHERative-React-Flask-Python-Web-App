//* ACTION TYPES
const LOAD_MESSAGES = '/messages/LOAD_MESSAGES';
const CREATE_MESSAGE = '/messages/CREATE_MESSAGE';
const REMOVE_MESSAGE = '/messages/REMOVE_MESSAGE';

//* ACTION CREATORS
const load = (messages) => ({
  type: LOAD_MESSAGES,
  messages,
});

const create = (message) => ({
  type: CREATE_MESSAGE,
  message,
});

const remove = (messageId) => ({
  type: REMOVE_MESSAGE,
  messageId,
});

