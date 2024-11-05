<template>

  <section id="about">
      <header>
<center><h1><font size="7px">About Spring Wood Akiriya</font></h1><br></center>	
</header>
<div class="about-container">	
         <h2> Welcome to Springwood Akiriya - Your Ultimate Outdoor Adventure Destination!</h2>

             <h3> <p>Are you yearning for a retreat from the hustle and bustle of daily life? Do you dream of waking up to the soothing sounds of nature and a breathtaking sunrise? Look no further; your camping adventure begins here!<br>
              
              At Springwood, we offer an idyllic haven for outdoor enthusiasts, nature lovers, and adventure seekers. Nestled in the heart of Badulla, our campsite promises an unforgettable experience, surrounded by the beauty of the great outdoors.<br><br><br>
              
              <b>Why Choose Springwood for Your Camping Adventure?</b><br><br>
              
              <li>Unspoiled Natural Beauty: Our camping site is situated in a pristine wilderness, ensuring you're surrounded by unspoiled natural beauty. You'll be mesmerized by the stunning landscapes, with lush forests, crystal-clear rivers, and towering mountains all around.</li><br>
              <center><img src="../assets/e.jpg" width ="350" height ="300">
              <img src="../assets/m.jpg" width ="350" height ="300">
              <img src="../assets/j.jpg" width ="350" height ="300"></center>
              <br>
              <li> Variety of Camping Options: We cater to campers of all types, whether you prefer tent camping, RV camping, or even cabins for a touch of luxury. Choose your style and make yourself at home in our well-maintained facilities.</li><br>
              <center><img src="../assets/b.jpg" width ="450" height ="300">
                  <img src="../assets/p.jpg" width ="450" height ="300"></center>
                  <br>
              <li>Endless Adventure: Springwood is an adventure playground! Hiking, fishing, mountain biking, birdwatching, and star gazing are just a few of the activities you can enjoy right on your doorstep. The nearby trails and waterways offer opportunities for exploration and excitement.</li><br>
              <center><img src="../assets/s.jpg" width ="350" height ="300">
                  <img src="../assets/g.jpg" width ="350" height ="300">
                  <img src="../assets/h.jpg" width ="350" height ="300">
                  <img src="../assets/n.jpg" width ="350" height ="300">
                  <img src="../assets/o.jpg" width ="350" height ="300"></center>
               <br>
              <li>Family-Friendly Atmosphere: Bring the family and reconnect with each other and nature. Our campsite is a safe, welcoming environment for families of all sizes. We offer activities for kids and adults alike.</li><br>
             <center> <img src="../assets/a.jpg" width ="450" height ="300">
              <img src="../assets/t.jpg" width ="450" height ="300">
              <img src="../assets/w.jpg" width ="450" height ="300"></center>
              <br>
              
              <li> Campfire Nights: What's a camping experience without a crackling campfire under a starry sky? At Springwood, we encourage campfires, marshmallow toasting, and sharing stories by the warmth of the flames.</li><br>
              <center> <img src="../assets/f.jpg" width ="450" height ="300">
                  <img src="../assets/u.jpg" width ="450" height ="300">
                  <img src="../assets/v.jpg" width ="450" height ="300"></center>
                  <br>
              
              <li> Local Cuisine: Don't forget to try the local cuisine and connect with the community. Savor delicious meals cooked over an open flame or sample the delights of nearby restaurants and food vendors.</li><br><br><br>
              
              Your Gateway to Adventure Awaits!<br><br>
              
              Whether you're an experienced outdoorsperson or a first-time camper, SpringWood Akiriya is the perfect place to experience the great outdoors. Escape the daily grind, unwind, and reconnect with nature in a setting that's sure to create lasting memories.<br>
              
              Explore our website for booking information, campground maps, adventure recommendations, and more. We're here to help you plan your unforgettable camping trip, so you can focus on making memories that will last a lifetime.<br><br><br>
              
              Springwood Akiriya - Where Nature and Adventure Converge!</p></h3><br>
              
              <button class="contact-button"><router-link to="/Contact">Contact Info</router-link></button>
</div>
</section>    
  <footer> 
      <main>
          <section>
              <h2>Contact Information</h2>
              <p><strong>Phone:</strong> +947131141 </p>
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
              <a href="https://www.linkedin.com/company/demodara-village-pvt-ltd" target="_blank">
                  <img src="../assets/twit.png" width ="40" height ="40" alt="Twitter">
              </a>
                      </div><br>
          <p>&copy; 2023 SPRINGWOOD </p>
          
      </footer>

</template>


<style scoped>

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

.Dark Basebutton {
  background-color: #000080;
  color: #fff;
  padding: 20px 20px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  margin-top: 20px;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
}

.gallery-item {
  width: 300px;
  height: 300px;
  overflow: hidden;
  margin: 20px;
  transition: transform 100s ease-in-out;
}

.gallery-item {
  transform: scale(1.1);
  cursor: pointer;
  z-index: 1s;
}

.gallery-item img {
  width: 100%;
  height: 100%;
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


