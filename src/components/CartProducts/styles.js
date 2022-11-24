import styled from "styled-components";

export const CartProductsStyled = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  margin: 10px;
  position: relative;

  div img {
    width: 70px;
    height: 70px;
    background-color: #e0e0e0;
  }
  h3 {
    font-size: 14px;
    margin-bottom: 10px;
  }
  h4 {
    color: #828282;
    font-size: 8px;
  }
  .titleDescription {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .buttonRemove {
    height: 10px;
    background-color: #f5f5f5;
    border: none;
    width: 30px;
    font-size: 12px;
    position: absolute;
    right: 40px;
    color: #828282;
  }
`;
