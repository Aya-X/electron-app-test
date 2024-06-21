import Versions from './components/Versions'
import Tabs from './components/Tabs'
// import electronLogo from './assets/electron.svg'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <Versions></Versions>
      <Tabs></Tabs>
    </>
  )
}

export default App
