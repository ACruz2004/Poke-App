import videobg from "../assets/PokeballVid.mp4";

const MakeHeadVid = () => {
  return (
    <div className="main">
      <video src={videobg} autoPlay loop muted playsInline />
      <div className="text">
        <h1>Welcome</h1>
        <p>To PokéTrove!</p>
      </div>
    </div>
  );
};

export default MakeHeadVid;
