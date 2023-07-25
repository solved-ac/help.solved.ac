import { GuideCategory } from "@/types/Guide";

export default {
  title: {
    en: "Guide",
    ko: "가이드",
  },
  key: "",
  guides: [
    {
      title: {
        en: "Getting Started",
        ko: "시작하기",
      },
      key: "getting-started",
      guides: [
        {
          title: {
            en: "Create an account",
            ko: "계정 만들기",
          },
          key: "link-account",
          type: "guide",
        },
      ],
      type: "category",
    },
  ],
  type: "category",
} satisfies GuideCategory;
