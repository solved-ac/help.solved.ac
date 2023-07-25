import { GuideCategory } from "@/types/Guide";

export default {
  key: "",
  title: {
    en: "Guide",
    ko: "가이드",
  },
  guides: [
    {
      key: "getting-started",
      title: {
        en: "Getting Started",
        ko: "시작하기",
      },
      guides: [
        {
          key: "link-account",
          title: {
            en: "Create an account",
            ko: "계정 만들기",
          },
          type: "guide",
        },
        {
          key: "profile",
          title: {
            en: "Profile",
            ko: "프로필",
          },
          type: "guide",
        },
      ],
      type: "category",
    },
  ],
  type: "category",
} satisfies GuideCategory;
