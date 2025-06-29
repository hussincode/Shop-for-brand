import { Product, ContactInfo, Stats } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: "Minimalist Jacket",
    description: "Clean lines meet contemporary comfort in this versatile piece.",
    price: 189,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
    alt: "Premium Minimalist Jacket"
  },
  {
    id: 2,
    name: "Elegant Midi Dress",
    description: "Timeless sophistication for every occasion.",
    price: 239,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
    alt: "Elegant Midi Dress"
  },
  {
    id: 3,
    name: "Contemporary Shirt",
    description: "Modern comfort meets classic style.",
    price: 129,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
    alt: "Contemporary Casual Shirt"
  },
  {
    id: 4,
    name: "Tailored Trousers",
    description: "Precision cut for the perfect fit.",
    price: 169,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
    alt: "Tailored Trousers"
  },
  {
    id: 5,
    name: "Luxe Knit Sweater",
    description: "Soft luxury for everyday comfort.",
    price: 199,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
    alt: "Luxe Knit Sweater"
  },
  {
    id: 6,
    name: "Statement Blazer",
    description: "Make an impression with refined style.",
    price: 289,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
    alt: "Statement Blazer"
  }
];

export const contactInfo: ContactInfo = {
  address: "123 Fashion Street, Design District, City 12345",
  phone: "+1 (555) 123-4567",
  email: "hello@luxelocal.com"
};

export const stats: Stats = {
  years: "5+",
  customers: "10K+"
};
