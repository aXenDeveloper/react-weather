import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("core");

  return <h1>{t("test")}</h1>;
}
