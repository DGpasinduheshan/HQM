import React, { useState } from 'react'
import onlineDoctorImg from '../../assets/Online Doctor-cuate 1.png'

export default function Feedback({ feedbacks, setFeedbacks }) {
  const [formData, setFormData] = useState({
    patientName: '',
    tokenNumber: '',
    rating: '',
    experience: '',
    comments: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newFeedback = {
      id: Date.now(),
      ...formData,
      submittedAt: new Date().toLocaleString()
    }
    setFeedbacks([...feedbacks, newFeedback])
    alert('Thank you for your feedback!')
    setFormData({ patientName: '', tokenNumber: '', rating: '', experience: '', comments: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section className="ui-section">
      <div className="container">
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'start'}}>
        <div style={{position: 'sticky', top: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <img src={onlineDoctorImg} alt="Feedback" style={{width: '100%', maxWidth: '450px', height: 'auto'}} />
        </div>
        <div className="ui-card">
          <h2 className="ui-title">Patient Feedback</h2>
          <p className="ui-subtitle">Help us improve our services</p>
          
          <form onSubmit={handleSubmit} className="form">
            <div className="form-row">
              <div className="form-group">
                <label>Patient Name *</label>
                <input type="text" name="patientName" value={formData.patientName} onChange={handleChange} required placeholder="Michael Anderson" />
              </div>
              <div className="form-group">
                <label>Token Number *</label>
                <input type="text" name="tokenNumber" value={formData.tokenNumber} onChange={handleChange} required placeholder="e.g. 5" />
              </div>
            </div>

            <div className="form-group">
              <label>Overall Rating *</label>
              <div className="rating-group">
                {[1, 2, 3, 4, 5].map(star => (
                  <label key={star} className="rating-item">
                    <input
                      type="radio"
                      name="rating"
                      value={star}
                      checked={formData.rating === String(star)}
                      onChange={handleChange}
                      required
                    />
                    <span className="rating-star">{'⭐'.repeat(star)}</span>
                    <span className="rating-label">{star} star{star > 1 ? 's' : ''}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Your Experience *</label>
              <select name="experience" value={formData.experience} onChange={handleChange} required>
                <option value="">Select your experience</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="average">Average</option>
                <option value="poor">Poor</option>
                <option value="very-poor">Very Poor</option>
              </select>
            </div>

            <div className="form-group">
              <label>Additional Comments</label>
              <textarea 
                name="comments" 
                value={formData.comments} 
                onChange={handleChange} 
                placeholder="Share your detailed feedback (optional)"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-large">Submit Feedback</button>
          </form>

          {feedbacks.length > 0 && (
            <div className="feedback-list">
              <h3>Recent Feedback</h3>
              {feedbacks.slice(-5).reverse().map(feedback => (
                <div key={feedback.id} className="feedback-item">
                  <div className="feedback-header">
                    <strong>{feedback.patientName}</strong>
                    <span className="feedback-rating">{'⭐'.repeat(parseInt(feedback.rating))}</span>
                  </div>
                  <p className="feedback-experience">{feedback.experience}</p>
                  {feedback.comments && <p className="feedback-comments">"{feedback.comments}"</p>}
                  <p className="feedback-time">{feedback.submittedAt}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        </div>
      </div>
    </section>
  )
}
