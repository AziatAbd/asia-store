import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import { Mac } from "./Mac";
import MacLayout from "./MacLayuot";

const MainRoutes = () => {
  const mac = [
    {
      img: "https://asiastore.kg/image/cachewebp/catalog/mac/macstudio/mac-studio-select-202203-670x540.webp",
      name: "Mac studio",
      title:
        "Apple Mac Studio, Apple M1 Max (10C CPU/24C GPU), 32 ГБ, 512 ГБ SSD, 2022",
      price: "215 990 сом",
      id: "1",
    },
    {
      img: "https://asiastore.kg/image/cachewebp/catalog/mac/studiodisplay/studio-display-og-202203-670x540.webp",
      name: "Mac screen",
      price: "213 990 сом",
      title:
        "APPLE Studio Display (Нанотекстурное стекло, подставка с регулируемым наклоном и высотой)",

      id: "2",
    },
    {
      img: "https://asiastore.kg/image/cachewebp/catalog/mac/macminim1pictures/m-670x540.webp",
      name: "Mac mini",
      price: "10000 com",
      title: "Apple Mac mini M2 (8С CPU/10С GPU) 8 ГБ, 256 ГБ Серебристый",
      id: "3",
    },
    {
      img: "https://asiastore.kg/image/cachewebp/catalog/imac/24inch/blue/imac-24-blue-cto-hero-202104-670x540.webp",
      title: "Apple iMac 24 M1 8 CPU 8 GPU 16 NE 16gbUM 256gb, Touch ID, Синий",
      name: "I Mac",
      price: "178 990 сом",
      id: "4",
    },

    {
      img: "https://asiastore.kg/image/cachewebp/catalog/mac/macbookpro1416m2promax/spacegray/mbp16-spacegray-select-202301-670x540.webp",
      name: "Macbook pro",
      title:
        "Apple MacBook Pro 14.2 M2 Pro (10С CPU/16С GPU) 16 ГБ, 512 ГБ Серый космос",
      price: "193 990 сом",
      id: "5",
    },
    {
      img: "https://asiastore.kg/image/cachewebp/catalog/mac/macbookairm2/spacegray/macbook-air-spacegray-gallery1-20220606-670x540.webp",
      name: "Macbook air",
      title:
        "Apple MacBook Air 13.6 Apple M2 (8C CPU/10C GPU), 16 ГБ, 512 ГБ, Cерый Космос",
      price: "159 990 сом",
      id: "6",
    },
  ];
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="apple-mac/" element={<MainLayout />}>
        <Route path="mac" element={<MacLayout mac={mac} />} />
        <Route path="about/:id" element={<Mac mac={mac} />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
