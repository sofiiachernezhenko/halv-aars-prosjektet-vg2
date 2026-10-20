import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionary";
import { Dashboard } from "@/components/dashboard";

export default async function HomePage(props: PageProps<"/[lang]">) {
  const { lang } = await props.params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return <Dashboard dict={dict} />;
}
