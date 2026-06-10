export default function LeadForm({ data, setData, onSubmit, onClose, loading, errors }) {
  return (
    <div className="tvh-lead">
      <h4>Submit your details so we can review your profile quickly</h4>

      <input
        placeholder="Name *"
        value={data.name}
        onChange={e => setData(d => ({ ...d, name: e.target.value }))}
        aria-label="Name"
      />
      {errors?.name && <span style={{ color: 'var(--red)', fontSize: 11 }}>{errors.name}</span>}

      <input
        type="tel"
        placeholder="Phone Number *"
        value={data.phone}
        onChange={e => setData(d => ({ ...d, phone: e.target.value }))}
        aria-label="Phone number"
      />
      {errors?.phone && <span style={{ color: 'var(--red)', fontSize: 11 }}>{errors.phone}</span>}

      <input
        type="email"
        placeholder="Email Address *"
        value={data.email}
        onChange={e => setData(d => ({ ...d, email: e.target.value }))}
        aria-label="Email address"
      />
      {errors?.email && <span style={{ color: 'var(--red)', fontSize: 11 }}>{errors.email}</span>}

      <textarea
        placeholder="Bio"
        value={data.bio}
        onChange={e => setData(d => ({ ...d, bio: e.target.value }))}
        maxLength={500}
        rows={3}
        style={{ resize: 'vertical', minHeight: 60 }}
        aria-label="Bio"
      />
      {errors?.bio && <span style={{ color: 'var(--red)', fontSize: 11 }}>{errors.bio}</span>}

      <textarea
        placeholder="Address"
        value={data.address}
        onChange={e => setData(d => ({ ...d, address: e.target.value }))}
        maxLength={500}
        rows={3}
        style={{ resize: 'vertical', minHeight: 60 }}
        aria-label="Address"
      />
      {errors?.address && <span style={{ color: 'var(--red)', fontSize: 11 }}>{errors.address}</span>}

      <input
        placeholder="Instagram"
        value={data.instagram}
        onChange={e => setData(d => ({ ...d, instagram: e.target.value }))}
        aria-label="Instagram"
      />
      {errors?.instagram && <span style={{ color: 'var(--red)', fontSize: 11 }}>{errors.instagram}</span>}

      <input
        placeholder="Google Business Profile"
        value={data.googleBusinessProfile}
        onChange={e => setData(d => ({ ...d, googleBusinessProfile: e.target.value }))}
        aria-label="Google Business Profile"
      />
      {errors?.googleBusinessProfile && (
        <span style={{ color: 'var(--red)', fontSize: 11 }}>{errors.googleBusinessProfile}</span>
      )}

      <input
        placeholder="Facebook"
        value={data.facebook}
        onChange={e => setData(d => ({ ...d, facebook: e.target.value }))}
        aria-label="Facebook"
      />
      {errors?.facebook && <span style={{ color: 'var(--red)', fontSize: 11 }}>{errors.facebook}</span>}

      <input
        placeholder="LinkedIn"
        value={data.linkedin}
        onChange={e => setData(d => ({ ...d, linkedin: e.target.value }))}
        aria-label="LinkedIn"
      />
      {errors?.linkedin && <span style={{ color: 'var(--red)', fontSize: 11 }}>{errors.linkedin}</span>}

      <select
        value={data.websiteType}
        onChange={e => setData(d => ({ ...d, websiteType: e.target.value }))}
        aria-label="Personal or company website"
      >
        <option value="">Personal or Company Website</option>
        <option value="personal">Personal Website</option>
        <option value="company">Company Website</option>
      </select>
      {errors?.websiteType && <span style={{ color: 'var(--red)', fontSize: 11 }}>{errors.websiteType}</span>}

      <input
        placeholder="Company Website Name"
        value={data.websiteName}
        onChange={e => setData(d => ({ ...d, websiteName: e.target.value }))}
        aria-label="Company website name"
      />
      {errors?.websiteName && <span style={{ color: 'var(--red)', fontSize: 11 }}>{errors.websiteName}</span>}

      <textarea
        placeholder="Additional notes"
        value={data.requirement}
        onChange={e => setData(d => ({ ...d, requirement: e.target.value }))}
        maxLength={1000}
        rows={3}
        style={{ resize: 'vertical', minHeight: 60 }}
        aria-label="Additional notes"
      />
      {errors?.requirement && <span style={{ color: 'var(--red)', fontSize: 11 }}>{errors.requirement}</span>}

      {errors?._network && <span style={{ color: 'var(--red)', fontSize: 11 }}>{errors._network}</span>}

      <div className="tvh-lead-btns">
        <button className="tvh-lead-go" onClick={onSubmit} disabled={loading} aria-label="Submit lead form">
          {loading ? 'Submitting...' : 'Submit Data'}
        </button>
        <button className="tvh-lead-skip" onClick={onClose} aria-label="Skip lead form">Skip</button>
      </div>
    </div>
  )
}
