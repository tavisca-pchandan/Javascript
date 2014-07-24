function concat() {
    var str1 = document.getElementById("first-string").value;
    var str2 = document.getElementById("second-string").value;
    document.getElementById("result-string").innerHTML = str1 + str2;
}


function length() {
    var str1 = document.getElementById("first-string").value;
    for (i = 0; str1[i] !== undefined; i++);
    var length = i;
    var str2 = document.getElementById("second-string").value;
    for (var i = 0; str2[i] !== undefined; i++);
    length = length + " " + i;
    document.getElementById("result-string").innerHTML = length;
}


function charat() {
    var str1 = document.getElementById("first-string").value;
    var str2 = document.getElementById("second-string").value;
    var index = prompt("Please the index", "0");
    if (index != null) {
        document.getElementById("result-string").innerHTML = str1[parseInt(index)] + " " + str2[parseInt(index)];
    }
}

function lastindexof() {
    var l1, l2;
    l1 = l2 = Infinity;
    var str1 = document.getElementById("first-string").value;
    var str2 = document.getElementById("second-string").value;
    var index = prompt("Enter the character", "P");
    if (index != null) {
        for (i = 0; i < str1.length; i++) {
            if (str1[i] == index) {
                l1 = i;
            }
        }
        for (i = 0; i < str2.length; i++) {
            if (str2[i] == index) {
                l2 = i;
            }
        }
        document.getElementById("result-string").innerHTML = l1 + " " + l2;
    }
}


function substring() {
    var a = document.getElementById("first-string").value;
    var b = document.getElementById("second-string").value;
    var i, j = 0, k = 0, substr = 0;
    for (i = 0; i < a.length; i++) {
        if (a[i] == b[j]) {
            j++;

            if (b[j] == undefined) {
                document.getElementById("result-string").innerHTML = "second string is substring of first one";
                substr = 1;
                break;
            }
        }
    }
    for (i = 0; i < b.length; i++) {
        if (b[i] == a[k]) {
            k++;
            if (a[k] == undefined) {
                document.getElementById("result-string").innerHTML = "first string  is substring of second string";
                substr = 1;
                break;
            }
        }
    }
    if (substr == 0) {
        document.getElementById("result-string").innerHTML = "no substring present";
    }

}