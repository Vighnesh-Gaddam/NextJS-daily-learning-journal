import { books } from "../../db";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  console.log("id", id);
  const book = books.find((b) => b.id === +id);

  if (book) {
    console.log("book", book);
    return Response.json(book);
  } else {
    return new Response(JSON.stringify({ error: "Book not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
}