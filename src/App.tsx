import Board from "./components/Board";
import logo from "/logo.png";


function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <header className="flex justify-between border-b border-black">
        <img className="w-20 ml-16" src={logo} alt="logo" />
        <ul className="flex gap-16 font-bold items-center mr-16 text-2xl">
          <li className="cursor-pointer">Play</li>
          <li className="cursor-pointer">Settings</li>
          <li className="cursor-pointer">Rules</li>
          <li className="cursor-pointer">Author</li>
        </ul>
      </header>
      <main className="flex-1 flex items-center">
        <Board/>
      </main>
    </div>
  )
}

export default App
