import "./App.css";

function Sidebaroption({ icon, text }) {
  const st = { margin: "0px 20px", fontSize: "50px", color: "black" ,};
  const sts = { fontSize: "25px", color: "black ", fontFamily: "verdana" };

  return (
    <>
      <p className="sidebar-bgcolor" style={{ borderRadius: "100px" }}>
        <span style={st}>{icon}</span>
        <span style={sts}>{text}</span>
      </p>
    </>
  );
}
export default Sidebaroption;
