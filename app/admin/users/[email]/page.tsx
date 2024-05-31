import { UserDetail } from "@/components/v0components/user-detail";

const getUser = async (email: string) => {
  const response = await fetch(`http://54.167.15.95:3001/users/email/${email}`);

  if (response.ok) {
    //console.log("log from response: ", await response.json());
    return await response.json();
  } else {
    return console.log("error in userdetail  :", await response.json());
  }
};

export default async function Page({ params }: { params: { email: string } }) {
  const email = params.email;
  const user = await getUser(email);
  console.log("user from user detail:", user);

  return <UserDetail user={user} />;
}
