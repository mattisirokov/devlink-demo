interface ButtonProps {
  text: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function Button({ text, type, onClick }: ButtonProps) {
  return (
    <button
      title={text}
      type={type}
      className={"bg-green-500 text-white py-2 px-4 rounded-md"}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
