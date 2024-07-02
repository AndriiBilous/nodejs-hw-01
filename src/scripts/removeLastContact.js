import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
  let contacts = [];

  try {
    const contactData = await fs.readFile(PATH_DB, 'utf8');
    contacts = JSON.parse(contactData);
    if (contacts.length === 0) return;
    contacts.pop();
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
  const data = JSON.stringify(contacts);
  try {
    await fs.writeFile(PATH_DB, data, 'utf8');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};

removeLastContact();
