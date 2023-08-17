import React from "react";
import "./HomePage.css";
import phone from "../../Assets/phone.svg";
import HomePageHeader from "../../Components/HomePageHeader/HomePageHeader";
import FeatureCard from "../../Components/FeatureCard/FeatureCard";
import scan from "../../Assets/qr.png";
import menu from "../../Assets/order-food.png";
import twitter from "../../Assets/Twitter.svg";
import facebook from "../../Assets/facebook.svg";
import instagram from "../../Assets/Instagram.svg";
import linkdin from "../../Assets/linkdinIcon.svg";
import theme from "../../Assets/theme.png";
import { useForm } from "react-hook-form";

function HomePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div className="homePage">
      <HomePageHeader />
      <header>
        <div className="bannerWrapper">
          <div className="banner-left">
            <div className="banner-text">
              <div className="tagline">
                <div className="tagline-big">
                  Digitalize Your Menu With
                  <br />
                  Menu Plus
                </div>
                <div className="tagline-small">
                  Get your digital menu in 24hr
                </div>
              </div>
            </div>
          </div>
          <div className="banner-right">
            <img className="phone banner-img" src={phone} alt="" />
          </div>
        </div>
        <div className="mobilePhone">
          <img className="phone banner-mobile" src={phone} alt="" />
        </div>
      </header>

      {/* Features */}
      <br />
      <br />

      <div className="features-header">Features</div>
      <div id="features" className="features">
        <FeatureCard
          feature={"Scan QR Codes"}
          description={
            "Instantly access menus by scanning QR codes at restaurants."
          }
          image={scan}
        />
        <FeatureCard
          feature={"Digital Menus"}
          description={"Browse through digital menus with vibrant images and"}
          image={menu}
        />
        <FeatureCard
          feature={"Customizable Themes"}
          description={"Personalize your app experience with various themes."}
          image={theme}
        />
      </div>

      {/* Pricing */}
      <div className="pricing">
        <div className="pricing-header">Pricing</div>
        <div className="pricing-plans">
          <div className="pricing-plan monthly">
            Monthly
            <br />
            <div className="price">300/month</div>
            <div className="services">
              <li>Digital menu</li>
              <li>3 Qr code sets</li>
              <li>live customer support</li>
            </div>
            <div className="order">
              order
            </div>
          </div>
          <div className="pricing-plan yearly">
            yearly 17% discount
            <br />
            <div className="price">3000/year</div>
            <div className="services">
              <li>Digital menu</li>
              <li>3 Qr code sets</li>
              <li>live customer support</li>
            </div>
          </div>
          <div className="pricing-plan halfyear">
            Half Yearly
            <br />
            <div className="price">1700/6 monthes</div>
            <div className="services">
              <li>Digital menu</li>
              <li>3 Qr code sets</li>
              <li>live customer support</li>
            </div>
          </div>
        </div>
        {/* How It Works */}
        <div className="howItWorks">
          <div className="howItWorks-header">How It Works</div>
          <div className="howItWorks-steps">
            {/* step 1 */}
            <div className="steps">
              <div className="howItWorks-step">
                <div className="step-number">1</div>
                <div className="step-text">
                  <div className="step-text-header">
                    Get your account details
                  </div>
                  <div className="step-text-body">
                    Get your account details by contacting menu plus
                  </div>
                </div>
              </div>

              {/* step 2 */}

              <div className="howItWorks-step">
                <div className="step-number">2</div>
                <div className="step-text">
                  <div className="step-text-header">Create Menu</div>
                  <div className="step-text-body">
                    Create your menu by adding items and images.
                  </div>
                </div>
              </div>
            </div>
            {/* step 3 */}

            <div className="steps">
              <div className="howItWorks-step">
                <div className="step-number">3</div>
                <div className="step-text">
                  <div className="step-text-header">Generate QR Code</div>
                  <div className="step-text-body">
                    Order QR code for your menu.
                  </div>
                </div>
              </div>

              {/* step 4 */}
              <div className="howItWorks-step">
                <div className="step-number">4</div>
                <div className="step-text">
                  <div className="step-text-header">Scan QR Code</div>
                  <div className="step-text-body">
                    Scan QR code at your restaurant to access menu.
                  </div>
                </div>
              </div>
              {/* steps end */}
            </div>
          </div>
        </div>
      </div>
      {/* contact */}
      <div className="contact-header">Contact</div>
      <div className="contact">
        <div className="contact-text">
          <div className="message">
            We have answers to
            <br />
            your questions
          </div>
          <br />
          <div>
            <strong>Address: </strong>
            <span>Addis Ababa , Ethiopia</span>
          </div>
          <div>
            <strong>Phone: </strong>
            <span>+251 985 21 6795</span>
          </div>
          <br />
          <div className="contact-icons">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={linkdin} alt="" />
          </div>
        </div>
        <div className="contact-form">
          <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <br />
            <h1>Your Message</h1>
            <input
              className="contact-formInput"
              type="text"
              placeholder="name"
              {...register("name", { required: true })} // Use "email" instead of "username" as it's the default field for Supabase authentication
            />
            <input
              className="contact-formInput"
              type="email"
              placeholder="email"
              {...register("email", { required: true })}
            />
            <textarea
              className="contact-formInput"
              type="text"
              placeholder="Message"
              {...register("message", { required: true })}
            />

            <input className="contact-formInput-btn" type="submit" />
          </form>
        </div>
      </div>
      {/*  */}
      {/* footer */}
      <div className="footer">
        <div className="footer-text">
          <div className="footer-text-header">Menu Plus</div>
          <div className="footer-text-copy">
            © 2023 Menu Plus. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
