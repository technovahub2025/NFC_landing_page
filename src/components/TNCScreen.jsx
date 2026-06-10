import React from 'react'

export default function TNCScreen({ onAccept }) {
  return (
    <div className="tvh-tnc">
      <div className="tvh-tnc-logo">⚡</div>
      <h3>Before we chat</h3>
      <p>
        This NFC Digital Business Card Assistant uses AI to answer your questions about profile creation,
        NFC setup, QR sharing, contact saving, and profile updates.
        By continuing, you agree to our{' '}
        <a href="https://technovahub.in/privacy" target="_blank" rel="noopener">Privacy Policy</a>.
        Your conversations may be used to improve the service.
      </p>
      <div className="tvh-tnc-btns">
        <button className="tvh-tnc-yes" onClick={onAccept}>Accept &amp; Chat →</button>
      </div>
    </div>
  )
}
