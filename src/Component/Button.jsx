const Button = (props) => {
  const { children, width = "w-32", onclick } = props;
  return (
    <button
      className={`py-3 font-semibold ${width} mx-1 bg-black-500 transition ease-in duration-300 border rounded-full hover:bg-slate-400 hover:text-slate-800`}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export default Button;
