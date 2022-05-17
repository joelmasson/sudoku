import 'styled-components'

import { theme } from '../styles'

type theme = typeof theme

declare module 'styled-components' {
    export interface DefaultTheme extends theme { }
}