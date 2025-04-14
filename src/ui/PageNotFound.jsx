import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-48 flex h-screen w-screen flex-col items-center justify-start gap-6">
      <p className="fontino text-4xl font-bold">
        The page you wanted is not Found 😓
      </p>
      <span
        onClick={() => navigate(-1)}
        className="fontino flex cursor-pointer gap-4 text-4xl font-bold"
      >
        👈<p className="underline"> Go back</p>
      </span>
    </div>
  );
};

export default PageNotFound;
