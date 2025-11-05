import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // Since JWT is stateless, logout can be handled in frontend by removing token
  // Optionally, blacklist tokens in backend if needed

  // For cookie based auth clear cookie like below:
  // const response = NextResponse.json({ message: 'Logged out successfully' });
  // response.cookies.set('token', '', { maxAge: 0, path: '/' });
  // return response;

  return NextResponse.json({ message: 'Logged out successfully' });
}
