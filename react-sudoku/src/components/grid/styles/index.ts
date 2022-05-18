import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
`

export const Row = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-flow: row;
        &:nth-child(3n+1) {
            div {
                border-top: solid 3px ${theme.colors.black};
            }
        }
        div {
            &:nth-of-type(1) {
                border-left: solid 4px ${theme.colors.black};
            }
            &:nth-of-type(3n) {
                border-right: solid 3px ${theme.colors.black};
            }
            &:nth-of-type(9) {
                border-right: solid 4px ${theme.colors.black};
            }
        }
        &:nth-child(1) {
            div {
                border-top: solid 4px ${theme.colors.black};
            }
        }
        &:nth-child(9)
            div {
                border-bottom: solid 4px ${theme.colors.black};
            }
        }
    `}
`