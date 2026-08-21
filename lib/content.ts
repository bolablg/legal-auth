export type LegalBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "heading"; text: string }
  | { kind: "list"; items: string[] };

export type LegalSection = {
  id: string;
  title: string;
  blocks: LegalBlock[];
};

export type DocumentConfig = {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
};

export type AuthHelpConfig = {
  title: string;
  intro: string;
  steps: Array<{ title: string; body: string }>;
};
