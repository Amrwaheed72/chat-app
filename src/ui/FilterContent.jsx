const FilterContent = ({ icon, text }) => {
  return (
    <div
      className="hover:bg-base-300 flex items-center justify-start gap-1 hover:cursor-pointer"
      title={text.toLowerCase()}
    >
      {icon}
      <p className="fontino">{text}</p>
    </div>
  );
};

export default FilterContent;
