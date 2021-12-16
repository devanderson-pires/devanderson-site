export type Projetos = {
  id: number;
  img_path: string | null;
  title: string;
  description: string;
  repo: string;
  demo: string | null;
  languages: Array<string>;
}
