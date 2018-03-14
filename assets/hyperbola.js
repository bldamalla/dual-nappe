var hyp_defn = [
{
	"name": "Hyperbola",
	"defn": "set of points $P(x, y)$ the absolute differences of whose distances from two fixed points \
	(foci) is a constant and is equal to $2a$; also can be defined as conic with eccentricity greater than 1"
},
{
	"name": "Transverse axis",
	"defn": "line segment containing two foci with endpoints on the hyperbola"
},
{
	"name": "Conjugate axis",
	"defn": "line segment perpendicular to transverse axis, on major axis's perpendicular bisector. Its endpoints are determined as follows.\
First, a line passing through a vertex perpendicular to the transverse axis is constructed.\
Next, its intersections with the hyperbola's asymptotes are noted.\
Finally, the points on the line of the conjugate axis which are closest to the aforementioned intersection become the conjugate axis's endpoints."
},
{
	"name": "Vertex / Vertices",
	"defn": "endpoints of the transverse axis"
},
{
	"name": "Covertex / Covertices",
	"defn": "endpoints of the conjugate axis"
}
]

var hyp_eqn = [
{
	"name": "General Equation",
	"frm": "If $B = 0$ and $AC < 0$ in the general form of a conic, then the graph is a hyperbola or one of its degenerates"
},
{
	"name": "Standard equation",
	"frm": "Horizontal hyperbola: $\\frac{(x-h)^2}{a^2}-\\frac{(y-k)^2}{b^2} = 1$\
	Vertical hyperbola: $\\frac{(y-k)^2}{a^2}-\\frac{(x-h)^2}{b^2} = 1$\
	Note: the term with $a$ is always positive, regardless of if $b$ is higher or $y$ comes before $x$\
	The degenerate cases follow when $LHS = RHS = 0$ (intersecting lines) or when $b$ appproaches infinity (parallel lines)"
},
{
	"name": "Absolute difference of distances of a point on the conic to the foci",
	"frm": "$2a$"
},
{
	"name": "Length of transverse axis",
	"frm": "$2a$"
},
{
	"name": "Length of conjugate axis",
	"frm": "$2b$"
},
{
	"name": "Length of segment connecting the two foci",
	"frm": "$2c$; where $c^2 = a^2 + b^2$"
},
{
	"name": "distance from center $(h, k)$ to the directrices",
	"frm": "$d = \\frac{a^2}{c}$"
},
{
	"name": "eccentricity",
	"frm": "$\\epsilon = \\frac{c}{a}$"
},
{
	"name": "asymptotes",
	"frm": "Vertical hyperbola: $y = k \\pm a\\frac{x-h}{b}$\
	Horizonal hyperbola: $k \\pm b\\frac{y-k}{a}$"
}
]