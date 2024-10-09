interface MakeHeadProps {
  toggleNode: number;
  handleToggle: () => void;
}

const MakeBody: React.FC<MakeHeadProps> = ({ toggleNode }) => {
  return (
    <body className={toggleNode == 1 ? "bod" : "bodDark"}>
      <h1> Start of body </h1>
    </body>
  );
};

export default MakeBody;
