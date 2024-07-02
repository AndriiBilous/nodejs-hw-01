import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  let total = [];

  for (let i = 0; i < number; i += 1) {
    total.push(createFakeContact());
  }

  const data = JSON.stringify(total);

  try {
    await fs.writeFile(PATH_DB, data, 'utf8');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};

generateContacts(5);
