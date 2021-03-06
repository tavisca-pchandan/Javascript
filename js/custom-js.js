function disableTextBoxes()
{
	document.getElementById("index1").style.display="none";
	document.getElementById("index2").style.display="none";
	document.getElementById("index3").style.display="none";
	document.getElementById("lindex1").innerHTML="";
	document.getElementById("lindex2").innerHTML="";
	document.getElementById("lindex3").innerHTML = "";
	document.getElementById("result-string").innerHTML = "";
	document.getElementById("concat").onclick = function() { 
		var result;
        disableTextBoxes();
		document.getElementById("lindex1").innerHTML = "Enter string to concat ";
		document.getElementById("index1").style.display="";
		document.getElementById("index1").onchange=function()
		{
     		var str1 = document.getElementById("first-string").value;
    		var s = new StringOperations(str1);
			var str1 = document.getElementById("index1").value;
			var s2 = new StringOperations(str1);
			result = s.concat(s2.str1);
			document.getElementById("result-string").innerHTML = result;
  		}
   }

   document.getElementById("SubString").onclick = function(){
   		disableTextBoxes();
    	document.getElementById("lindex1").innerHTML = "Enter start index";
		document.getElementById("lindex2").innerHTML = "Enter end index";
		
		document.getElementById("index1").style.display="";
		document.getElementById("index2").style.display="";
		
		document.getElementById("index1").onchange=function()
		{
			var str1 = document.getElementById("first-string").value;
	    	var s = new StringOperations(str1);
			var start = document.getElementById("index1").value;
			var end = document.getElementById("index2").value;
			if(end==undefined || end==null || end=="")
				end = s.str1.length;
		    result = s.substring(start,end);
			document.getElementById("result-string").innerHTML = result;
		}
		document.getElementById("index2").onchange=function()
		{
			var str1 = document.getElementById("first-string").value;
	    	var s = new StringOperations(str1);
			var start = document.getElementById("index1").value;
			var end = document.getElementById("index2").value;
			if(end==undefined || end==null || end=="")
				end = s.str1.length;
		   
			result = s.substring(start,end);
			document.getElementById("result-string").innerHTML = result;
		}
   }

   document.getElementById("length").onclick=function(){
   		disableTextBoxes();
		var str1 = document.getElementById("first-string").value;
    	var s = new StringOperations(str1);
    	result = s.length();
		document.getElementById("result-string").innerHTML = result;
   }

   document.getElementById("charat").onclick=function(){
   		disableTextBoxes();
		var str1 = document.getElementById("first-string").value;
    	var s = new StringOperations(str1);
		document.getElementById("lindex1").innerHTML = "Enter index";
		document.getElementById("index1").style.display="";
		document.getElementById("index1").onchange=function()
		{
				str1 = document.getElementById("index1").value;
				result = s.charat(str1);
				console.log(result);
				document.getElementById("result-string").innerHTML = result;
		}
   }

   document.getElementById("index-of").onclick=function(){
   		disableTextBoxes();
    	var str1 = document.getElementById("first-string").value;
    	var s = new StringOperations(str1);
		document.getElementById("lindex1").innerHTML = "Enter character";
		document.getElementById("index1").style.display="";
		document.getElementById("index1").onchange=function()
		{
			str1 = document.getElementById("index1").value;
			result = s.indexof(str1);
			document.getElementById("result-string").innerHTML = result;
			
		}
   }

   document.getElementById("last-index-of").onclick=function(){
   		disableTextBoxes();
    	var str1 = document.getElementById("first-string").value;
    	var s = new StringOperations(str1);
		document.getElementById("lindex1").innerHTML = "Enter character";
		document.getElementById("index1").style.display="";
		document.getElementById("index1").onchange=function()
		{
			str1 = document.getElementById("index1").value;
			result = s.lastindexof(str1);
			document.getElementById("result-string").innerHTML = result;
			
		}
   }

   document.getElementById("replace-char").onclick=function(){
   		disableTextBoxes();
    	var str1 = document.getElementById("first-string").value;
    	var s = new StringOperations(str1);
		document.getElementById("lindex1").innerHTML = "Enter character to be replaced";
		document.getElementById("index1").style.display="";
		document.getElementById("lindex2").innerHTML = "Enter character to replace by";
		document.getElementById("index2").style.display="";
		document.getElementById("index1").onchange=function()
		{
			str1 = document.getElementById("index1").value;
			str2 = document.getElementById("index2").value;
			result = s.replace(str1,str2);
			document.getElementById("result-string").innerHTML = result;
			
		}

		document.getElementById("index2").onchange=function()
		{
			str1 = document.getElementById("index1").value;
			str2 = document.getElementById("index2").value;
			result = s.replace(str1,str2);
			document.getElementById("result-string").innerHTML = result;
		}
   }
}


function StringOperations(str1) {
    
    this.str1 = str1;
    
	
    this.concat = function concat(str2) {
	console.log("in concat " +str2);
	this.str1 = this.str1 + str2;
	console.log(this.str1);
	document.getElementById("first-string").value = this.str1;
	return this.str1;
	}

   this.length = function length() {
	for (i = 0; this.str1[i] !== undefined; i++);
	return i;
	}

   this.substring = function substring(start,end) {
   		var status="";
    	
    	if(start==null || start==undefined)
    		throw "Start index not specified...!";
    	if(start<0 || end>this.str1.length)
    		throw "Invalid Index";
    	else
    	{
			
			console.log("substring");
			console.log(start + " " + end);
			for(i=start;i<end;i++)
				status = status + this.str1[i];
			console.log(status);
			return status;
	    }	
	}

	
	this.charat = function charat(index) {
		if(index==undefined || index==null || index=="")
			throw "Index not specified...!";
		else if(index<0 || index>this.str1.length)
			return "Invalid Index";
		else
		return this.str1[parseInt(index)];
    }

	this.lastindexof = function lastindexof(index) {
		if(index==undefined || index==null || index=="")
			throw "Index not specified...!";
		else if(index<0 || index>this.str1.length)
			return "Invalid Index";
		else
		{
		    var j = index.length-1;
	    	var l1 = Infinity;
			for (i=this.str1.length; i >0; i--) 
			{
			      if (this.str1[i] == index[j]) 
			      {
			          l1 = i;
			          j--;
			         
	                  console.log("l1" + l1);
					}
			}
			if(l1==Infinity)
			{
				l1 = "Character does not found...!";
				return l1;
			}
			else
			{
	        		return "Character found at index " + l1;
	    		}
	    	}
	}


	this.indexof = function indexof(index){
		if(index==undefined || index==null || index=="")
			throw "Index not specified...!";
		else
		{
		    var j=0;
			var l1 = Infinity;
			for (i = 0; i < this.str1.length; i++) 
			{
			    if (this.str1[i] == index[j])
			    {
			        l1 = i;
			        j++;
			        if (j == index.length)
			            break;
			    }
			   
			}
			if (index.length > 1)
			{
			    l1 = l1 - (index.length - 1);
			}
			if(l1==Infinity)
			{
				l1 = "Character does not found...!";
				return l1;
			}
			else
			{
	        		return "Character found at index " + l1;
	    	}
	    }
	}

	this.replace = function replace(target,source) 
	{
		if(target==undefined || target=='' || target==null)
			{
				throw "Specify Character to be replaced";
			}
			else if(source==undefined || source=='' || source==null)
			{
				throw "Specify Character to replace by";
			}
			else
			{
				var a="";
				var k=0;
				var j = this.str1.length;
				console.log(str1+ " " + target + " " + source)
				var str_arr = new Array();
				for(i=0;i<j;i++)
				{
					str_arr[i] = this.str1[i];
					console.log(str_arr[i]);
				}
				
				for (i = 0; i <j ; i++) 
				{
					if(str_arr[i]==target[k])
					{
						
						str_arr[i] = source[k];
						a = a + str_arr[i];
						k++;
						
						
					}
					else
						a = a + str_arr[i];
				}
				this.str1 = a;
				document.getElementById("first-string").value = this.str1;
				return a;
		
			}	
    
}

}











