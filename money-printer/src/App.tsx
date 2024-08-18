import "./App.css";
import * as solanaWeb3 from "@solana/web3.js";

function App() {
  console.log(solanaWeb3.Keypair.generate());
  return (
    <>
      <div>Hello WEB3</div>
    </>
  );
}

export default App;
