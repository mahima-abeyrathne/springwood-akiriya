<template>
<head>
    <meta charset="UTF-8">
    <title>Contact Us - SpringWood</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>

<center>
<body>
<header>
    <h1>Contact Us</h1>
</header>
<main>
    <section>
        <h2>Contact Information</h2>
        <p><strong>Phone:</strong> +94718311141 </p>
        <p><strong>Email:</strong> demodaravillage@gmail.com</p>
        <p><strong>Address:</strong> Reruwelagawathanna Akiriya, Badulla 90000</p>
    </section>

</main>
<br><br>
<section>
    <h2>Operating Hours</h2>
    <p>We are open 7 days a week:</p>
    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
    <p>Saturday - Sunday: 10:00 AM - 4:00 PM</p>
</section>

<section>
    <h2>Connect with Us</h2>
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
                </div>
</section>
</body>
</center>
<br><br><br><br><br>
<footer>

<p>&copy; 2023 SPRINGWOOD </p>

</footer>
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