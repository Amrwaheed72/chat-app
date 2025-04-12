import { Link } from 'react-router-dom';

const SignUpLoginRouting = ({ to, title, navigate }) => {
  return (
    <div className="text-center">
      <p className="fontino text-base-content/60">
        {title}
        <Link to={to} className="link link-primary">
          {navigate}
        </Link>
      </p>
    </div>
  );
};

export default SignUpLoginRouting;
