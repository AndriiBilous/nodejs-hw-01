import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  let contacts = [];
  try {
    const contactData = await fs.readFile(PATH_DB, 'utf8');
    contacts = JSON.parse(contactData);
    return contacts.length;
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
};

console.log(await countContacts());
