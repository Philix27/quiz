import { useRouter } from "next/router";
import React from "react";

import { AppLinks } from "app_url";

export default function AuthWrapper(props: any) {
  // const router = useRouter();
  // if (address) {
  //   return <>{props.children}</>;
  // } else {
  //   router.push(AppLinks.landing);
  // }
  return <>{props.children}</>;
}
