export const Buttons = ({ className, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`h-[32px] bg-slate-500 hover:bg-sky-700 rounded-[6px] border-solid px-[12px] py-[4px] flex items-center justify-center ${className}`}>
      {text}
    </button>
  );
};
