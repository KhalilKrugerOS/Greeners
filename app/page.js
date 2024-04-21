import React from 'react';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css'; // This is still imported as usual
import 'slick-carousel/slick/slick-theme.css'; // This too
import TrendingSlider from "./TrendingSlider";
import footer from "./footer";
import './footer.css'; // Assurez-vous que ce fichier CSS est dans le même dossier
import { FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG, FaPinterestP, FaBloggerB } from 'react-icons/fa';




// Dynamically import the Slider as a client component
const Slider = dynamic(() => import('react-slick'), { ssr: false });


const HomePage = () => {
 
  return (
  
    <div className="hero-container"> 
      <img src="imagec.jpg" alt="Children" className="background-image" />
      <div className="content">
        <h1 className="title">Chaque Contribution : Un Pas Vers Avenir Radieux</h1>
        <p className="description">
        Chaque don est un investissement dans un avenir plus 
        lumineux et équitable. Ensemble, faisons une différence durable - un geste, un don à la fois.
        
        </p>
        <button className="apply-button">APPLY NOW</button>
        
      </div>
      <br>
      </br>
      <br></br>
      <br></br>
      <div className="about-section">
  <div className="image-container">
    <img src="propos.png" alt="Image de présentation" />
  </div>
  <div className="text-container">
    <h2><b>À propos de nous</b></h2>
    <p>HNG Grammar School is an institute that takes pride in the growth of our students, <br />
      not just as intellectuals but also as responsible members of the society.</p>
    <p>We encourage curiosity, free thinking, and inclusiveness in our students. <br />
      Our teachers are technically adept and passionate about their jobs and  <br />
      our facilities meet global standards.</p>
  </div>
</div>




       
<br />
<br />
<br />
<br />
<div>
      <TrendingSlider />
      
      <br />
      <br />
      <br />
    </div>
<div className="about-section-container">
  <div className="image-wrapper">
    <img src="sécurité.jpg" alt="Descriptive Alt Text" />
  
 
    </div> 
  <div className="text-wrapper">
    <h1 className="title-main">La confiance est le socle de la générosité</h1>
    <h2 className="title-sub">la sécurité, son bouclier.</h2>
    <h3 className="heading-question"><b>pourquoi ?</b></h3>
    <p>Car nous avons établi un partenariat solide avec la Banque X. Cette collaboration garantit que chaque donation est traitée avec le plus haut niveau de protection, utilisant les protocoles de sécurité rigoureux. Avec Banque X, vos gestes de générosité sont entre des mains sûres, vous permettant de donner en toute confiance.</p>
    <h3 className="heading-result"><b>Le résultat ?</b></h3>
    <p>Le partenariat avec la Banque X enrichit sa réputation, attirant une clientèle qui valorise la sécurité et l'engagement social. Il témoigne de son rôle actif dans le soutien aux initiatives philanthropiques, renforçant sa position en tant qu'acteur clé du changement sociétal.</p>
  </div>
</div>

<br />
<br />
<br />
<br />
<div>
<footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            {/* Assurez-vous que le chemin de l'image est correct */}
            <img src="/path-to-your-logo.svg" alt=" Logo" />
            <p > AID se consacre à vous fournir les outils nécessaires pour collecter des fonds, quelle que soit la cause que vous défendez</p>
          </div>
        </div>
        <div className="footer-section">
          <h3>ABOUT US</h3>
          <ul>
            
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Support</a></li>
           
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Sales</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /> Facebook</a>
            <a href="#"><FaTwitter /> Twitter</a>
            <a href="#"><FaInstagram /> Instagram</a>
            <a href="#"><FaGooglePlusG /> Google+</a>
            <a href="#"><FaPinterestP /> Pinterest</a>
            <a href="#"><FaBloggerB /> Blog</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © AID 2030</p>
      </div>
    </footer>
    </div>




      <style >{`
        .hero-container {
          position: relative;
          width: 100%;
          height: 300px; /* Adjust based on your actual image's aspect ratio */
          color: white;
          
        }
        .hero-container::before {
          content: '';
          display: block;
          position: absolute;
          width: 100%;
          height: 600px;
          background: linear-gradient(
            rgba(0, 0, 0, 0.2), /* L'opacité du début du dégradé */
            rgba(0, 0, 0, 0.2)  /* L'opacité de la fin du dégradé */
          );
          z-index: 1;
        }
        .background-image {
         
          width: 100%;
          height: 200%;
          
        }

        .content {
          position: absolute;
          top: 135%;
          left: 30%;
          transform: translate(-50%, -50%);
          font-size: 50px;
          z-index: 2; /* Le contenu doit être au-dessus du dégradé et de l'image */

        }

        .title {
          font-size: 50px; /* Adjust font size as needed */
          margin-bottom: 0.5rem;
          margin-left: 120px;
         
        }

        .description {
          margin-bottom: 1.5rem;
          font-size: 1rem; /* Adjust font size as needed */
          max-width: 600px; /* Adjust width as needed */
          margin-left: auto;
          margin-right: auto;
          font-size: 20px;
          color:white;
          
          
        }

        .apply-button {
          background-color: #3498db;/* Adjust color as needed */
          color: white;
          border: none;
          padding: 10px 25px;
          cursor: pointer;
          font-size: 1rem; /* Adjust font size as needed */
          border-radius: 5px; /* Adjust border radius as needed */
          transition: background-color 0.3s;
          margin-left: 100px;
          
         
        }

        .apply-button:hover {
          background-color: #004494; /* Darken button on hover */
        }

        .photo-credit {
          position: absolute;
          bottom: 0;
          right: 0;
          font-size: 0.7rem; /* Adjust font size as needed */
          margin: 10px;
          width:100px;

          linear-gradient(
          to bottom, 
          rgba(0, 0, 0, 0.3), /* Vous pouvez ajuster cette valeur pour changer l'opacité */
          rgba(0, 0, 0, 0.7)  /* De même ici */
          );
          
        }
        .about-section {
          display: flex;
          align-items: center;
          justify-content: start;
          margin: 20px;
          
        }
        
        .image-container {
          flex: 1; /* Ajustez la proportion de l'image par rapport au texte si nécessaire */

        }
        
        .image-container img {
          width:400px;
          height: auto;
          box-shadow: 0px 4px 8px rgba(1, 1, 1, 1); /* Horizontal offset, vertical offset, blur radius, and color */

        }
        
        .text-container {
          color:black;
          background-color:white;
          padding-left: 5px;
          margin-right:100px;
          width:600px;
          background-color:beige;
        }
        
        .text-container h2 {
          margin-bottom: 10px;
          text-decoration: underline;
  text-decoration-color: #0056b3; /* Ceci définira la couleur de la ligne de soulignement en bleu */
  text-decoration-thickness: 2px;
  text-underline-offset: 0.5em; /* Ajustez cette valeur pour augmenter ou diminuer l'espace */


        }
        
        .text-container p {
          text-align: justify;
          margin-bottom: 10px;
        }
        
        /* Pour les écrans plus petits, vous pouvez vouloir que l'image et le texte soient empilés au lieu d'être côte à côte */
        @media (max-width: 600px) {
          .about-section {
            flex-direction: column;
          }
        
          .image-container, .text-container {
            flex: none;
          }
        
         
          

        }
        .about-section-container {
          display: flex;
          align-items: center;
          justify-content: start;
          margin: 20px;
          background-color: #f0f0f0;
        }
    
        .image-wrapper img {
          width: 2000px;
          height: auto;
        }
    
        .text-wrapper {
          flex-grow: 2;
          padding: 20px;
        }
    
        .title-main {
          color: #333;
          font-size: 24px;
          text-decoration: underline;
          text-decoration-color: blue;
          text-underline-offset: 6px;
          margin-left:100px;
        }
    
        .title-sub {
          color: #333;
          font-size: 24px;
          text-decoration: underline;
          text-decoration-color: blue;
          text-underline-offset: 6px;
          margin-left:200px;
        }
    
        .heading-question, .heading-result {
          color: #007BFF;
          font-size: 18px;
          margin-top: 20px;
          color: #0056b3;
        }
    
        p {
          color: black;
          line-height: 1.6;
        }
    
        @media (max-width: 600px) {
          .about-section-container {
            flex-direction: column;
          }
    
          .image-wrapper, .text-wrapper {
            flex: none;
          }
          .image-wrapper {
            display: inline-block; /* ou 'block' selon votre disposition */
            margin: 0 auto; /* Centrer l'image si nécessaire */
            overflow: hidden; /* Assurer que tout effet de débordement est caché */
          }
      
          .image-wrapper {
            display: inline-block; /* ou 'block' selon votre disposition */
            margin: 0 auto; /* Centrer l'image si nécessaire */
            overflow: hidden; /* Assurer que tout effet de débordement est caché */
          }
          .testimonials-container {
            width: 80%;
            margin: 0 auto;
            text-align: center;
          }
  
          .testimonial {
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            margin: 20px;
          }
  
          .testimonial img {
            width: 80px;
            height: 80px;
            border-radius: 40px;
            margin-bottom: 20px;
          }
      
      .testimonials-container {
          width: 80%;
          margin: 0 auto;
          text-align: center;
        }
        .footer {
          background-color: #3498db;
          color: white;
          padding: 20px 0;
          font-family: 'Arial', sans-serif;
          display: flex;
          justify-content: space-around;
          align-items: flex-start;
        }
        
        .footer-section h3 {
          margin-bottom: 10px;
        }
        
        .footer-section ul,
        .footer-section .social-links {
          list-style: none;
          padding: 0;
        }
        
        .footer-section ul li,
        .footer-section .social-links a {
          margin-bottom: 5px;
        }
        
        .footer-section ul li a,
        .footer-section .social-links a {
          color: #fff;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-section ul li a:hover,
        .footer-section .social-links a:hover {
          color: #3498db;
        }
        
        .footer-logo {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        
        .footer-logo img {
          width: 50px; /* Adjust as necessary */
        }
        
        .footer-logo p {
          max-width: 250px; /* Adjust as necessary */
          margin-top: 10px;
        }
        
        .social-links {
          display: flex;
          flex-direction: column;
        }
        
        .social-links a {
          display: flex;
          align-items: center;
        }
        
        .social-links i {
          margin-right: 10px;
        }
        
        .footer-bottom {
          text-align: center;
          margin-top: 20px;
          border-top: 1px dashed #777;
          padding-top: 10px;
        }
        
      
        `}
      </style>
    </div>
    
  );
};

export default HomePage;
