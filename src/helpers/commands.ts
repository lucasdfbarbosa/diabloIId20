import { abGen } from "../commands/genab";
import { linha } from "../commands/linha";

export const COMMANDS: { [id: string]: any } = {
  'genab': abGen,
  'linha': linha
}
