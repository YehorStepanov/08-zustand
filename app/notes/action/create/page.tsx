import type { Metadata } from "next";
import css from "./page.module.css";
import NoteForm from "@/components/NoteForm/NoteForm";

export const metadata: Metadata = {
  title: "Create new note | NoteHub",
  description: "Create a new note easily with NoteHub.",
  openGraph: {
    title: "Create new note | NoteHub",
    description: "Create a new note easily with NoteHub.",
    url: "https://notehub.example.com/notes/action/create",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Note create page image",
      },
    ],
  },
};

export default function CreateNotePage() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm/>
      </div>
    </main>
  );
}
