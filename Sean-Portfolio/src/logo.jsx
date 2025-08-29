import logo from "../assets/logo.jpg";

export const Logo = ({ size = 100 }) => {
  return (
    <img
      src={logo}
      alt="Logo"
      style={{ width: size, height: size }}
      className="object-contain"
    />
  );
};
