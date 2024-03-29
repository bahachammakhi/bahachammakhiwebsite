import React from "react";
import Tag from "./Tag";
import { navigate } from "gatsby";
export default function BlogCard({
  thumbnail,
  tag,
  title,
  description,
  author,
  slug,
  date,
}) {
  return (
    <div
      // onClick={() => window.open(`https://blog.bahachammakhi.tn/${slug}`)}
      class="  md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
    >
      <img class="object-cover w-full h-64" src={thumbnail} alt="Article" />

      <div class="p-6">
        <div>
          <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
            {tag}
          </span>
          <a
            href={`http://blog.bahachammakhi.tn/${slug}`}
            target="_blank"
            class="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline"
          >
             {title}
          </a>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>

        <div class="mt-4">
          <div class="flex items-center">
            {/* <div class="flex items-center">
              <img
                class="object-cover h-10 rounded-full"
                src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                alt="Avatar"
              />
              <a
                href="#"
                class="mx-2 font-semibold text-gray-700 dark:text-gray-200"
              >
                {author}
              </a>
            </div> */}
            <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">
              {date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
