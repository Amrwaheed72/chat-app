import { FaRegMessage } from "react-icons/fa6";

const Logo = ({title,description}) => {
  return (
    <div className="mb-8 text-center">
      <div className="group flex flex-col items-center gap-2">
        <div className="bg-primary/10 group-hover:bg-primary/20 flex size-12 items-center justify-center rounded-xl transition-colors">
          <FaRegMessage className="text-primary size-6" />
        </div>
        <h1 className="fontino mt-2 text-2xl font-bold">
          {title}
        </h1>
        <p className="fontino text-base-content/60">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Logo;
