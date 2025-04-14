import { FaRegMessage } from 'react-icons/fa6';

const NoChatSelected = () => {
  return (
    <div className="bg-base-100/50 flex w-full flex-1 flex-col items-center justify-center p-16">
      <div className="max-w-lg space-y-4 text-center">
        <div className="mb-4 flex justify-center gap-4">
          <div className="relative">
            <div className="bg-accent/10 flex h-16 w-16 animate-bounce items-center justify-center rounded-2xl">
              <FaRegMessage className="size-6 text-base" />
            </div>
          </div>
        </div>
        <h2 className="fontino text-3xl">Btngan</h2>
        <p className="fontino">
          Send and receive messages without keeping your phone online
        </p>
        <p className="fontino">
          Use Btngan on the Web,We are happy to serve you{' '}
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
