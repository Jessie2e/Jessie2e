# 2e Studio Brand System

## Core logo
- Primary mark: `/public/2elogo.svg`
- Favicon: `/public/favicon.svg`
- The SVG is the master web logo. It is transparent and has been stripped of export metadata for a much smaller file size.

## Core palette
| Token | Hex | Primary use |
|---|---|---|
| Plum | `#602B47` | Headlines, nav, deep brand surfaces |
| Charcoal | `#1B1B1B` | Neutral dark / logo |
| Mustard | `#D7A72C` | Small highlights and vintage accents |
| Sage | `#788D72` | Primary buttons, labels, cursor family |
| Moss | `#526A54` | Deeper green accent |
| Coral | `#D86656` | Small energetic accents and numbering |
| Blush | `#C98C80` | Optional soft pink accent |
| Cream | `#F2D8B3` | Warm supporting surface |
| Paper | `#FBF8F1` | Main site background |
| Soft Sage | `#EEF1E8` | Quiet section/card background |

## Usage rule
The 2e Studio shell uses this palette. Client case studies keep their own visual identities so the portfolio continues to show range.

## CSS organization
- `index.css` contains the existing layout and the three client case-study systems.
- `brand.css` is the new final 2e identity layer and loads after `index.css`.
- New brand changes should go in `brand.css` until the planned consolidation pass, rather than adding more overrides to the bottom of `index.css`.

## Next cleanup pass
1. Consolidate duplicate historical homepage rules in `index.css`.
2. Test navbar and hero at mobile/tablet breakpoints.
3. Replace the old Jessie illustration later with the new vintage-modern art direction.
4. Create a dedicated social-share image using the new brand system.
5. Connect the contact form to real delivery before launch.
