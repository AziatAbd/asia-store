import { useParams } from "react-router-dom";
import styled from "styled-components";

export const Mac = ({ mac }) => {
  const { id } = useParams();

  const macPrice = mac.find((el) => el.id === id);
  return (
    <Container>
      <h2>{macPrice.title}</h2>
      <AAA>
        <StylrdImg src={macPrice.img} alt="" />
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          dolore ullam fugiat, vel numquam eius, a saepe illo quidem doloremque
          eum tenetur obcaecati praesentium facilis quod quisquam necessitatibus
          tempore? Fugiat.
        </span>
      </AAA>
      <h3>{macPrice.price}</h3>
    </Container>
  );
};

const StylrdImg = styled.img`
  width: 300px;
`;
const Container = styled.div`
  display: grid;
  justify-content: center;
`;

const AAA = styled.div`
  display: flex;
  align-items: center;

  span {
    width: 500px;
  }
`;
