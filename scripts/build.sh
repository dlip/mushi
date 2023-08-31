#!/usr/bin/env bash
set -euo pipefail

npm exec ergogen -- .
cp output/pcbs/mushi.kicad_pcb kicad/
# for i in output/cases/*.jscad; do npm exec openjscad -- "$i" -of stla; done
npm exec openjscad -- output/cases/caseLeft.jscad -of stla -o case/caseLeft.stl
npm exec openjscad -- output/cases/caseRight.jscad -of stla -o case/caseRight.stl
