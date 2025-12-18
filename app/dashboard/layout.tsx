// export default function PostCard() {
//   return (
//     <div className="post-card">
//         <h2 className="post-title">Post Title: Title</h2>
//         <p className="post-excerpt"></p>
//           This is a brief excerpt of the post body: Body
//         </p>
//         <a href="#" className="read-more">
//           Read More
//         </a>
export default function Layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
