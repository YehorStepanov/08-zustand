'use client';

import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import Modal from "@/components/Modal/Modal";
import { useParams, useRouter } from "next/navigation";
import NotePreview from "@/components/NotePreview/NotePreview";


type Props = object;

export default function NotePreviewClient({}: Props) {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const { data: note, isLoading, error } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  const handleClose = () => router.back(); 

  if (isLoading)
    return <Modal onClose={handleClose}>Loading...</Modal>;

  if (error || !note)
    return <Modal onClose={handleClose}>Error loading note.</Modal>;

  return (
    <Modal onClose={handleClose}>
      <NotePreview note={note} />
    </Modal>
  );
}
