
import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
    
    if (!req.cookies.get("firebase-auth")) {
        console.log("log for firebase: ",!req.cookies.get("firebase-auth"));
        
        return NextResponse.rewrite(new URL('/authentication', req.url))
      }
      console.log("log for firebase: ",!req.cookies.get("firebase-auth"));
    return NextResponse.next()
  }

  export const config = {
    matcher: '/home/:path*',
  }