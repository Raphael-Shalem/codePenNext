import { RootStoreProvider } from './context/rootStore';
import WorksSpace from './workSpace';


function App() {

  return (
      <RootStoreProvider>
        <WorksSpace/>
      </RootStoreProvider>
  )
}

export default App
