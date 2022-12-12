import React from "react";
import styled from "styled-components";
import pallete from "../styles/palettes";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 750px;
  height: 52px;
  padding: 0 12px;
  border-bottom: 1px solid ${pallete.gray};
  h1 {
    font-size: 21px;
  }
  margin: auto;
`;

const Header: React.FC = () => {
    return (
      <Container>
        <h1>Jerrynim's TodoList</h1>
      </Container>
    );
  };
  
  export default Header;