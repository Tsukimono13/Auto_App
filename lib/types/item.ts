type ImgSizeType = {
  small: string;
  big: string;
};

type EngineType = "Бензин" | "Электрический" | "Дизель";
type TransmissionType = "Ручная" | "Автомат";

interface EngineDescription {
  type: EngineType;
  transmission?: TransmissionType;
  power?: string;
}

export interface ProductItem {
  id: string;
  title: string;
  img: ImgSizeType;
  brand: string;
  model: string;
  color: string;
  price: number;
  year: number;
  engine: EngineDescription
}
