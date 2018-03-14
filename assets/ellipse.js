var ell_defs = [
{
	"name": "Ellipse",
	"defn": "set of $P(x, y)$ in a plane ($\\pi$) the sum of whose distances from two fixed points (foci) \
	is a constant ($2a$); also can be defined as a conic with eccentricity of more than or equal to $0$ and less than $1$"
},
{
	"name": "Major axis",
	"defn": "line segment containing two foci with endpoints on the ellipse"
},
{
	"name": "Minor axis",
	"defn": "line segment perpendicular to the major axis with endpoints on the ellipse"
},
{
	"name": "Vertex / vertices",
	"defn": "intersection of the major axis and the ellipse; endpoints of major axis"
},
{
	"name": "Covertex / covertices",
	"defn": "intersection of the minor axis and the ellipse; endpoints of minor axis"
}
]

var ell_eqn = [
{
	"name": "General Equation",
	"frm": "If $B = 0$ and $AC > 0$ in the general equation of the conic, then the section is an ellipse, \
	circle, point, or an empty set $\\{\\}$. The last two are degenerates."
},
{
	"name": "Standard Equation",
	"frm": "Horizontal ellipse: $\\frac{(x-h)^2}{a^2}+\\frac{(y-k)^2}{b^2}$ \n\
	Vertical Ellipse: $\\frac{(y-k)^2}{a^2}+\\frac{(x-h)^2}{b^2}$ \n\
	Notes: $a > b > 0$ \n\
	LHS = RHS = $0$ (point) and LHS $\\neq$ RHS ($\\{\\}$) are degenerate cases"
},
{
	"name": "Total distance from a point to the foci",
	"frm": "$2a$"
},
{
	"name": "Length of major axis",
	"frm": "$2a$"
},
{
	"name": "Length of minor axis",
	"frm": "$2b$"
},
{
	"name": "Length of segment connecting the two foci",
	"frm": "$2c$ where $c^2 = a^2 - b^2$"
},
{
	"name": "Distance between center $(h, k)$ to directrices (parallel to minor axis)",
	"frm": "$d = \\frac{a^2}{c}$"
},
{
	"name": "eccentricity",
	"frm": "$\\epsilon = \\frac{c}{a} < 1$"
}
]