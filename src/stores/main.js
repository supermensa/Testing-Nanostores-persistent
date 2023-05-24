import { persistentMap } from '@nanostores/persistent'

export const profile = persistentMap('profile:', {
    "user": "bobbyjoe"
})

