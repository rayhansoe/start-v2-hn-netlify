import { cache } from "@solidjs/router";
import { getFetchEvent } from "@solidjs/start/server/middleware";
import { FetchEvent } from "@solidjs/start/server/types";
import { getRequestEvent } from "solid-js/web";
import { setHeader, setResponseStatus } from "vinxi/server";
import { StoryDefinition, StoryTypes, UserDefinition } from "~/types";

const story = (path: string) => `https://node-hnapi.herokuapp.com/${path}`;
const user = (path: string) =>
  `https://hacker-news.firebaseio.com/v0/${path}.json`;

export async function fetchAPI(path: string) {
  const url = path.startsWith("user") ? user(path) : story(path);
  const headers: Record<string, string> = { "User-Agent": "chrome" };

  try {
    let response = await fetch(url, { headers });
    let text = await response.text();
    try {
      if (text === null) {
        return { error: "Not found" };
      }
      return JSON.parse(text);
    } catch (e) {
      console.error(`Received from API: ${text}`);
      console.error(e);
      return { error: e };
    }
  } catch (error) {
    return { error };
  }
}

export const mapStories = {
  top: "news",
  new: "newest",
  show: "show",
  ask: "ask",
  job: "jobs",
} as const;

export const getStories = cache(
  async (type: StoryTypes, page: number): Promise<StoryDefinition[]> => {
    "use server";

    const event = getRequestEvent()! as FetchEvent
    setHeader(event, "Cache-Control", "max-age=15, stale-while-revalidate")
    setHeader(event, "Vercel-CDN-Cache-Control", "max-age=15, stale-while-revalidate")
    setHeader(event, "CDN-Cache-Control", "max-age=15, stale-while-revalidate")

    return fetchAPI(`${mapStories[type]}?page=${page}`);
  },
  "stories"
);

export const getStory = cache(async (id: string): Promise<StoryDefinition> => {
  "use server";

  const event = getRequestEvent()! as FetchEvent
  setHeader(event, "Cache-Control", "max-age=15, stale-while-revalidate")
  setHeader(event, "Vercel-CDN-Cache-Control", "max-age=15, stale-while-revalidate")
  setHeader(event, "CDN-Cache-Control", "max-age=15, stale-while-revalidate")
  setHeader(event, 'Content-Location', 'https://start-v2-hn-netlify.vercel.app/_server')
  setHeader(event, 'Location', 'https://start-v2-hn-netlify.vercel.app/_server')
  setHeader(event, 'Location', 'https://start-v2-hn-netlify.vercel.app/_server')
  setResponseStatus(event, 201)

  return fetchAPI(`item/${id}`);
}, "story");

export const getUser = cache(async (id: string): Promise<UserDefinition> => {
  "use server";

  const event = getRequestEvent()! as FetchEvent
  setHeader(event, "Cache-Control", "max-age=15, stale-while-revalidate")
  setHeader(event, "Vercel-CDN-Cache-Control", "max-age=15, stale-while-revalidate")
  setHeader(event, "CDN-Cache-Control", "max-age=15, stale-while-revalidate")

  return fetchAPI(`user/${id}`);
}, "user");
