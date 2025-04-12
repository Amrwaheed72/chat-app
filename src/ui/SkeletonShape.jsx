const SkeletonShape = ({ title, description }) => {
  return (
    <div className="bg-base-200 hidden items-center justify-center lg:flex">
      <div className="flex w-100 flex-col gap-4">
        <div className="skeleton h-80 w-full"></div>
        <div className="skeleton h-24 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="mt-6 flex flex-col items-center justify-center text-center">
          <h2 className="fontino mb-4 text-2xl font-bold">{title}</h2>
          <p className="text-base-content/60 fontino">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SkeletonShape;
