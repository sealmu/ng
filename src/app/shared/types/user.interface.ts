export interface UserInterface {
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  bio: string | null; // bio? : string
  image: string | null;
  token: string;
}
