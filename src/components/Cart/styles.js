import styled from "styled-components";

export const CartStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 30px 10px;
  background: #f5f5f5;
  border-radius: 0px 0px 5px 5px;

  .cartTitle {
    background: #27ae60;
    border-radius: 5px 5px 0px 0px;
    width: 100%;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  ul {
    width: 100%;
    min-height: 150px;
    background: #f5f5f5;
    border-radius: 0px 0px 5px 5px;
  }
  .divTotal {
    width: 100%;
    background: #f5f5f5;
    border-radius: 0px 0px 5px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 140px;
    border-top: #e0e0e0 solid 1px;
  }
  .divTotal div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 20px;
  }
  h5 {
    font-weight: 700;
  }
  p {
    font-size: 16px;
  }

  button {
    width: 95%;
    background: #e0e0e0;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    height: 60px;
    margin-bottom: 10px;
  }

  .divNoCard h2 {
    font-size: 18px;
    margin: 30px 0 10px 0;
  }

  .divNoCard p {
    font-size: 14px;
    color: #828282;
  }

  .hidden {
    display: none;
  }

  @media (min-width: 700px) {
    width: 420px;
  }
`;
