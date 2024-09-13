import { Suspense } from "react";
import blogSeo from "@/static/Content/BlogGeneral/blogs.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: blogSeo.seo.title,
  description: blogSeo.seo.description,
};

const PageLayout = async (props: any) => {
  return (
    <div>
      <div>
        <Suspense fallback={<div className="flex justify-center items-center">Loading...</div>}>{props.children}</Suspense>
      </div>
    </div>
  );
};

export default PageLayout;
