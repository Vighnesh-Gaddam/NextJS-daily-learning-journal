export default function UserProfile({ params }: { params: { user: string } }) {
    console.log(params);
  return (
    <main>
      <h1>User Profile: {params.user}</h1>
    </main>
  );
}