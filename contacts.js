const fs = require("fs/promises");
const path = require("path");
const contactPath = path.join(__dirname, "./db/contacts.json");
const readFile = async () => {
  return JSON.parse(await fs.readFile(contactPath, "utf-8"));
};

// виводить список контактів
async function listContacts() {
  const listOfContacts = await readFile();
  return listOfContacts;
}

// виводить контакт по айді
async function getContactById(contactId) {
  const listOfContacts = await readFile();
  return listOfContacts.find((item) => {
    if (contactId.toString() === item.id) {
      return item;
    }
  });
}

// видаляє контакт по айді
async function removeContact(contactId) {
  const listOfContacts = await readFile();
  return listOfContacts.filter((item) => {
    return contactId.toString() !== item.id;
  });
}

// додає новий контакт
async function addContact(name, email, phone) {
  const listOfContacts = await readFile();
  const newContact = {
    name,
    email,
    phone,
    id: (listOfContacts.length + 1).toString(),
  };
  listOfContacts.push(newContact);
  return listOfContacts;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
