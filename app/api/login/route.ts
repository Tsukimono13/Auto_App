import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const users = [
  {
    id: 1,
    username: "user",
    password: "pass",
  },
];

export async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { username, password } = req.body;

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

  return NextResponse.json({user})
}
