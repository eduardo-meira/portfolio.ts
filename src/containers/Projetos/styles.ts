import styled from 'styled-components'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
  row-gap: 24px;
  padding-right: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-right: 0;
    column-gap: 0;
    row-gap: 16px;
  }
`
