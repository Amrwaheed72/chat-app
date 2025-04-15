import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { CiImageOn } from 'react-icons/ci';
import { HiXMark } from 'react-icons/hi2';
import { IoIosSend } from 'react-icons/io';
import { MdKeyboardVoice } from 'react-icons/md';

const MessageInput = () => {
  const [text, setText] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith('image/')) {
      toast.error('Please select a valid image file');
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  const handleSendMessaages = (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;
    try {
      // await sendMessage({
      //   text: text.trim(),
      //   image: imagePreview,
      // });
      setText('');
      setImagePreview(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="w-full p-4">
      {imagePreview && (
        <div className="mb-3 flex items-center gap-2">
          <div className="relative">
            <img
              src={imagePreview}
              alt="preview"
              className="h-20 w-20 rounded-lg border border-zinc-700 object-cover"
            />
            <button
              onClick={removeImage}
              className="bg-base-300 absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full"
              type="button"
            >
              <HiXMark />
            </button>
          </div>
        </div>
      )}
      {/* input */}
      <form className="flex items-center gap-2">
        <div className="flex flex-1 gap-2">
          <input
            type="text"
            className="input input-bordered input-sm sm:input-md w-full rounded-lg focus:outline-none"
            placeholder="type a message...."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="file"
            className="hidden"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
          />
          <button
            type="button"
            className={`btn btn-circle hidden sm:flex ${imagePreview ? 'text-emerald-500' : 'text-zinc-400'}`}
            onClick={() => fileInputRef.current?.click()}
          >
            <CiImageOn className="text-primary" size={22} />
          </button>
        </div>
        <button type="submit" className="btn btn-sm btn-circle">
          <MdKeyboardVoice className="text-primary" size={22} />
          {/* <div className="chat-bubble">
            <audio controls src={message.voiceUrl} />
          </div> */}
        </button>
        <button
          onClick={handleSendMessaages}
          type="submit"
          className="btn btn-sm btn-circle"
          disabled={!text.trim() && !imagePreview}
        >
          <IoIosSend className="text-primary" size={22} />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
