export type BlogsGeneral = {
  seo: {
    title: string;
    description: string;
  };
  blogs: {
    id: number;
    fecha: string;
    fechaOrdenada: string;
    nombre: string;
    imagen: string;
    url: string;
    valueCategoria: string;
  }[];
};
