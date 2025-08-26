import { books } from "../db";

export async function GET() {
    return Response.json(books);
}

export async function POST( req: Request) {
    const book = await req.json();

    const AllBooks = [...books,book]
    return Response.json(AllBooks);
}