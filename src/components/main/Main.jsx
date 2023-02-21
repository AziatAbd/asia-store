import React from "react";
import styled from "styled-components";
export const Main = () => {
  return (
    <MainContainer>
      <Container>
        <div>
          <img
            src="https://asiastore.kg/catalog/view/theme/default/image/apple-authorized-dealer.png"
            alt=""
          />
        </div>
        <div>
          <h3>
            Asia Store – Первый официальный авторизованный партнёр компании
            Apple в
            <br />
            Кыргызстане со статусом Apple Authorised Reseller.
          </h3>
          <p>
            В нашем магазине можно не только купить iPhone, компьютер Mac или
            планшет iPad, а
            <br /> также другую технику Apple и аксессуары для неё. Asia Store –
            это место, в котором вам
            <br /> помогут с выбором техники, научат ей пользоваться, дадут
            советы по эксплуатации
            <br /> ваших гаджетов и предложат качественные аксессуары.
          </p>
          <p>
            Наш магазин является единственным авторизованным реселлером Apple и
            Garmin
            <br /> в Кыргызстане, а также официальным дистрибьютором JBL &
            Harman Kardon и умных
            <br /> устройств от Yandex.
          </p>
        </div>
      </Container>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  width: 100%;
`;

const Container = styled.div`
  widows: 500px;
  background: #f6f6f6;
  padding: 70px 0 90px;
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h3 {
    line-height: 1.7em;
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;
export default Main;
