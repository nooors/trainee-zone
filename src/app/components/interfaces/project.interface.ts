export interface Project {
  url: string;
  code: {
    frontend?: string | undefined;
    backend?: string | undefined;
  };
  tech: string[];
  thumbnail: string;
}
