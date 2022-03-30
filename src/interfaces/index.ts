export interface User {
  email: string;
  password: string;
}

export interface MenuOption {
  name: string;
  route: string;
  auth: boolean;
}

export interface Cake {
  cakeDescription: string;
  cakeName: string;
  cakePhoto: string;
  cover: string;
  customMessage: string;
  freeLactose: boolean;
  messageColor: string;
  price: number;
}
