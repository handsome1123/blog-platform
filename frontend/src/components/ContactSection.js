import React from 'react';

const ContactSection = () => (
  <section class="contact-section">
  <div class="contact-container">
    <h2 class="section-title">Contact Us</h2>
    <p class="section-description">Any questions or remarks? Just write us a message!</p>

    <div class="contact-content">
      <div class="contact-info">
        <h3 class="info-title">Contact Information</h3>
        <p class="info-description">Fill up the form and our Team will get back to you within 24 hours</p>
        <div class="info-details">
          <div class="info-item">
            <svg class="info-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span>+0123 4567 3890</span>
          </div>
          <div class="info-item">
            <svg class="info-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span>nello@followus.com</span>
          </div>
          <div class="info-item">
            <svg class="info-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
            </svg>
            <span>102 Street 2714 Delhi</span>
          </div>
        </div>
        <div class="social-icons">
          <a href="#" class="social-icon-link">
            <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="#" class="social-icon-link">
            <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="#" class="social-icon-link">
            <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

      <div class="contact-form">
        <form class="form-grid">
          <div class="form-group">
            <label for="first-name" class="form-label">First Name</label>
            <input type="text" id="first-name" name="first-name" class="form-input" />
          </div>
          <div class="form-group">
            <label for="last-name" class="form-label">Last Name</label>
            <input type="text" id="last-name" name="last-name" value="John Devis" class="form-input" />
          </div>

          <div class="form-group">
            <label for="email" class="form-label">Mail</label>
            <input type="email" id="email" name="email" value="Johndevis.work@gmail.com" class="form-input" />
          </div>
          <div class="form-group">
            <label for="phone" class="form-label">Phone</label>
            <input type="tel" id="phone" name="phone" value="+91 453 664 32 78" class="form-input" />
          </div>

          <div class="form-group-full">
            <p class="form-label">Which of the website you need?</p>
            <div class="checkbox-group">
              <div class="checkbox-item">
                <input type="checkbox" id="web-design" name="website-type" class="form-checkbox" />
                <label for="web-design" class="checkbox-label">Web Design</label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="web-development" name="website-type" checked class="form-checkbox" />
                <label for="web-development" class="checkbox-label">Web Development</label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="logo-design" name="website-type" class="form-checkbox" />
                <label for="logo-design" class="checkbox-label">Logo Design</label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="other" name="website-type" class="form-checkbox" />
                <label for="other" class="checkbox-label">Other</label>
              </div>
            </div>
          </div>

          <div class="form-group-full">
            <label for="message" class="form-label">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Write your message..." class="form-textarea"></textarea>
          </div>

          <div class="form-group-full form-actions">
            <button type="submit" class="send-message-button">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
);

export default ContactSection;