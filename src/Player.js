import { t, makeSprite } from "@replay/core";

export const Player = makeSprite({
  render({ props }) {
    return [
      t.circle({
        radius: 10,
        color: props.color,
      }),
    ];
  },
});