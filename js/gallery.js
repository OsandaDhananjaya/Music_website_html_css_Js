// backgroundColor and fontColour 
			var i;
			function bgcolour(e){
				var x = e.style.background;
				document.body.style.backgroundColor = x;
			}

			function fontcolor(e){
			var y = e.style.background;
			var x = document.getElementsByName("g_text");
			for(var i = 0; i < x.length; i++){
				x[i].style.color=y;
			}
			}
			var open = true;
			function togglebg(){
				
				if(open){
					document.getElementById("background").style.display = "block";
					open = false;
				}else{
					document.getElementById("background").style.display = "none";
					open = true;
					
				}
				
				console.log(open);
			}
			
			var openx = true;
			function togglefont(){
				
				if(openx){
					document.getElementById("fontcolor").style.display = "block";
					openx = false;
				}else{
					document.getElementById("fontcolor").style.display = "none";
					openx = true;
					
				}
				
				console.log(open);
			}
			
			// Get the modal
			var modal = document.getElementById("myModal");

			// Get the image and insert it inside the modal - use its "alt" text as a caption
			
			var modalImg = document.getElementById("img01");
			var captionText = document.getElementById("caption");
			
			//for guitar
			var img = document.getElementById("guitar");
			img.onclick = function(){
			  modal.style.display = "block";
			  modalImg.src = this.src;
			  captionText.innerHTML = this.alt;
			}
			
			//for harp
			var img = document.getElementById("harp");
			img.onclick = function(){
			  modal.style.display = "block";
			  modalImg.src = this.src;
			  captionText.innerHTML = this.alt;
			}
			
			//for cello
			var img = document.getElementById("cello");
			img.onclick = function(){
			  modal.style.display = "block";
			  modalImg.src = this.src;
			  captionText.innerHTML = this.alt;
			}
			
			//for piano
			var img = document.getElementById("piano");
			img.onclick = function(){
			  modal.style.display = "block";
			  modalImg.src = this.src;
			  captionText.innerHTML = this.alt;
			}
			
			//for flute
			var img = document.getElementById("flute");
			img.onclick = function(){
			  modal.style.display = "block";
			  modalImg.src = this.src;
			  captionText.innerHTML = this.alt;
			}
			
			//for drum
			var img = document.getElementById("drum");
			img.onclick = function(){
			  modal.style.display = "block";
			  modalImg.src = this.src;
			  captionText.innerHTML = this.alt;
			}
			
			//for violin
			var img = document.getElementById("violin");
			img.onclick = function(){
			  modal.style.display = "block";
			  modalImg.src = this.src;
			  captionText.innerHTML = this.alt;
			}
			
			//for trumpet
			var img = document.getElementById("trumpet");
			img.onclick = function(){
			  modal.style.display = "block";
			  modalImg.src = this.src;
			  captionText.innerHTML = this.alt;
			}
			
			//for drum
			var img = document.getElementById("saxphone");
			img.onclick = function(){
			  modal.style.display = "block";
			  modalImg.src = this.src;
			  captionText.innerHTML = this.alt;
			}
			
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			  modal.style.display = "none";
			}
			
			
			//top button
			var mybutton = document.getElementById("myBtn");

		window.onscroll = function() {scrollFunction()};

		function scrollFunction() {
		  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			mybutton.style.display = "block";
		  } else {
			mybutton.style.display = "none";
		  }
		}

		function topFunction() {
		  document.body.scrollTop = 0;
		  document.documentElement.scrollTop = 0;
		}