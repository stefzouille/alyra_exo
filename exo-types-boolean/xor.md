Opération logique représentée dans la table suivantes:

**Table de vérité xor **:
| a | b | a + b |
|---|---|-------|
| 0 | 0 |   0 |
| 0 | 1 |   1 |
| 1 | 0 |   1 |
| 1 | 1 |   0 |

**Table de vérité `&&` JS**:
|   a|  |   b     | a + a  |
|---|---|---------|--------|
| `false`| `false`| `false`|
| `false`| `true` | `true` |
| `true` | `false`| `true` |
| `true` | `true` | `false`|




pour le && (et/and)  le false l’emporte tj sauf si true && true ——

pour le || (ou/or) le true l’emporte toujours sauf si false || false --

Et priorité de calcul au && --

xor comme pour le ou/or || mais true + true = false --

