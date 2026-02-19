import { useState } from "react";

export default function App() {

  const [output, setOutput] = useState("");

  const fetchData = async (type) => {
    const res = await fetch("http://localhost:5000/system-info");
    const data = await res.json();

    if (type === "platform") setOutput(data.platform);

    if (type === "userinfo")
    //   setOutput(JSON.stringify(data.userinfo, null, 2));
         setOutput(data.userinfo);

    if (type === "freemem")
    //  setOutput((data.freemem / 1024 ** 3).toFixed(2) + " GB");
        setOutput(data.freemem);

    if (type === "totalmem")
    //   setOutput((data.totalmem / 1024 ** 3).toFixed(2) + " GB");
         setOutput(data.totalmem);
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <button onClick={() => fetchData("platform")}>
          Platform
        </button>

        <button onClick={() => fetchData("userinfo")}>
          User Info
        </button>

        <button onClick={() => fetchData("freemem")}>
          Free Memory
        </button>

        <button onClick={() => fetchData("totalmem")}>
          Total Memory
        </button>

        <div style={styles.output}>
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "350px",
    padding: "20px",
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  output: {
    marginTop: "10px",
    minHeight: "60px",
    backgroundColor: "#f2f2f2",
    padding: "10px"
  }
};
