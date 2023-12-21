import "./Button.scss";

const backgroundColor = localStorage.getItem("color");
export default function Button({
  children,
  type = "",
  border = "",
  className = "",
  color = "#fff",
  backgroundColor = null,
  onClick = () => {},
  ...rest
}) {
  const handleClick = (e) => {
    onClick(e);
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      style={{
        backgroundColor: backgroundColor,
        color: color,
        borderWidth: border,
      }}
      className={`normalButton ${className} ${
        backgroundColor === null && "gradient"
      }`}
      {...rest}
    >
      <div className={`children ${className}`}>{children}</div>
    </button>
  );
}
