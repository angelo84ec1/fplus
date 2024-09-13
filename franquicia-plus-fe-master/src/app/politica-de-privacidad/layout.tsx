import { Metadata } from "next";

const PageLayout = async (props: any) => {
  return (
    <div>
      <div>{props.children}</div>
    </div>
  );
};

export default PageLayout;
