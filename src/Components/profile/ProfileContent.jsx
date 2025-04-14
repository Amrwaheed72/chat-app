import { FaCamera } from 'react-icons/fa6';
import { UseChatAppContext } from '../../context/chatAppProvider';
import { BiUser } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { useState } from 'react';

const ProfileContent = () => {
  const [SelectedImage, setSelectedImage] = useState(null);
  const { isUpdatingProfile, setIsUpdatingProfile } = UseChatAppContext();
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImage(base64Image);
      //   await updateProfile({ profilePic: base64Image });
    };
  };
  return (
    <div className="h-screen pt-20">
      <div className="mx-auto max-w-2xl p-4 py-8">
        <div className="bg-base-300 space-y-8 rounded-xl p-6">
          <div className="text-center">
            <h1 className="fontino text-2xl font-semibold">Profile</h1>
            <p className="fontino mt-2"> Your Profile information</p>
          </div>
          {/* avatar */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={SelectedImage || '/user.png'}
                alt="pfp"
                className="size-32 rounded-full border-4 object-cover"
              />
              <label
                htmlFor="avatar-upload"
                className={`bg-base-content absolute right-0 bottom-0 cursor-pointer rounded-full p-2 transition-all duration-200 hover:scale-105 ${isUpdatingProfile ? 'pointer-events-none animate-pulse' : ''}`}
              >
                <FaCamera className="text-base-200 h-5 w-5" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <p className="fontino text-sm text-zinc-400">
              {isUpdatingProfile
                ? 'Uploading.....'
                : 'Click on the camera to upload your profile picture'}
            </p>
          </div>
          {/* userInfo */}
          <div className="space-y-6">
            <div className="space-y-1.5">
              <div className="fontino flex items-center gap-2 text-sm text-zinc-400">
                <BiUser className="h-4 w-4" />
                Full Name
              </div>
              <p className="fontino bg-base-200 rounded-lg border px-4 py-2.5">
                Amr Waheed
              </p>
            </div>
            <div className="space-y-1.5">
              <div className="fontino flex items-center gap-2 text-sm text-zinc-400">
                <MdEmail className="h-4 w-4" />
                Email Address
              </div>
              <p className="fontino bg-base-200 rounded-lg border px-4 py-2.5">
                amr@gmail.com
              </p>
            </div>
          </div>
          <div className="bg-base-300 mt-6 rounded-xl p-6">
            <h2 className="fontino mb-4 text-lg font-medium">
              Account Information
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between border-b border-zinc-700 py-2">
                <span className="fontino">Member Since</span>
                <span className="fontino text-lg">10/2/2025</span>
              </div>

              <div className="flex items-center justify-between py-2">
                <span className="fontino">ِAccount Status</span>
                <span className="fontino text-lg text-green-500">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
