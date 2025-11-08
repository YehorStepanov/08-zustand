'use client';

import { useRouter } from "next/navigation";
import css from "./NotePreview.module.css";

interface NotePreviewProps {
  note: {
    title: string;
    content: string;
    tag: string;
    createdAt: string;
    updatedAt?: string;
  };
}

export default function NotePreview({ note }: NotePreviewProps) {
  const router = useRouter();

  const formattedDate = note.updatedAt
    ? `Updated at: ${new Date(note.updatedAt).toLocaleString()}`
    : `Created at: ${new Date(note.createdAt).toLocaleString()}`;

  return (
    <div className={css.container}>
      

      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
          <span className={css.tag}>{note.tag}</span>
        </div>

        <div className={css.content}>{note.content}</div>
        <p className={css.date}>{formattedDate}</p>
        <button
        className={css.backBtn}
        onClick={() => router.back()}
      >
        ← Back
      </button>
      </div>
    </div>
  );
}
