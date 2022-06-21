interface Pokemon {
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
