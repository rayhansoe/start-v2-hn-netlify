import { RouteDefinition, cache, createAsync } from "@solidjs/router";
import { FetchEvent } from "@solidjs/start/server/types";
import { getRequestEvent } from "solid-js/web";
import { setHeader, setResponseHeader, setResponseStatus } from "vinxi/server";

const getData = cache((): Promise<number> => {
	"use server";

  const event = getRequestEvent()! as FetchEvent
  setHeader(event, "Cache-Control", "max-age=15, stale-while-revalidate")
  setHeader(event, "Vercel-CDN-Cache-Control", "max-age=15, stale-while-revalidate")
  setHeader(event, "CDN-Cache-Control", "max-age=15, stale-while-revalidate")
  setHeader(event, 'Content-Location', 'https://start-v2-hn-netlify.vercel.app/_server')
  setHeader(event, 'Location', 'https://start-v2-hn-netlify.vercel.app/_server')
  setHeader(event, 'Location', 'https://start-v2-hn-netlify.vercel.app/_server')
  setResponseStatus(event, 201)
	return new Promise((resolve) => setTimeout(() => resolve(Date.now()), 100));
}, "");
export const route = {
	load({ location, params }) {
		void getData();
	},
} satisfies RouteDefinition;

export default function Page() {
	const timestamp = createAsync(getData);
	// const t = Date.now();
	const d = new Date(timestamp());
	return (
		<div>
			<h1>About</h1>
			<p>Hello World</p>
			<h2>
				<strong>Build at </strong>
				{d.toUTCString()}
			</h2>
			<h2>
				<strong>Build at </strong>
				{Date.now() - timestamp()}s ago
			</h2>
		</div>
	);
}
