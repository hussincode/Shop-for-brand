export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  alt: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface Stats {
  years: string;
  customers: string;
}
