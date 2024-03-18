import { checkAuthStatus, getAccessToken } from '..'
import { useBoundStore } from '../../store/bound.store'
import { AUTH_STATUS } from '../../const'

export const useAuth = () => {
  const status = useBoundStore(state => state.status)
  // const onChecking = useBoundStore(state => state.onChecking)
  const onLogin = useBoundStore(state => state.onLogin)
  const onLogout = useBoundStore(state => state.onLogout)
  const user = useBoundStore(state => state.user)
  const isLogged = status === AUTH_STATUS.AUTHENTICATED

  const onCheckAuthToken = async (token: string) => {
    if (!token) return onLogout()

    try {
      const { token:newToken, user} = await checkAuthStatus(token)

      window.localStorage.setItem('TOKEN', newToken)
      onLogin(user)
    } catch (error) {
      onLogout()
      window.localStorage.removeItem('TOKEN')
      throw error
    }
  }

  const onCheckCodeToken = async (code: string) => {
    if (!code) return

    try {
      const {token, ...user} = await getAccessToken(code)
      
      window.localStorage.setItem('TOKEN', token)
      onLogin(user)
    } catch (error) {
      onLogout()
      throw error
    }
  }
  

  return {
    user,
    status,
    isLogged,

    onLogout,
    onCheckAuthToken,
    onCheckCodeToken

  }
}
