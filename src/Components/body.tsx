interface MakeHeadProps {
  toggleNode: number;
  handleToggle: () => void;
}

const MakeBody: React.FC<MakeHeadProps> = ({ toggleNode }) => {
  return <body className={toggleNode == 1 ? "bod" : "bodDark"}></body>;
};

export default MakeBody;
