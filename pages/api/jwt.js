import {NextResponse} from "next/server";
import { verify, decode } from 'jsonwebtoken';

export async function middleware(req) {
  const cookie = request.cookies.get('user')
  console.log(cookie)

  // let token = await cookies.jwt
  
  // let url = req.url;
}
  
  // // if(url.includes('/user/dashboard')){
  //     if(token === undefined) return NextResponse.redirect('/');
  //     try {
  //         verify(token,process.env.ACCESS_TOKEN_SECRET);
  //         return NextResponse.next();
  //     } catch (err) {
  //         return NextResponse.redirect('/');
  //     }
  // }
  // return NextResponse.next();
// }