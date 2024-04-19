type ImgSizeType = {
  small: string;
  big: string;
};

export type EngineType = "Бензин" | "Электрический" | "Дизель";
export type TransmissionType = "Ручная" | "Автомат";

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
