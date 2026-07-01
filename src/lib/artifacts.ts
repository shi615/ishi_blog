export type ArtifactMeta = {
  title: string;
  link: string;
  description: string;
};

export type Artifact = ArtifactMeta & {
  content: string;
};
