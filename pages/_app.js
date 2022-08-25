import '../styles/globals.css'
import { ItemsProvider } from '../context/creditcards'
import {TabsProvider} from '../context/currentTab'
import {UserProvider} from '../context/signedUser'
import {ThemeProvider} from '../context/themePreference'

function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider>
    <UserProvider>
      <TabsProvider>
        <ItemsProvider>
          <Component {...pageProps} />
        </ItemsProvider>
      </TabsProvider>
    </UserProvider>
  </ThemeProvider>
  )
}

export default MyApp
