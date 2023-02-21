import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <MainContainer>
        <ContainerInfo>
          <img
            src="	https://asiastore.kg/catalog/view/theme/default/image/asiastore-logo.png"
            alt=""
          />
          <PhoneDiv>
            <p>
              <a href="tel:+996220011111">+996 220 011111</a>
            </p>
            <p>
              <a href="tel:+996554111000">+996 554 111000</a>
            </p>
            <p>
              <a href="tel:+996502111100">+996 502 111100</a>
            </p>
          </PhoneDiv>

          <h6>
            Пн-Сб с 9:30 до 21:00
            <br /> Вс с 9:30 до 20:00
          </h6>
          <hr />

          <IconDiv>
            <img
              src="https://www.svgrepo.com/download/131680/instagram.svg"
              alt=""
              width="50px"
            />
            <img
              src="https://www.svgrepo.com/show/30508/facebook-square-social-logo.svg"
              alt=""
              width="50px"
            />
          </IconDiv>
        </ContainerInfo>
        <InformationDiv>
          <h5>Информация</h5>
          <ul>
            <li>О магазине</li>
            <li>Контакты</li>
            <li>Товары в кредит</li>
            <li>Trade-in</li>
            <li>Гарантия</li>
            <li>Политика конфиденциальности</li>
            <li>Оферта</li>
            <li>Связаться с нами</li>
          </ul>
        </InformationDiv>

        <CatalogDiv>
          <h5>Каталог</h5>
          <ul class="list-unstyled">
            <li>iPhone</li>
            <li>Mac</li>
            <li>iPaв</li>
            <li>Watch</li>
            <li>AirPods</li>
            <li>Garmin</li>
            <li>Аксессуары</li>
            <li>JBL</li>
            <li>Beats</li>
            <li>Гаджеты</li>
            <li>Яндекс</li>
          </ul>
        </CatalogDiv>
      </MainContainer>

      <BorderDiv>
        <hr />
      </BorderDiv>

      <StyledEnd>
        <div>
          <p>Кыргызстан, Бишкек, ЦУМ Айчүрɵк (Чуй проспект, 155)</p>
          <p>Все права защищены © 2023</p>
        </div>
        <Stlyedend>
          <p>ОсОО "Азия Сеть Ритэйл"</p>
          <p>
            Юридический адрес: Кыргызская Республика, г. Бишкек, ул.
            <br /> Московская, д. 150
          </p>
        </Stlyedend>
      </StyledEnd>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  margin: 0 auto;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #303030;
  border-top: 1px solid #ddd;
  color: #e2e2e2;
  font-size: 0.75em;
  line-height: 2em;
`;

const PhoneDiv = styled.div`
  margin-top: 20px;
`;
const IconDiv = styled.div`
  img {
    margin-left: 10px;
    opacity: 0.4;
    border-radius: 10px;
  }
  img:hover {
    opacity: 0.6;
  }
`;
const MainContainer = styled.div`
  widows: 600px;
  display: flex;
  justify-content: space-around;
`;

const InformationDiv = styled.div`
  margin-left: 200px;
  width: 200px;
  h5 {
    font-size: 1.05rem;
  }
  ul {
    margin-top: 10px;
  }
  li {
    font-size: 0.7rem;
    list-style: none;
  }
  li:hover {
    color: #f8a100;
  }
`;

const CatalogDiv = styled.div`
  padding-right: 90px;
  width: 200px;
  h5 {
    font-size: 1.05rem;
  }
  ul {
    margin-top: 10px;
  }
  li {
    font-size: 0.7rem;
    list-style: none;
  }
  li:hover {
    color: #f8a100;
  }
`;
const ContainerInfo = styled.div`
  width: 200px;
  hr {
    border-top: none;
    margin-bottom: 20px;
    width: 480px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #8a8787;
    margin-left: 20px;
    margin-top: 50px;
  }

  p {
    padding-left: 20px;
    font-weight: bold;
  }
  a {
    color: white;
    font-size: 1.25rem;
    text-decoration: none;
  }

  a:hover {
    color: #f8a100;
  }
  h6 {
    padding-left: 20px;
    font-size: 1.3em;
    margin-top: 30px;
  }
`;

const BorderDiv = styled.div`
  hr {
    margin-left: 120px;
    width: 1200px;
    border: none;

    border-top: none;
    margin-bottom: 20px;
    border-bottom: 1px solid #666;
    margin-left: 120px;
    margin-top: 20px;
  }
`;
const Stlyedend = styled.div`
  p {
    text-align: right;
  }
`;
const StyledEnd = styled.div`
  margin-left: 120px;
  margin-top: 30px;
  width: 1200px;
  display: flex;
  justify-content: space-between;
`;
