import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">

        <div className="footer-section">
            <h3>MyLogo</h3>
            <p>Creating modern and responsive websites.</p>
        </div>

        <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>

        <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@example.com</p>
            <p>Phone: +91 98765 43210</p>
        </div>

    </div>

    <div className="footer-bottom">
        <p>&copy; 2026 MyLogo. All Rights Reserved.</p>
    </div>
</footer>
  )
}

export default Footer