
var keylist = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
var tmp = ""

function generatepass(pLength) {
	tmp = ""
	for (i=0;i<pLength;i++) {
		tmp += keylist.charAt(Math.floor(Math.random()*keylist.length))
	}
	return tmp
}

function populateform(enterlength){
	document.passGen.output.value = generatepass(enterlength)
}
