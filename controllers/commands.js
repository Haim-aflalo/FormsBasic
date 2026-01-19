import { functions } from '../services/functions.js';

export async function addUser(req, res) {
  try {
    await functions.addUser(req.body);
    return res.status(201).json({ message: 'User added successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function getUsers(req, res) {
  try {
    const users = await functions.getUsers();
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch users' });
  }
}
