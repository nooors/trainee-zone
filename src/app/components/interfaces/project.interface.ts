export interface Project {
  title: string;
  subtitle: string;
  url: string;
  code: {
    frontend?: string | undefined;
    backend?: string | undefined;
  };
  description: string;
  tech: string[];
  thumbnail: string;
}
