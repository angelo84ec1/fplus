export interface BlogData {
  url: string;
  title: string;
  category: string;
  imageBanner: string;
  seo: SEO;
  body: BodyContent[];
}

interface SEO {
  title: string;
  description: string;
  imageSocial: string;
  linkedin: boolean;
  instagram: boolean;
  facebook: boolean;
}

interface BodyContent {
  type: string;
  content: string | BodyContent;
  color?: string;
  alt?: string
  title?: string
}
