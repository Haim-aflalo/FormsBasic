import fs from 'fs';

async function addUser(data) {
  const users = await getUsers();
  console.log(users);
  users.push(data);
  return await fs.promises.writeFile(
    'C:/Users/INTERNET/Desktop/Html/FormsBasic/data/data.json',
    JSON.stringify(users),
  );
}

async function getUsers() {
  const data = await fs.promises.readFile(
    'C:/Users/INTERNET/Desktop/Html/FormsBasic/data/data.json',
    'utf-8',
  );
  return JSON.parse(data);
}

export const functions = { addUser, getUsers };
