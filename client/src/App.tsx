import './App.css'
import { SocketProvider } from './provider/SocketProvider'
import { GameProvider } from './provider/GameProvider'
import Lobby from './components/Lobby'

function App() {
  return (
    <SocketProvider>
      <GameProvider>
        <Lobby />
      </GameProvider>
    </SocketProvider>
  )
}

export default App;
