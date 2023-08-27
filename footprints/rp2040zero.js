module.exports = {
  params: {
    designator: "RP2040Zero",
    side: "F",
    reverse: false,
    P5V: { type: "net", value: "P5V" },
    GND: { type: "net", value: "GND" },
    P3V3: { type: "net", value: "P3V3" },
    GP29: { type: "net", value: "GP29" },
    GP28: { type: "net", value: "GP28" },
    GP27: { type: "net", value: "GP27" },
    GP26: { type: "net", value: "GP26" },
    GP15: { type: "net", value: "GP15" },
    GP14: { type: "net", value: "GP14" },
    GP13: { type: "net", value: "GP13" },
    GP12: { type: "net", value: "GP12" },
    GP11: { type: "net", value: "GP11" },
    GP10: { type: "net", value: "GP10" },
    GP9: { type: "net", value: "GP9" },
    GP8: { type: "net", value: "GP8" },
    GP7: { type: "net", value: "GP7" },
    GP6: { type: "net", value: "GP6" },
    GP5: { type: "net", value: "GP5" },
    GP4: { type: "net", value: "GP4" },
    GP3: { type: "net", value: "GP3" },
    GP2: { type: "net", value: "GP2" },
    GP1: { type: "net", value: "GP1" },
    GP0: { type: "net", value: "GP0" },
  },
  body: (p) => {
    const standard = `
    (module RP2040-Zero (layer F.Cu)(tedit 61F3691B)
      ${p.at /* parametric position */}
      ${"" /* footprint reference */}
      (fp_text reference "${p.ref}" (at 10.16 -15.45 ${p.rot}) (layer F.Fab)
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (fp_line (start 19.16 -24.45) (end 1.16 -24.45) (layer F.SilkS) (width 0.12))  
      (fp_line (start 1.16 -24.45) (end 1.16 -0.95) (layer F.SilkS) (width 0.12))
      (fp_line (start 1.16 -0.95) (end 19.16 -0.95) (layer F.SilkS) (width 0.12))
      (fp_line (start 19.16 -0.95) (end 19.16 -24.45) (layer F.SilkS) (width 0.12))
      (fp_line (start 1.16 -24.45) (end 19.16 -24.45) (layer F.CrtYd) (width 0.05))
      (fp_line (start 19.16 -24.45) (end 19.16 -0.95) (layer F.CrtYd) (width 0.05))
      (fp_line (start 19.16 -0.95) (end 1.16 -0.95) (layer F.CrtYd) (width 0.05))
      (fp_line (start 1.16 -0.95) (end 1.16 -24.45) (layer F.CrtYd) (width 0.05))
      (fp_line (start 5.83 -25.45) (end 5.83 -24.45) (layer F.Fab) (width 0.1))
      (fp_line (start 14.46 -25.45) (end 14.46 -24.45) (layer F.Fab) (width 0.1))
      (fp_line (start 5.83 -25.45) (end 14.46 -25.45) (layer F.Fab) (width 0.1))
    `;

    const hole_for_buttons = `
      ${
        "" /* holes so that we can access reset and boot button on upside down mcu */
      }
      (fp_line (start 5 -5.13) (end 15.5 -5.13) (layer Edge.Cuts) (width 0.12))
      (fp_line (start 5 -5.13) (end 5 -10.5) (layer Edge.Cuts) (width 0.12))
      (fp_line (start 15.5 -10.5) (end 15.5 -5.13) (layer Edge.Cuts) (width 0.12))
      (fp_line (start 15.5 -10.5) (end 5 -10.5) (layer Edge.Cuts) (width 0.12))
      
    `;
    function pins(def_neg, def_pos) {
      return `
        ${"" /* actual pins */}
        (pad 1 thru_hole roundrect (at 17.78 -22.86 ${
          p.rot
        }) (size 2.6 1.6) (drill 1.0922 (offset 0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${
        p.GP0.str
      })
        (pad 2 thru_hole roundrect (at 17.78 -20.32 ${
          p.rot
        }) (size 2.6 1.6) (drill 1.0922 (offset 0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${
        p.GP1.str
      })
        (pad 3 thru_hole roundrect (at 17.78 -17.78 ${
          p.rot
        }) (size 2.6 1.6) (drill 1.0922 (offset 0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${
        p.GP2.str
      })
        (pad 4 thru_hole roundrect (at 17.78 -15.24 ${
          p.rot
        }) (size 2.6 1.6) (drill 1.0922 (offset 0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${
        p.GP3.str
      })
        (pad 5 thru_hole roundrect (at 17.78 -12.7 ${
          p.rot
        }) (size 2.6 1.6) (drill 1.0922 (offset 0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${
        p.GP4.str
      })
        (pad 6 thru_hole roundrect (at 17.78 -10.16 ${
          p.rot
        }) (size 2.6 1.6002) (drill 1.0922 (offset 0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${
        p.GP5.str
      })
        (pad 7 thru_hole roundrect (at 17.78 -7.62 ${
          p.rot
        }) (size 2.6 1.6002) (drill 1.0922 (offset 0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${
        p.GP6.str
      })
        (pad 8 thru_hole roundrect (at 17.78 -5.08 ${
          p.rot
        }) (size 2.6 1.6002) (drill 1.0922 (offset 0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${
        p.GP7.str
      })
        (pad 9 thru_hole roundrect (at 17.78 -2.54 ${
          p.rot
        }) (size 2.6 1.6002) (drill 1.0922 (offset 0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${
        p.GP8.str
      })
        
        (pad 10 thru_hole roundrect (at 15.24 -2.33 ${
          p.rot
        }) (size 1.6 2.6) (drill 1.0922 (offset 0 0.6)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${
        p.GP9.str
      })
        (pad 11 thru_hole roundrect (at 12.7 -2.33 ${
          p.rot
        }) (size 1.5748 2.6) (drill 1.0922 (offset 0 0.6)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${
        p.GP10.str
      })
        (pad 12 thru_hole roundrect (at 10.16 -2.33 ${
          p.rot
        }) (size 1.5748 2.6) (drill 1.0922 (offset 0 0.6)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${
        p.GP11.str
      })
        (pad 13 thru_hole roundrect (at 7.62 -2.33 ${
          p.rot
        }) (size 1.5748 2.6) (drill 1.0922 (offset 0 0.6)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${
        p.GP12.str
      })
        (pad 14 thru_hole roundrect (at 5.08 -2.33 ${
          p.rot
        }) (size 1.5748 2.6) (drill 1.0922 (offset 0 0.6)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${
        p.GP13.str
      })

        (pad 15 thru_hole roundrect (at 2.54 -2.54 ${
          p.rot
        }) (size 2.6 1.6002) (drill 1.0922 (offset -0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${
        p.GP14.str
      })
        (pad 16 thru_hole roundrect (at 2.54 -5.08 ${
          p.rot
        }) (size 2.6 1.6002) (drill 1.0922 (offset -0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${
        p.GP15.str
      })
        (pad 17 thru_hole roundrect (at 2.54 -7.62 ${
          p.rot
        }) (size 2.6 1.6002) (drill 1.0922 (offset -0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${
        p.GP26.str
      })
        (pad 18 thru_hole roundrect (at 2.54 -10.16 ${
          p.rot
        }) (size 2.6 1.6002) (drill 1.0922 (offset -0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${
        p.GP27.str
      })
        (pad 19 thru_hole roundrect (at 2.54 -22.86 ${
          p.rot
        }) (size 2.6 1.6002) (drill 1.0922 (offset -0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${
        p.P5V.str
      })
        (pad 20 thru_hole roundrect (at 2.54 -20.32 ${
          p.rot
        }) (size 2.6 1.6002) (drill 1.0922 (offset -0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${
        p.GND.str
      })
        (pad 21 thru_hole roundrect (at 2.54 -17.78 ${
          p.rot
        }) (size 2.6 1.6002) (drill 1.0922 (offset -0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${
        p.P3V3.str
      })
        (pad 22 thru_hole roundrect (at 2.54 -12.7 ${
          p.rot
        }) (size 2.6 1.6002) (drill 1.0922 (offset -0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${
        p.GP28.str
      })
        (pad 23 thru_hole roundrect (at 2.54 -15.24 ${
          p.rot
        }) (size 2.6 1.6002) (drill 1.0922 (offset -0.6 0)) (layers *.Cu *.Mask) (roundrect_rratio 0.25) ${
        p.GP29.str
      })
      `;
    }
    if (p.reverse) {
      return `
        ${standard}
        ${hole_for_buttons}
        ${pins("-", "")}
        ${pins("", "-")}
        )
        `;
    } else {
      return `
        ${standard}
        ${hole_for_buttons}
        ${pins("-", "")}
        )
        `;
    }
  },
};
