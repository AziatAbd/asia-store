import { Link } from "react-router-dom";
import styled from "styled-components";

const MacLayout = ({ mac }) => {
  return (
    <>
      {mac.map((el) => {
        return (
          <StyledContainer>
            <StyledLink to={`/apple-mac/about/${el.id}`}>
              <StyledImg src={el.img} alt="mac" />
              <span>{el.name}</span>
            </StyledLink>
          </StyledContainer>
        );
      })}
    </>
  );
};

export default MacLayout;

const StyledImg = styled.img`
  width: 300px;
  margin-right: 40px;
`;
const StyledContainer = styled.div`
  display: inline-block;
  text-align: center;

  :hover {
    box-shadow: 0px 5px 24px 13px rgba(34, 60, 80, 0.2);
  }
`;

// const Container = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: stretch;
//   margin: 0 auto;
//   width: 80%;
// `;

const StyledLink = styled(Link)`
  display: grid;
  padding: 20px;
  text-decoration: none;
  color: #222;

  :hover {
    border-color: #ff7f00;
    color: #ff7f00;
  }
`;
