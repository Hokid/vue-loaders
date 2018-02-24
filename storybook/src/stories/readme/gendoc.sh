#!/usr/bin/env bash

names=(
  ball-beat
  ball-beat
  ball-grid-beat
  ball-pulse
  ball-scale-ripple
  ball-zig-zag-deflect
  line-scale-pulse-out-rapid
  pacman
  ball-clip-rotate-multiple
  ball-grid-pulse
  ball-rotate
  ball-scale
  ball-zig-zag
  line-scale-pulse-out
  semi-circle-spin
  ball-clip-rotate-pulse
  ball-pulse-rise
  ball-scale-multiple
  ball-spin-fade
  cube-transition
  line-scale
  square-spin
  ball-clip-rotate
  ball-pulse-sync
  ball-scale-ripple-multiple
  ball-triangle-path
  line-scale-party
  line-spin-fade
  triangle-skew-spin
)

for item in ${names[*]}
do
    echo "
Optional attributes:
* **size** - size in css valid units
* **color** - css valid color

Usage

\`\`\`HTML
<$item-loader></$item-loader>
\`\`\`
" > $item.md
done



