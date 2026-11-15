import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import BlogPostList from "../../../components/BlogPostList";
import { data } from "../../../repository/DataRepository";
import { getPosts } from "../../../utils/Blog";
import { getSiteUrl } from "../../../utils/SiteUrl";

export function getStaticPaths() {
  const tags = new Set(getPosts().flatMap(({ tags }) => tags));
  return {
    paths: [...tags].map((tag) => ({ params: { tag } })),
    fallback: false,
  };
}

export function getStaticProps({
  params,
}: GetStaticPropsContext<{ tag: string }>) {
  const tag = params!.tag;
  return {
    props: {
      tag,
      posts: getPosts().filter(({ tags }) => tags.includes(tag)),
      url: `${getSiteUrl({})}/blogs/tags/${tag}`,
    },
  };
}

export default function BlogTag({
  tag,
  posts,
  url,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <BlogPostList
      title={`#${tag} posts | ${data.intro.split(" ")[0]}'s Blogs`}
      heading={`Posts tagged #${tag}`}
      description={`Posts tagged #${tag} by ${data.intro}: ${posts
        .map(({ title }) => title)
        .join(", ")}`}
      url={url}
      posts={posts}
    />
  );
}
