import styled from "styled-components";

export const UlStyled = styled.ul`
  height: 350px;
  width: 100vw;
  overflow-x: auto;
  list-style: none;
  display: flex;
  padding: 0;

  @media (min-width: 700px) {
    width: 100%;
    max-width: 1100px;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    height: 100%;
    margin-top: 20px;
  }
`;
