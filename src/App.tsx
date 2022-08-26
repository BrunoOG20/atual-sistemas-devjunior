import { HomeContainer } from './styles/HomeStyles';
import GlobalStyles from './styles/global';
import Routes from './routes'

function App() {

  return (
    <>
      <GlobalStyles />
      <HomeContainer>
        <Routes/>
      </HomeContainer>
    </>
  )
}

export default App
