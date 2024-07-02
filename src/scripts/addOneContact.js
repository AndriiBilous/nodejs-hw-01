import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
  const newContact = createFakeContact();
  let contacts = [];

  try {
    const contactData = await fs.readFile(PATH_DB, 'utf8');
    contacts = JSON.parse(contactData);
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
  contacts.push(newContact);
  try {
    const data = JSON.stringify(contacts);
    await fs.writeFile(PATH_DB, data, 'utf8');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};

addOneContact();
