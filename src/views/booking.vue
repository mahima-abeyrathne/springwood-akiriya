<template>
<header>  
    <h1>Make a Reservation</h1>
     </header> <br><br>
<body>
    <center>
    <form id="bookingForm">
        <label for="name">Name:</label>
        <input type="text" id="name" required><br><br>
        
        <label for="email">Email:</label>
        <input type="email" id="email" required><br><br>
        
        <label for="checkin">Check-in Date:</label>
        <input type="date" id="checkin" required><br><br>
        
        <label for="checkout">Check-out Date:</label>
        <input type="date" id="checkout" required><br><br>
        
        <label for="payment">Payment Amount:</label>
        <input type="number" id="payment" required><br><br>
        
        <button type="button" @click="submitBooking()" class="button">Book Now</button>
    </form>
    <br><br><br><br><br>
    
    <div id="paymentStatus"></div>
    
  
</center>
<br><br><br>
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
            <a href="https://www.linkedin.com/company/demodara-village-pvt-ltd" target="_blank">
                <img src="../assets/twit.png" width ="40" height ="40" alt="Twitter">
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

<script>
export default {
        methods: {
            submitBooking()
            {

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const checkin = document.getElementById("checkin").value;
        const checkout = document.getElementById("checkout").value;
        const payment = document.getElementById("payment").value;


      const paymentStatus = document.getElementById("paymentStatus");
paymentStatus.innerHTML = `
    <h2>Reservation Successful</h2>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Check-in Date: ${checkin}</p>
    <p>Check-out Date: ${checkout}</p>
    <p>Payment Amount: $${payment}</p>
`;
}
        }
    }
</script>