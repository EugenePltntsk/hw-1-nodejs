// index.js
const argv = require("yargs").argv;
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const data = await listContacts();
      console.table(data);
      break;

    case "get":
      const getData = await getContactById(id);
      console.table(getData);
      break;

    case "add":
      console.table(await addContact(name, email, phone));
      break;

    case "remove":
      const removeData = await removeContact(id);
      console.table(removeData);

      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
