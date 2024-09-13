const PageLayout = async (props: any) => {
  const blogUrl = props.params["_slug"];

  try {
    const article = require(`@/static/Content/BlogPost/${blogUrl}.json`);
    const title = article.seo.title;
    const description = article.seo.description;

    return (
      <div>
        <head>
          <title>{title}</title>
          <meta name="description" content={description} />
        </head>
        <body>{props.children}</body>
      </div>
    );
  } catch {
    // Handle the error, perhaps by displaying an error message to the user
    return (
      <div>
        <body>{props.children}</body>
      </div>
    );
  }
};

export default PageLayout;
