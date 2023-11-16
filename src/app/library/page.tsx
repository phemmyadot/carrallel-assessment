// import useSWR from "swr";

// import ArticleList from "../../components/article-list";

// export async function getStaticProps() {
//   // Fetch list of articles
//   const response = await fetch(`${process.env.API_URL}/articles`);
//   const articles = await response.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// }
// export default function Library({ articles }) {
//   const { data } = useSWR("/api/articles", fetch);

//   return (
//     <div>
//       <h1>Article Library</h1>

//       {data ? (
//         <ArticleList articles={data} />
//       ) : (
//         <ArticleList articles={articles} />
//       )}
//     </div>
//   );
// }
