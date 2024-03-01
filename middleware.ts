import { NextResponse } from 'next/server';

export function middleware() {
    // Placeholder: If you don't need middleware logic, you can remove this file entirely
    return NextResponse.next(); 
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"], 
};
