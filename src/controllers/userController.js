import { saveUserToDB, getUserById } from '@/services/userService';

export async function handleUserLogin(req, res) {
  if (req.method !== 'POST')
    return res.status(405).json({ message: 'Method Not Allowed' });
  try {
    const userInfo = req.body;
    const user = await saveUserToDB(userInfo);
    return res.status(200).json({ success: true, user });
  } catch {
    return res
      .status(500)
      .json({ success: false, message: 'Internal Server Error' });
  }
}

export async function getUserProfile(req, res) {
  try {
    const user = await getUserById(req.params.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    return res.status(200).json({ success: true, user });
  } catch {
    return res
      .status(500)
      .json({ success: false, message: 'Internal Server Error' });
  }
}
