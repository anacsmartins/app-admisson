import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: rgb(255, 117, 0);
  background: linear-gradient(
    258deg,
    rgba(255, 117, 0, 1) 8%,
    rgba(232, 5, 55, 1) 53%
  );
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0px 24px;

  h1 {
    color: #fff;
    font-size: 24px;
  }
`;

const HeaderSpacer = styled.div`
  height: 64px;
`;

export function Header() {
  return (
    <>
      <HeaderContainer>
        <h1>Caju Front Teste</h1>
      </HeaderContainer>
      <HeaderSpacer />
    </>
  );
}
