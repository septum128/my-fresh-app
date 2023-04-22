import { Head } from "$fresh/src/runtime/head.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { tw } from "twind";
import { Article, findAllArticles } from "../util/db.ts";

// dayjsで相対日付を表示するためにimport
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ja";

dayjs.extend(relativeTime);
dayjs.locale("ja");

export const handler: Handlers<Article[]> = { // ②
  async GET(_, ctx) {
    const articles = await findAllArticles();
    return await ctx.render(articles);
  },
};

export default function Home({ data }: PageProps<Article[]>) { // ③
  return (
    <div class={tw("h-screen bg-gray-200")}>
      <Head>
        <title>Fresh Blog</title>
      </Head>
      <div
        class={tw(
          "max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 pt-12 pb-20 flex flex-col",
        )}
      >
        <h1 class={tw("font-extrablod text-5xl text-gray-800")}>Fresh Blog</h1>
        <section class={tw("mt-8")}>
          <div class={tw("flex justify-between items-center")}>
            <h2 class={tw("text-4xl font-bold text-gray-800 py-4")}>Posts</h2>
            <a
              href="/articles/create"
              class={tw(
                "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md",
              )}
            >
              Create Post
            </a>
          </div>
          <ul>
            {data.map((article) => (
              <li
                class={tw("bg-white p-6 rounded-lg shadow-lg mb-4")}
                key={article.id}
              >
                <a href={`articles/${article.id}`}>
                  <h3
                    class={tw(
                      "text-2xl font-bold mb-2 text-gray-800 hover:text-gray-600 hover:text-underline",
                    )}
                  >
                    {article.title}
                  </h3>
                </a>
                <time
                  class={tw("text-gray-500 text-sm")}
                  dateTime={article.created_at}
                >
                  {dayjs(article.created_at).fromNow}
                </time>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
