import { NextRequest, NextResponse } from 'next/server';

const getUser = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3001/users/getUserById?id=`+id);

    if (!response.ok) {
      throw new Error('Error fetching user');
    }
    const data = await response.json();
    // console.log("get user from middleware getuser data: ",data);
    
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
};

export default async function middleware(req: NextRequest) {
  console.log("user id from cookie: ",req.cookies.get("userToken"));
  
  const user = await getUser(req.cookies.get("userToken")?.value as any)
  // console.log("user from middleware:",user);
  
    if (!req.cookies.get("firebase-auth")) {
        // console.log("log for firebase: ",!req.cookies.get("firebase-auth"));
        
        return NextResponse.rewrite(new URL('/authentication', req.url))
      }
    if (req.nextUrl.pathname.startsWith("/admin") && user[0].role !== "ADMIN"){
        return NextResponse.rewrite(new URL("/denied",req.url))
    }
  //   if (req.nextUrl.pathname.startsWith("/home") && user[0].role === "ADMIN"){
  //     return NextResponse.rewrite(new URL("/denied",req.url))
  // }
    

    return NextResponse.next()
  }

  export const config = {
    matcher: ['/home/:path*','/admin'],
  }