import styled from 'styled-components'

export const SideBar = styled.aside`
  text-align: center;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 0px;
  }

  img {
    margin-bottom: 12px;
  }

  p {
    margin: 18px 0;
  }
`

export const BotaoEstilizado = styled.button`
  font-size: 12px;
  font-weight: bold;
  border-radius: 12px;
  padding: 10px;
  color: ${(props) => props.theme.corDeFundo};
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
  border: none;

  @media (max-width: 768px) {
    height: 48px;
    width: 128px;
    font-size: 14px;
  }
`

export const SideBarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
  margin-bottom: 24px;
`
