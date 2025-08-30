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

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const bookId = +id;

    // Find existing book
    const book = books.find((b) => b.id === bookId);
    if (!book) {
      return new Response(JSON.stringify({ error: "Book not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Parse body
    const body = await request.json();

    // Update only provided fields
    const updatedBook = {
      ...book,
      title: body.title ?? book.title,
      author: body.author ?? book.author,
    };

    // Replace in DB
    const index = books.findIndex((b) => b.id === bookId);
    books[index] = updatedBook;

    return new Response(JSON.stringify(updatedBook), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to parse JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
