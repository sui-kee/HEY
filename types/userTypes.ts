export type User = {
    _id: {
      $oid: string;
    };
    name: string;
    role: string;
    email: string;
    password: string;
    image:string;
    id: string;
    __v: {
      $numberInt: string;
    };
  };
  