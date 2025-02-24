export interface ApiSection {
  directives: ApiDirectiveSection[];
}

export interface ApiDirectiveSection {
  name: string;
  selector: string;
  descritpion: string;
  inputs?: ApiInput[];
  outputs?: ApiOutput[];
  methods?: ApiMethod[];
}

export interface ApiInput {
  name: string;
  type: string;
  description: string;
  default: unknown;
  required?: boolean;
}

export interface ApiOutput {
  name: string;
  type: string;
  description: string;
}

export interface ApiMethod {
  name: string;
  description: string;
  returnType: string;
}
