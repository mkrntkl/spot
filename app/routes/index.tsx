import { useTranslation } from "react-i18next";
import NavBar from "~/components/navBar";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const { t } = useTranslation();
  const user = useOptionalUser();

  return (
    <main className="">
      <NavBar />
    </main>
  );
}
