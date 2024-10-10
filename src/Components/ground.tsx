interface MakeHeadProps {
  toggleNode: number;
  handleToggle: () => void;
}

const MakeGround: React.FC<MakeHeadProps> = ({ toggleNode }) => {
  return <body className={toggleNode == 1 ? "ground" : "groundDark"}></body>;
};

export default MakeGround;
