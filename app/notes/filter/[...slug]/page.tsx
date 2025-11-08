import { dehydrate, QueryClient, HydrationBoundary } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client"; 
import { Tag } from "@/types/note";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tag = slug[0] ?? "all";
  const title = tag === "all" ? "All Notes" : `Notes tagged ${tag}`;
  const description =
    tag === "all"
      ? "Browse all your notes on NoteHub."
      : `View all notes tagged with '${tag}' on NoteHub.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://notehub.com/notes/${tag}`,
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
          width: 1200,
          height: 630,
          alt: "Notes page image",
        },
      ],
    },
  };
}


export default async function NotesByTagPage({ params }: Props) {
  const { slug } = await params;
  const tag = slug[0] ?? "all";
  const tagFilter = tag === "all" ? null : (tag as Tag);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", 1, "", tagFilter],
    queryFn: () => fetchNotes(1, "", tagFilter),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tagFilter} />
    </HydrationBoundary>
  );
}
