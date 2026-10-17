import React, { useState, useEffect } from 'react';
import { X, LogIn, Lock, ShieldCheck, UserCheck, CheckCircle2, Phone, Mail, AlertTriangle, FileText, Send } from 'lucide-react';
import { COMPANY_INFO, LEGAL_DISCLOSURES } from '../data/websiteData';

export function Modals({ modalType, onClose }) {
  useEffect(() => {
    if (!modalType) return;
    
    document.body.style.overflow = 'hidden';
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalType, onClose]);

  if (!modalType) return null;

  const isConsultation = modalType === 'consultation' || modalType === 'contact-consult' || modalType === 'invest-now';

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div 
        className="modal-content" 
        role="dialog"
        aria-modal="true"
        aria-label="Modal dialog window"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
      >
        <button 
          onClick={onClose}
          style={{ 
            position: 'absolute', 
            top: '1.25rem', 
            right: '1.25rem', 
            background: 'rgba(255, 255, 255, 0.05)', 
            color: 'var(--color-text-secondary)', 
            borderRadius: '2px', 
            width: '36px', 
            height: '36px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            cursor: 'pointer',
            border: '1px solid var(--color-border)',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--color-gold)';
            e.currentTarget.style.borderColor = 'var(--color-gold-border)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--color-text-secondary)';
            e.currentTarget.style.borderColor = 'var(--color-border)';
          }}
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {/* 1. CLIENT LOGIN MODAL */}
        {modalType === 'client-login' && <ClientLoginModal onClose={onClose} />}

        {/* 2. PARTNER LOGIN MODAL */}
        {modalType === 'partner-login' && <PartnerLoginModal onClose={onClose} />}

        {/* 3. CONSULTATION / START INVESTING MODAL */}
        {isConsultation && <ConsultationModal onClose={onClose} />}

        {/* 4. PRIVACY POLICY MODAL */}
        {modalType === 'privacy' && <PrivacyModal />}

        {/* 5. DISCLAIMER MODAL */}
        {modalType === 'disclaimer' && <DisclaimerModal />}

        {/* 6. DISCLOSURE MODAL */}
        {modalType === 'disclosure' && <DisclosureModal />}

        {/* 7. AMFI RISK FACTOR */}
        {(modalType === 'risk-factor' || modalType === 'risk-factors') && <RiskFactorModal />}

        {/* 8. CODE OF CONDUCT */}
        {modalType === 'code-of-conduct' && <CodeOfConductModal />}
      </div>
    </div>
  );
}

function ClientLoginModal({ onClose }) {
  const [clientId, setClientId] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [msg, setMsg] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (clientId.trim().length < 5) {
      setError('Please enter a valid PAN or Client ID (at least 5 characters).');
      return;
    }
    if (password.length < 4) {
      setError('Password or OTP must be at least 4 characters.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setMsg(true);
    }, 600);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
        <div style={{ background: 'var(--color-gold-dim)', padding: '0.5rem', borderRadius: '2px', border: '1px solid var(--color-gold-border)' }}>
          <Lock size={18} color="var(--color-gold)" />
        </div>
        <h3 style={{ fontSize: '1.4rem', color: 'var(--color-text)', fontFamily: 'var(--font-serif)' }}>
          Client Portfolio Portal
        </h3>
      </div>
      <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
        Secure 256-bit encrypted access to your mutual fund folios, SIP mandates, and valuation reports.
      </p>

      {msg ? (
        <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
          <CheckCircle2 size={40} color="var(--color-gold)" style={{ margin: '0 auto 0.75rem auto' }} />
          <h4 style={{ color: 'var(--color-text)', marginBottom: '0.4rem', fontSize: '1.2rem', fontFamily: 'var(--font-serif)' }}>
            Connecting to Secure Custody Node...
          </h4>
          <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, maxWidth: '380px', margin: '0 auto 1.25rem auto' }}>
            If you need your portfolio activation credentials or a consolidated statement, our private advisory desk is at your service.
          </p>
          <div style={{ background: '#0a0d13', padding: '0.85rem', border: '1px solid var(--color-border)', borderRadius: '2px', fontSize: '0.82rem', color: 'var(--color-text-secondary)', marginBottom: '1.25rem', fontFamily: 'var(--font-mono)' }}>
            Direct Desk: <strong>{COMPANY_INFO.phone}</strong> • {COMPANY_INFO.email}
          </div>
          <button onClick={onClose} className="btn-outline" style={{ height: '42px', fontSize: '0.82rem' }}>
            Close Window
          </button>
        </div>
      ) : (
        <form onSubmit={handleLogin} noValidate>
          <div className="form-group">
            <label className="form-label">
              PAN Number / Client Login ID *
            </label>
            <input 
              type="text" 
              required 
              placeholder="e.g. ABCDE1234F"
              value={clientId}
              onChange={(e) => { setClientId(e.target.value.toUpperCase()); setError(''); }}
              className="form-input"
              style={{ textTransform: 'uppercase' }}
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Password / OTP *
            </label>
            <input 
              type="password" 
              required 
              placeholder="••••••••"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(''); }}
              className="form-input"
            />
          </div>

          {error && (
            <div style={{ marginBottom: '1rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', padding: '0.6rem 0.85rem', borderRadius: '2px', color: '#fca5a5', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AlertTriangle size={15} color="#ef4444" style={{ flexShrink: 0 }} />
              <span>{error}</span>
            </div>
          )}

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="btn-gold" 
            style={{ width: '100%', height: '44px', fontSize: '0.82rem', justifyContent: 'center' }}
          >
            {isSubmitting ? 'Authenticating Securely...' : 'Sign In to Portfolio →'}
          </button>

          <div style={{ textAlign: 'center', marginTop: '1.25rem', fontSize: '0.8rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
            Need portfolio activation? Contact desk: <strong>{COMPANY_INFO.phone}</strong>
          </div>
        </form>
      )}
    </div>
  );
}

function PartnerLoginModal({ onClose }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
        <div style={{ background: 'var(--color-gold-dim)', padding: '0.5rem', borderRadius: '2px', border: '1px solid var(--color-gold-border)' }}>
          <UserCheck size={18} color="var(--color-gold)" />
        </div>
        <h3 style={{ fontSize: '1.4rem', color: 'var(--color-text)', fontFamily: 'var(--font-serif)' }}>
          Partner & Associate Portal
        </h3>
      </div>
      <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
        Authorized institutional partner desk to manage client portfolios, brokerage reconciliation, and paperless onboarding.
      </p>

      <div style={{ background: '#0a0d13', padding: '1.25rem', borderRadius: '2px', border: '1px solid var(--color-border)', marginBottom: '1.5rem' }}>
        <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
          Associate Helpline:
        </div>
        <div style={{ color: 'var(--color-gold)', fontWeight: 600, fontSize: '1.1rem', fontFamily: 'var(--font-mono)' }}>
          {COMPANY_INFO.phone}
        </div>
        <div style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', marginTop: '3px' }}>
          {COMPANY_INFO.email}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <button 
          onClick={() => { alert('Redirecting to Assure Partner Back-office...'); onClose(); }}
          className="btn-gold" 
          style={{ flex: 1, height: '42px', fontSize: '0.82rem' }}
        >
          Launch Partner Back-Office
        </button>
        <button 
          onClick={onClose}
          className="btn-outline" 
          style={{ flex: 1, height: '42px', fontSize: '0.82rem' }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

function ConsultationModal({ onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [plan, setPlan] = useState('Mutual Funds & Wealth Strategy');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (name.trim().length < 2) {
      setError('Please provide your full name.');
      return;
    }
    const cleanPhone = phone.replace(/[\s-]/g, '');
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setError('Please provide a valid 10-digit Indian phone number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
    }, 700);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
        <div style={{ background: 'var(--color-gold-dim)', padding: '0.5rem', borderRadius: '2px', border: '1px solid var(--color-gold-border)' }}>
          <ShieldCheck size={18} color="var(--color-gold)" />
        </div>
        <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text)', fontFamily: 'var(--font-serif)' }}>
          Private Wealth Consultation
        </h3>
      </div>
      <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
        Schedule a confidential consultation with our AMFI-registered advisory team (ARN-182137).
      </p>

      {success ? (
        <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
          <CheckCircle2 size={44} color="var(--color-gold)" style={{ margin: '0 auto 0.75rem auto' }} />
          <h4 style={{ color: 'var(--color-text)', marginBottom: '0.4rem', fontSize: '1.3rem', fontFamily: 'var(--font-serif)' }}>
            Consultation Request Received
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, maxWidth: '420px', margin: '0 auto 1.5rem auto' }}>
            Thank you, <strong style={{ color: 'var(--color-text)' }}>{name}</strong>. An Assure Securities wealth advisor will contact you at <strong style={{ color: 'var(--color-gold)' }}>{phone}</strong> within 1 business day.
          </p>
          <div style={{ background: '#0a0d13', padding: '0.85rem', border: '1px solid var(--color-border)', borderRadius: '2px', fontSize: '0.82rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
            Office: 2/163 Vishal Khand, Gomtinagar, Lucknow • ARN-182137
          </div>
          <button onClick={onClose} className="btn-gold" style={{ height: '42px', fontSize: '0.82rem' }}>
            Done
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label className="form-label">Full Name *</label>
            <input 
              type="text" 
              required 
              placeholder="e.g. Ramesh Chandra Verma"
              value={name}
              onChange={(e) => { setName(e.target.value); setError(''); }}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Phone Number *</label>
            <input 
              type="tel" 
              required 
              placeholder="e.g. 9876543210"
              value={phone}
              onChange={(e) => { setPhone(e.target.value); setError(''); }}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Area of Advisory Interest</label>
            <select 
              value={plan} 
              onChange={(e) => setPlan(e.target.value)}
              className="form-select"
            >
              <option value="Mutual Funds & Wealth Strategy">Mutual Funds & Wealth Strategy</option>
              <option value="Systematic Investment Plan (SIP)">Systematic Investment Plan (SIP)</option>
              <option value="Corporate Fixed Deposits & Bonds">Corporate Fixed Deposits & Bonds</option>
              <option value="Tax Saving Strategies (ELSS / 80C)">Tax Saving Strategies (ELSS / 80C)</option>
              <option value="PMS & AIF for HNIs">PMS & AIF for HNIs (₹50L+)</option>
              <option value="Retirement & Estate Succession">Retirement & Estate Succession</option>
            </select>
          </div>

          {error && (
            <div style={{ marginBottom: '1rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', padding: '0.6rem 0.85rem', borderRadius: '2px', color: '#fca5a5', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AlertTriangle size={15} color="#ef4444" style={{ flexShrink: 0 }} />
              <span>{error}</span>
            </div>
          )}

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="btn-gold" 
            style={{ width: '100%', height: '46px', fontSize: '0.84rem', justifyContent: 'center' }}
          >
            {isSubmitting ? 'Submitting Request...' : 'Confirm Advisory Appointment →'}
          </button>
        </form>
      )}
    </div>
  );
}

function PrivacyModal() {
  return (
    <div>
      <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text)', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>
        Privacy Policy & Regulatory Compliance
      </h3>
      <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, maxHeight: '60vh', overflowY: 'auto', paddingRight: '0.5rem' }}>
        <p style={{ marginBottom: '1rem' }}>{LEGAL_DISCLOSURES.privacySummary}</p>
        <p style={{ marginBottom: '1rem' }}>{LEGAL_DISCLOSURES.arnNotice}</p>
        <p>Investor records and personal identifiable information are safeguarded following SEBI IT Governance frameworks and strict confidentiality mandates.</p>
      </div>
    </div>
  );
}

function DisclaimerModal() {
  return (
    <div>
      <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text)', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>
        Website Disclaimer & Terms of Usage
      </h3>
      <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, maxHeight: '60vh', overflowY: 'auto', paddingRight: '0.5rem' }}>
        <p style={{ marginBottom: '1rem' }}>{LEGAL_DISCLOSURES.disclaimerText}</p>
        <p>{LEGAL_DISCLOSURES.riskFactor}</p>
      </div>
    </div>
  );
}

function DisclosureModal() {
  return (
    <div>
      <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text)', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>
        Statutory Commission Disclosure
      </h3>
      <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, maxHeight: '60vh', overflowY: 'auto', paddingRight: '0.5rem' }}>
        <p style={{ marginBottom: '1rem' }}>{LEGAL_DISCLOSURES.commissionDisclosure}</p>
        <p>{LEGAL_DISCLOSURES.arnNotice}</p>
      </div>
    </div>
  );
}

function RiskFactorModal() {
  return (
    <div>
      <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text)', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>
        SEBI Mandatory Risk Factors
      </h3>
      <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, maxHeight: '60vh', overflowY: 'auto', paddingRight: '0.5rem' }}>
        <p style={{ marginBottom: '1rem' }}>{LEGAL_DISCLOSURES.riskFactor}</p>
        <p>{LEGAL_DISCLOSURES.arnNotice}</p>
      </div>
    </div>
  );
}

function CodeOfConductModal() {
  return (
    <div>
      <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text)', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>
        AMFI Code of Conduct
      </h3>
      <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, maxHeight: '60vh', overflowY: 'auto', paddingRight: '0.5rem' }}>
        <p style={{ marginBottom: '1rem' }}>
          Assure Securities adheres strictly to the AMFI Code of Conduct for Mutual Fund Distributors. We conduct our business with integrity, fairness, diligence, and full transparency.
        </p>
        <p>{LEGAL_DISCLOSURES.arnNotice}</p>
      </div>
    </div>
  );
}

export default Modals;
