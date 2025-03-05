import User from '@/models/User';
import connectDB from '@/configs/connectDB';

export async function saveUserToDB(userInfo) {
  await connectDB();

  const existingUser = await User.findOne({ clerkId: userInfo.id });

  if (!existingUser) {
    return await User.create({
      clerkId: userInfo.id,
      email: userInfo.email_addresses[0].email_address,
      fullName: `${userInfo.first_name} ${userInfo.last_name}`,
      avatar: userInfo.image_url,
    });
  }

  return existingUser;
}

export async function getUserById(userId) {
  await connectDB();
  return await User.findById(userId);
}
