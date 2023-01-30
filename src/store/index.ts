import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

export const pinia = createPinia().use(
  createPersistedState({
    storage: {
      getItem (key: string): string | null {
        return uni.getStorageSync(key)
      },
      setItem (key: string, value: string) {
        uni.setStorageSync(key, value)
      }
    }
  })
)
