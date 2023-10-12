tent = 12;
/*
*offset(2) import("../output/outlines/xlBoardLeft.dxf", convexity=10);
difference() {
	linear_extrude(70) translate([-12,60,0]) offset(2.2) import("../output/outlines/xlBoardLeft.dxf", convexity=10);
	translate([0,-75, 5]) rotate([0, -tent, 0]) cube([200,150,100]);
	*linear_extrude(70) translate([-12,60,0]) offset(0.2) import("../output/outlines/xlBoardLeft.dxf", convexity=10);
	#translate([0,0,5]) rotate([0, -tent, 0]) linear_extrude(50) translate([-12,60,0]) offset(0.2) import("../output/outlines/boardLeft.dxf", convexity=10);
}

*difference() {
	linear_extrude(70) translate([-12,60,0]) offset(2.2) import("../output/outlines/boardLeft.dxf", convexity=10);
	translate([0,-75, 0]) rotate([0, -tent, 0]) cube([200,150,100]);
}
*/

difference() {
	linear_extrude(40) projection() rotate([0, -tent, 0]) linear_extrude(5) offset(2.2) import("../output/outlines/xlBoardLeft.dxf", convexity=10);
	translate([0,-130, 5]) rotate([0, -tent, 0]) cube([200,150,100]);
	rotate([0, -tent, 0]) linear_extrude(5) offset(0.2) import("../output/outlines/xlBoardLeft.dxf", convexity=10);
	translate([140,-85,34.9]) rotate([0, -tent + 90, 0]) cube(10, center = true);
	translate([125,-50,33.3]) rotate([0, -tent + 90, 0]) cube(13, center = true);
}

