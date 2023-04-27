const Footer = ({ count }) => {
  return (
    <div
      style={{
        backgroundColor: "green",
        position: "sticky",
        bottom: 0,
        width: "100%",
        padding: 16,
      }}
    >
      Totle Published News Count: {count}
    </div>
  );
};

export default Footer;
