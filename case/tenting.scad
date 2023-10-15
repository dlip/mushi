$fn = 40;
tent = 12;

intersection() {
	linear_extrude(100) rotate([0, -tent, 0]) translate([-14,0,0])  import("../output/outlines/xlBoardLeft.dxf", convexity=10);
	translate([0,0,0]) rotate([0, -tent, 0])	translate([-14,0,-100]) linear_extrude(100) import("../output/outlines/xlBoardLeft.dxf", convexity=10);
}
rotate([0, -tent, 0])	translate([-14,0,0]) import("caseLeft.stl", convexity=10);
