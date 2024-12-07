<template>
<head>
    <meta charset="UTF-8">
    <title>SPRINGWOOD </title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <header>
        <img src ="../assets/sw.png" width ="200" height ="100" alt="logo">
<h1><font size="7px">SPRINGWOOD - AKIRIYA</font></h1>

    </header>	


    <div class="section hero">
        <br><br>
	    <div class="image-gallery">
        <marquee direction="left">
            <img src="../assets/r.jpg" width ="350" height ="300">
            <img src="../assets/b.jpg" width ="350" height ="300">
            <img src="../assets/c.jpg" width ="350" height ="300">
            <img src="../assets/d.jpg" width ="350" height ="300">
            <img src="../assets/e.jpg" width ="350" height ="300">
            <img src="../assets/f.jpg" width ="350" height ="300">
            <img src="../assets/g.jpg" width ="350" height ="300">
        </marquee>    
    </div>
</div>


    <div class="container banner">
        <div class="button-wrapper">
         <button class="a-button"><router-link to="/packages">Book Now</router-link></button>
        </div>
        <div class="description">
          <font color="#000000">
            <h1>Best Camping Experience</h1>
            <p>Take a break from your busy life and enjoy nature and the great outdoors. Save now and enjoy more with packages with discounted rates.</p>
          </font>
          </div>
    </div>        
<br>

<center>
    <section id="about">

<div class="about-container">	
	<h1><font size="7px" color="#000000">About Spring Wood Akiriya</font></h1><br>
  <font color="#000000">
           <h3><p>Are you yearning for a retreat from the hustle and bustle of daily life?<br>
             Do you dream of waking up to the soothing sounds of nature and a breathtaking sunrise?<br>
              Look no further; your camping adventure begins here!<br>
            At Springwood, we offer an idyllic haven for outdoor enthusiasts, nature lovers, and adventure seekers. Nestled in the heart of 
            Badulla, our campsite promises an unforgettable experience, surrounded by the beauty of the great outdoors.</p></h3><br>
          </font>
          <button class="a-button"><router-link to="/about">Read More</router-link></button>
</div>
	</section>
</center>

<div class="section activities">
   <center> <h1><font size="7px" color="#000000">Activities</font></h1></center>
    <ul>
      
        <li>
            <img src="../assets/h.jpg" width ="400" height ="300" alt="Archering">
        <center><h2> <font color="#000000">Archering</font></h2></center>
        </li>
        <li>
            <img src="../assets/n.jpg" width ="400" height ="300" alt="firing">
            <center><h2><font color="#000000">Shooting</font></h2> </center>
        </li>
        <li>
            <img src="../assets/g.jpg" width ="400" height ="300" alt="Boating">
            <center><h2><font color="#000000">Water Rafting</font></h2> </center>
        </li>
        <li>
            <img src="../assets/o.jpg" width ="400" height ="300" alt="cycling">
            <center><h2><font color="#000000">Cycling</font></h2> </center>
        </li>

        <li>
            <img src="../assets/atv.jpg" width ="400" height ="300" alt="cycling">
            <center><h2><font color="#000000">ATV Ride</font></h2> </center>
        </li>
    </ul>
</div>

	
    <section id="packages">
        <div class ="packages">
       <center> <h1><font size="7px" color="#000000">Camping Packages</font></h1></center>
		<br><br><br>
        <ul>
        <li>
            <img src="../assets/b.jpg" width ="400" height ="300" alt="Package 1">
            <font color="#000000">
            <h3>Mini pacakege 1</h3>
            <p><strong>Price:</strong>  Rs 3500 Per Night</p>
          </font>
        </li>
		<br>
        <li>
            <img src="../assets/t.jpg" width ="400" height ="300" alt="Package 2">
            <font color="#000000">
            <h3>Mini pacakege 2</h3>
            <p><strong>Price:</strong> Rs 4000 Per Night</p>
          </font>
        </li>
		<br>

        <li>
            <img src="../assets/p.jpg" width ="400" height ="300" alt="Package 3">
            <font color="#000000">
            <h3>Large Package 1</h3>
            <p><strong>Price:</strong>  Rs 3250 Per Night</p>
          </font>
        </li>
		<br>
        <li>
            <img src="../assets/a.jpg" width ="400" height ="300" alt="Package 3">
            <font color="#000000">
            <h3>Large Package 2</h3>
            <p><strong>Price:</strong>  Rs 3500 Per Night</p>
            </font>
        </li>
        </ul>
        <center>


          <button class="a-button"><router-link to="/packages">More detail</router-link></button>
 
        </center>
        <br>
        </div>
    </section>
	<br><br>

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

<script>


export default {
  name: 'HomeView',
 
}
</script>

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
.a-button {
  background-color: #9a9898;
  padding: 0.5em 1em;
  border: 0;
  color: white;
  border-radius: .5em;
  font-size: 1.2em;
  text-decoration: none;
}

.contact-button {
  background-color: #9a9898;
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
  padding-right: 700px; 
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

.about-container{
text-align: left;
  padding: 40px;
  transform: scale(0.95);
  transition: background-color 0.3s, transform 0.3s;
}

.activities {
  background-color: #d3d3d3;
  padding: 2em;
}

.activities h2 {
  text-align: center;
  margin-bottom: 2em;
}

.activities ul, .activities li {
  list-style-type: none;
}

.activities ul {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(320px, 1fr))[auto-fit];
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 5em;
}


#packages {
  text-align: center;
  padding: 40px;
}

.packages{
  background-color: #ffffff;
  padding: 2em;
}

.packages h2 {
  text-align: center;
  margin-bottom: 2em;
}

.packages ul, .packages li {
  list-style-type: none;
}

.packages ul {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(320px, 1fr))[auto-fit];
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 4em;
}

.package1-container:hover {
  background-color: #eee;
  transform: scale(0.95);
  transition: background-color 0.3s, transform 0.3s;
}
.package2-container:hover {
  background-color: #eee;
  transform: scale(0.95);
  transition: background-color 0.3s, transform 0.3s;
}
.package3-container:hover {
  background-color: #eee;
  transform: scale(0.95);
  transition: background-color 0.3s, transform 0.3s;
}	
.package4-container:hover {
  background-color: #eee;
  transform: scale(0.95);
  transition: background-color 0.3s, transform 0.3s;
}	

.package1-container img {
  width: 100%;
  max-width: 400px;
  display: block;
  margin: 0 auto;
}
.package2-container img {
  width: 100%;
  max-width: 400px;
  display: block;
  margin: 0 auto;
}

.package3-container img {
  width: 100%;
  max-width: 400px;
  display: block;
  margin: 0 auto;
}

.book-button {
  background-color: #000080;
  color: #fff;
  padding: 20px 20px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  margin-top: 20px;
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