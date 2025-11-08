import { tags } from '@/types/note';
import css from './SidebarNotes.module.css';
import Link from 'next/link';

export default function SidebarNotes() {
  return (
    <ul className={css.menuList}>
      {tags.map(tag => (
        <li key={tag} className={css.menuItem}>
          <Link
            href={`/notes/filter/${tag === 'All' ? 'all' : tag}`}
            className={css.menuLink}
          >
            {tag === 'All' ? 'All notes' : tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}
