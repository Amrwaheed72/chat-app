import { BiUser } from 'react-icons/bi';
import { FaSearch } from 'react-icons/fa';

const ChatListSkeleton = () => {
  const SkeletonUsers = Array(10).fill(null);
  return (
    <div className="border-base-300 flex h-full w-20 flex-col border-r transition-all duration-200 md:w-72">
      <div className="border-base-300 w-full border-b p-2">
        <div className="flex items-center gap-2">
          <BiUser className="h-6 w-6" />
          <span className="fontino hidden font-medium md:block">Contacts</span>
        </div>
      </div>
      <div className="border-base-300 relative w-full border-b p-2 md:block hidden">
        <input
          className="border-base fontino mt-2 hidden w-full rounded-lg border pl-3 focus:outline-none focus:placeholder:hidden md:block"
          placeholder="search for a chat..."
          type="search"
        />
        <FaSearch
          className="absolute top-5 right-5 hidden md:block"
          size={16}
        />
      </div>
      {/* skeleton contacts */}
      <div className="w-full overflow-y-auto py-3">
        {SkeletonUsers.map((_, index) => (
          <div className="flex w-full items-center gap-3 p-3" key={index}>
            {/* avatar Skeleton */}
            <div className="relative mx-auto lg:mx-0">
              <div className="skeleton size-12 rounded-full" />
            </div>
            {/* users skeleton */}
            <div className="hidden min-w-0 flex-1 text-left md:block">
              <div className="skeleton mb-2 h-4 w-32" />
              <div className="skeleton h-3 w-16" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatListSkeleton;
