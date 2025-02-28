const Footer = () => {
  return (
    <div className="flex items-center justify-center mt-4">
      <p className="text-xs text-gray-400 my-2">
        All rights reserved &copy; {new Date().getFullYear()} Petro Arva
      </p>
    </div>
  );
};

export default Footer;
