import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 120px;
  width: 100vw;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    height: 100%;
    padding: 0 20px;
  }
  img {
    height: 24px;
    width: 160px;
    margin-top: 10px;
  }
  input {
    width: 90%;
    background: #ffffff;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    height: 50px;
    position: relative;
    padding-left: 10px;
  }
  input::placeholder {
    font-size: 14px;
    color: #e0e0e0;
  }

  button {
    background: #27ae60;
    border: 2px solid #27ae60;
    border-radius: 8px;
    width: 107px;
    height: 40px;
    color: white;
    font-size: 14px;
    position: absolute;
    top: 62px;
    right: 20px;
  }

  @media (min-width: 700px) {
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      max-width: 1440px;
      position: relative;
    }

    input {
      width: 350px;
    }
    button {
      top: 40px;
    }
  }
`;
