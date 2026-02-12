import { DiceSet } from "../types/DiceSet";
import * as galaxyPreviews from "../previews/galaxy";
import * as gemstonePreviews from "../previews/gemstone";

export const diceSets: DiceSet[] = [
  {
    id: "galaxy",
    name: "Galaxy",
    dice: [
      { type: "D4", preview: galaxyPreviews.d4 },
      { type: "D10", preview: galaxyPreviews.d10 },
    ],
  },
  {
    id: "gemstone",
    name: "Gemstone",
    dice: [
      { type: "D4", preview: gemstonePreviews.d4 },
      { type: "D10", preview: gemstonePreviews.d10 },
    ],
  },
];