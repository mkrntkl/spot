import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { useChangeLanguage } from "remix-i18next";
import { useTranslation } from "react-i18next";

import i18next from "./i18next.server";
import { getUser } from "./session.server";
import tailwindStylesheetUrl from "./styles/tailwind.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const meta: MetaFunction = ({ data }) => ({
  charset: "utf-8",
  title: data.title,
  viewport: "width=device-width,initial-scale=1",
});

export async function loader({ request }: LoaderArgs) {
  const t = await i18next.getFixedT(request, "common");
  const title = t("headTitle");

  return json({
    user: await getUser(request),
    locale: await i18next.getLocale(request),
    title,
  });
}

export default function App() {
  // Get the locale from the loader
  let { locale } = useLoaderData();
  let { i18n } = useTranslation();

  useChangeLanguage(locale);

  return (
    <html lang={locale} dir={i18n.dir()} className="h-full">
      <head>
        <Meta />
        <Links />
        <link
          rel="preload"
          as="fetch"
          href={`/locales/${locale}/common.json`}
        />
      </head>
      <body className="h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
