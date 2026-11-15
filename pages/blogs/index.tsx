import { InferGetStaticPropsType } from "next";
import BlogPostList from "../../components/BlogPostList";
import { data } from "../../repository/DataRepository";
import { getPosts } from "../../utils/Blog";
import { getSiteUrl } from "../../utils/SiteUrl";

export function getStaticProps() {
  return { props: { posts: getPosts(), url: `${getSiteUrl({})}/blogs` } };
}

export default function Blog({
  posts,
  url,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <BlogPostList
      title={`${data.intro.split(" ")[0]}'s Blogs`}
      heading="My Blogs"
      description={`Blog posts by ${data.intro}: ${posts
        .map(({ title }) => title)
        .join(", ")}`}
      url={url}
      posts={posts}
    />
  );
}
