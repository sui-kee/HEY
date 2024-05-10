export type User = {
    _id: {
      $oid: string;
    };
    name: string;
    role: "ADMIN"|"BASIC"|"GUEST";
    email: string;
    password: string;
    image:string;
    id: string;
    __v: {
      $numberInt: string;
    };
  };
  