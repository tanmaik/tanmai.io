const Button = (props) => {
  return (
    <div className="px-2 py-4 text-center bg-gray-300 font-bold text-black hover:bg-gray-100 cursor-pointer rounded-xl transition-all">
      <p>{props.title}</p>
    </div>
  );
};

export default Button;
