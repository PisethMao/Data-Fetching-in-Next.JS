import { PostResponse } from "@/lib/types/posts";
import styles from "./PostCard.module.css";

export default function PostCard({
  userId = 0,
  id = 0,
  title = "Title",
  body = "Body",
}: PostResponse) {
  return (
    <div className={styles.postCard}>
      <h2 className={styles.postTitle}>Post Title: {title}</h2>
      <p className={styles.postExcerpt}>
        This is a brief excerpt of the post body: {body}
      </p>
      <p>
        {userId} | {id}
      </p>
    </div>
  );
}
