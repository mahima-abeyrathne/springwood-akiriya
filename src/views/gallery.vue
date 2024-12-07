<template>


<header>
    <h1>Camping Site Gallery </h1>
</header>
<body>
    <div class="gallery">
        <div class="gallery-item">
            <img src="../assets/r.jpg" alt="Image 1">
        </div>
        <div class="gallery-item">
            <img src="../assets/b.jpg" alt="Image 2">
        </div>
        <div class="gallery-item">
            <img src="../assets/c.jpg" alt="Image 3">
        </div>
        <div class="gallery-item">
            <img src="../assets/d.jpg" alt="Image 4">
        </div>
        <div class="gallery-item">
            <img src="../assets/e.jpg" alt="Image 5">
        </div>
        <div class="gallery-item">
            <img src="../assets/f.jpg" alt="Image 6">
        </div>
        <div class="gallery-item">
            <img src="../assets/g.jpg" alt="Image 7">
        </div>
        <div class="gallery-item">
            <img src="../assets/h.jpg" alt="Image 8">
        </div>
        <div class="gallery-item">
            <img src="../assets/i.jpg" alt="Image 9">
        </div>

        <div class="gallery-item">
            <img src="../assets/j.jpg" alt="Image 10">
        </div>
        <div class="gallery-item">
            <img src="../assets/k.jpg" alt="Image 11">
        </div>
        <div class="gallery-item">
            <img src="../assets/l.jpg" alt="Image 12">
        </div>
        <div class="gallery-item">
            <img src="../assets/m.jpg" alt="Image 13">
        </div>
        <div class="gallery-item">
            <img src="../assets/n.jpg" alt="Image 14">
        </div>
        <div class="gallery-item">
            <img src="../assets/o.jpg" alt="Image 15">
        </div>
        <div class="gallery-item">
            <img src="../assets/p.jpg" alt="Image 16">
        </div>

        <div class="gallery-item">
            <img src="../assets/a.jpg" alt="Image 18">
        </div>
        <div class="gallery-item">
            <img src="../assets/s.jpg" alt="Image 19">
        </div>
        <div class="gallery-item">
            <img src="../assets/t.jpg" alt="Image 20">
        </div>
        <div class="gallery-item">
            <img src="../assets/u.jpg" alt="Image 21">
        </div>
        <div class="gallery-item">
            <img src="../assets/v.jpg" alt="Image 22">
        </div>
        <div class="gallery-item">
            <img src="../assets/w.jpg" alt="Image 23">
        </div>
        <div class="gallery-item">
            <img src="../assets/x.jpg" alt="Image 24">
        </div>
    </div>

    <div class="popup">
        <img id="popupImage" src="" alt="">
    </div>

 
    <br><br>
	
    <footer> 
    <main>
        <section>
            <h2>Contact Information</h2>
            <p><strong>Phone:</strong> +94718311141 </p>
            <p><strong>Email:</strong> demodaravillage@gmail.com</p>
        </section>

    </main>
 
	        <div class="social-media-buttons">
            <a href="https://www.facebook.com/springwoodakiriya/" target="_blank">
                <img src="../assets/fb.png" width ="40" height ="40" alt="Facebook">
            </a>
			<a href="https://instagram.com/springwood_akiriya?igshid=MzMyNGUyNmU2YQ==" target="_blank">
				<img src ="../assets/insta.png" width ="40" height ="40" alt="instagram">
		    </a>
            <a href="http://www.youtube.com/@demodaravillage5037" target="_blank">
                <img src="../assets/utube.png" width ="40" height ="40" alt="Youtube">
            </a>
                    </div><br>
        <p>&copy; 2023 SPRINGWOOD </p>
		
    </footer>
</body>

</template>

<style>

body {
    background-color: #EAEAEB;
    margin: 0;
    padding: 0;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 20px;
    min-width: 750px;
}
body::before {
    content: "";
    background: inherit;
    filter: blur(5px);
    opacity: 0.8; 
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

header {
    background-color: #333;
    color: #ffffff;
	text-align: center;
    padding: 5px;
}

nav ul {
    list-style-type: none;
    padding: 2;
    justify-content: center;
    text-indent: 8px;
}

nav a {
    margin: 30px;
}

nav a {
    text-decoration: none;
	color: #ffffff;
    transition: color 0.3s;
    letter-spacing: 1px; 
}


.container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
.button {
    background-color: #090d7f;
    padding: 0.5em 1em;
    border: 0;
    color: white;
    border-radius: .5em;
    font-size: 1.2em;
    text-decoration: none;
  }
  .contact-button {
    background-color: #9e0000;
    padding: 0.5em 1em;
    border: 0;
    color: white;
    border-radius: .5em;
    font-size: 1.2em;
    text-decoration: none;
  }
  
.hero {
    background: url("../assets/p.jpg") center;
    background-size: cover;
    height: 80vh;
  }

.image-gallery img {
    padding-right: 70px; 
}
  
.banner {
    margin-top: -12em;
    display: -ms-grid;
    display: grid;
    place-content: center;
  }
  
.banner .button-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  
.banner .description {
    background-color: white;
    max-width: 50vw;
    padding: 2em 4em 4em 4em;
    margin-top: 2em;
    text-align: center;
    line-height: 1.5;
    border-radius: 1em;
  }


.gallery {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    margin: 50px;
    transition: transform 100s ease-in-out;

}

.gallery-item {
    width: 500px;
    height: 500px;
    overflow: hidden;
    margin: 50px;
}



.popup {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    text-align: center;
    z-index: 2;
}

#popupImage {
    max-width: 80%;
    max-height: 80%;
    margin: 10% auto;
}


.social-media-buttons {
    font-size: 24px;
}

.social-media-buttons a {
    text-decoration: none;
    color: #0077B5; 
    margin: 0 15px;
}

.social-media-buttons a:hover {
    color: #005283; 
}

footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px 0;
}

</style>

<script>

    export default {
        methods: {

            }
    }
</script>