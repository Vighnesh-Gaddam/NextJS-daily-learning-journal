type SongPageProps = { params: Promise<{ id: string }> };

export default async function Song({ params }: SongPageProps) {
  const { id } = await params;

  return (
    <div className="text-white text-2xl">
      Song {id}
    </div>
  );
}
