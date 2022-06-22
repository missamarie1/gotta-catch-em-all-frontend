export interface Pokemon {
  id: number;
  name: string;
  image: string;
}

export interface Account {
  _id?: string;
  uid: string;
  userName: string;
  avatar?: string;
  caught: Pokemon[];
}
