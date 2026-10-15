import React, { useState, useEffect } from 'react';
import { X, LogIn, Lock, ShieldCheck, UserCheck, CheckCircle2, Phone, Mail, AlertTriangle, FileText, Send } from 'lucide-react';
import { COMPANY_INFO, LEGAL_DISCLOSURES } from '../data/websiteData';

export function Modals({ modalType, onClose }) {
  // Lock body scroll and listen for Escape key when modal is open
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

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div 
        className="modal-content" 
        role="dialog"
        aria-modal="true"
        aria-label="Modal dialog window"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '2rem' }}
      >
        <button 
          onClick={onClose}
          style={{ 
            position: 'absolute', 
            top: '1rem', 
            right: '1rem', 
            background: '#f1f5f9', 
            color: '#475569', 
            borderRadius: '50%', 
            minWidth: '44px', 
            minHeight: '44px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            cursor: 'pointer',
            border: 'none',
            touchAction: 'manipulation'
          }}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {/* 1. CLIENT LOGIN MODAL */}
        {modalType === 'client-login' && <ClientLoginModal onClose={onClose} />}

        {/* 2. PARTNER LOGIN MODAL */}
        {modalType === 'partner-login' && <PartnerLoginModal onClose={onClose} />}

        {/* 3. CONSULTATION MODAL */}
        {modalType === 'consultation' && <ConsultationModal onClose={onClose} />}

        {/* 4. PRIVACY POLICY MODAL */}
        {modalType === 'privacy' && <PrivacyModal />}

        {/* 5. DISCLAIMER MODAL */}
        {modalType === 'disclaimer' && <DisclaimerModal />}

        {/* 6. DISCLOSURE MODAL */}
        {modalType === 'disclosure' && <DisclosureModal />}

        {/* 7. AMFI RISK FACTOR */}
        {modalType === 'risk-factor' && <RiskFactorModal />}

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
        <div style={{ background: '#eff6ff', padding: '0.5rem', borderRadius: '10px' }}>
          <LogIn size={22} color="#2563eb" />
        </div>
        <h3 style={{ fontSize: '1.4rem', color: '#0f172a', fontWeight: 800 }}>Client Portfolio Login</h3>
      </div>
      <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '1.5rem' }}>
        Secure 256-bit encrypted access to your mutual funds, SIP schedules, capital gains, and valuation statements.
      </p>

      {msg ? (
        <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
          <CheckCircle2 size={42} color="#10b981" style={{ margin: '0 auto 0.75rem auto' }} />
          <h4 style={{ color: '#0f172a', marginBottom: '0.4rem', fontSize: '1.2rem', fontWeight: 700 }}>Connecting to Secure Server...</h4>
          <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, maxWidth: '380px', margin: '0 auto 1.25rem auto' }}>
            If you need your login credentials or portfolio activation, our relationship team is ready to assist you.
          </p>
          <div style={{ background: 'var(--color-bg)', padding: '0.85rem', borderRadius: '10px', fontSize: '0.82rem', color: 'var(--color-text-secondary)', marginBottom: '1.25rem' }}>
            Direct Desk: <strong>{COMPANY_INFO.phone}</strong> • {COMPANY_INFO.email}
          </div>
          <button onClick={onClose} className="btn-outline-navy" style={{ height: '42px', fontSize: '0.85rem' }}>
            Close Window
          </button>
        </div>
      ) : (
        <form onSubmit={handleLogin} noValidate>
          <div style={{ marginBottom: '1.2rem' }}>
            <label className="fintech-label">
              PAN Number / Client Login ID *
            </label>
            <input 
              type="text" 
              required 
              placeholder="e.g. ABCDE1234F"
              value={clientId}
              onChange={(e) => { setClientId(e.target.value.toUpperCase()); setError(''); }}
              className={`fintech-input ${error && clientId.trim().length < 5 ? 'input-error' : ''}`}
              style={{ textTransform: 'uppercase' }}
            />
            <span className="form-helper-text">Your 10-digit PAN or folio registration number.</span>
          </div>

          <div style={{ marginBottom: '1.2rem' }}>
            <label className="fintech-label">
              Password / OTP *
            </label>
            <input 
              type="password" 
              required 
              placeholder="••••••••"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(''); }}
              className={`fintech-input ${error && password.length < 4 ? 'input-error' : ''}`}
            />
          </div>

          {error && (
            <div className="form-error-msg" style={{ marginBottom: '1rem', background: '#fef2f2', padding: '0.6rem 0.85rem', borderRadius: '8px' }}>
              <AlertTriangle size={15} color="#dc2626" style={{ flexShrink: 0 }} />
              <span>{error}</span>
            </div>
          )}

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="btn-primary-emerald" 
            style={{ width: '100%', justifyContent: 'center', opacity: isSubmitting ? 0.75 : 1 }}
          >
            {isSubmitting ? (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="pulse-dot-green" /> Authenticating Securely...
              </span>
            ) : (
              <span>Sign In to Portfolio →</span>
            )}
          </button>

          <div style={{ textAlign: 'center', marginTop: '1.25rem', fontSize: '0.82rem', color: '#64748b' }}>
            Forgot password or need activation? <br />
            Call Assure Desk: <strong>{COMPANY_INFO.phone}</strong>
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
        <div style={{ background: '#f1f5f9', padding: '0.5rem', borderRadius: '10px' }}>
          <UserCheck size={22} color="#0f172a" />
        </div>
        <h3 style={{ fontSize: '1.4rem', color: '#0f172a', fontWeight: 800 }}>Partner & Sub-Broker Login</h3>
      </div>
      <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '1.5rem' }}>
        Authorized associate back-office portal to track your client folios, brokerage payouts, and digital onboarding.
      </p>

      <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '14px', border: '1px solid #e2e8f0', marginBottom: '1.5rem' }}>
        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>Associate Support Helpline:</div>
        <div style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.05rem' }}>{COMPANY_INFO.phone}</div>
        <div style={{ color: '#64748b', fontSize: '0.82rem', marginTop: '2px' }}>care@assuresecurities.in</div>
      </div>

      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <button 
          onClick={() => { alert('Redirecting to Assure Sub-broker CRM...'); onClose(); }}
          className="btn-primary-emerald" 
          style={{ flex: 1, padding: '0.75rem', justifyContent: 'center' }}
        >
          <span>Launch Partner CRM</span>
        </button>
        <button 
          onClick={onClose}
          className="btn-outline-navy" 
          style={{ flex: 1, padding: '0.75rem', justifyContent: 'center' }}
        >
          <span>Close</span>
        </button>
      </div>
    </div>
  );
}

function ConsultationModal({ onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [plan, setPlan] = useState('SIP & Wealth Building');
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
      setError('Please provide a valid 10-digit Indian mobile number (e.g. 9876543210).');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
    }, 600);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
        <div style={{ background: '#ecfdf5', padding: '0.5rem', borderRadius: '10px' }}>
          <ShieldCheck size={22} color="#10b981" />
        </div>
        <h3 style={{ fontSize: '1.4rem', color: '#0f172a', fontWeight: 800 }}>Book Financial Consultation</h3>
      </div>
      <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '1.5rem' }}>
        Speak with an AMFI registered wealth expert from Assure Securities (ARN-182137). Zero fee, zero obligation.
      </p>

      {success ? (
        <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(22, 185, 129, 0.15)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
            <CheckCircle2 size={36} />
          </div>
          <h4 style={{ fontSize: '1.35rem', color: '#0f172a', fontWeight: 700, marginBottom: '0.4rem' }}>Consultation Confirmed!</h4>
          <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: '380px', margin: '0 auto 1.5rem auto' }}>
            Thank you, <strong>{name}</strong>. Our Lucknow advisory desk will call you at <strong>{phone}</strong> within 2 business hours to discuss your <strong>{plan}</strong> goals.
          </p>
          <button onClick={onClose} className="btn-primary-emerald" style={{ padding: '0.65rem 2rem', height: '44px' }}>
            Done
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div style={{ marginBottom: '1.2rem' }}>
            <label className="fintech-label">Your Name *</label>
            <input 
              type="text" 
              required 
              placeholder="e.g. Ramesh Chandra"
              value={name}
              onChange={(e) => { setName(e.target.value); setError(''); }}
              className={`fintech-input ${error && name.trim().length < 2 ? 'input-error' : ''}`}
            />
          </div>

          <div style={{ marginBottom: '1.2rem' }}>
            <label className="fintech-label">Mobile Number *</label>
            <input 
              type="tel" 
              required 
              placeholder="10-digit Mobile Number"
              value={phone}
              onChange={(e) => { setPhone(e.target.value); setError(''); }}
              className={`fintech-input ${error && !/^[6-9]\d{9}$/.test(phone.replace(/[\s-]/g, '')) ? 'input-error' : ''}`}
            />
            <span className="form-helper-text">We respect your privacy. No promotional spam.</span>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label className="fintech-label">Primary Financial Goal</label>
            <select 
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
              className="fintech-input"
              style={{ cursor: 'pointer' }}
            >
              <option value="SIP & Wealth Building">SIP & Wealth Building</option>
              <option value="Retirement Corpus Planning">Retirement Corpus Planning</option>
              <option value="Child Education Fund">Child Education Fund</option>
              <option value="Corporate Fixed Deposits (AAA)">Corporate Fixed Deposits (AAA)</option>
              <option value="Tax Saving ELSS & 80C">Tax Saving ELSS & 80C</option>
              <option value="PMS / AIF Portfolio Review">PMS / AIF Portfolio Review</option>
            </select>
          </div>

          {error && (
            <div className="form-error-msg" style={{ marginBottom: '1.2rem', background: '#fef2f2', padding: '0.65rem 0.85rem', borderRadius: '8px' }}>
              <AlertTriangle size={15} color="#dc2626" style={{ flexShrink: 0 }} />
              <span>{error}</span>
            </div>
          )}

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="btn-primary-emerald" 
            style={{ width: '100%', justifyContent: 'center', opacity: isSubmitting ? 0.75 : 1 }}
          >
            {isSubmitting ? (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="pulse-dot-green" /> Scheduling Appointment...
              </span>
            ) : (
              <span>Confirm Advisory Appointment →</span>
            )}
          </button>

          <p style={{ textAlign: 'center', fontSize: '0.74rem', color: '#94a3b8', marginTop: '0.85rem', margin: '0.85rem 0 0 0' }}>
            AMFI Registered ARN-182137 • Confidential & Unbiased
          </p>
        </form>
      )}
    </div>
  );
}

function PrivacyModal() {
  return (
    <div>
      <h3 style={{ fontSize: '1.4rem', color: '#0f172a', fontWeight: 800, marginBottom: '0.75rem' }}>Privacy Policy</h3>
      <div style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, maxHeight: '60vh', overflowY: 'auto', paddingRight: '0.5rem' }}>
        <p style={{ marginBottom: '0.75rem' }}>
          This privacy policy sets out how Assure Securities uses and protects any information that you share when you use this website. Assure Securities is committed to ensuring that your privacy is protected at all times.
        </p>
        <p style={{ marginBottom: '0.75rem' }}>
          <strong>What we collect:</strong> Name, contact details, date of birth, PAN, Aadhaar number, bank details, and demographic info necessary to complete statutory KYC registration mandated by SEBI and AMFI.
        </p>
        <p style={{ marginBottom: '0.75rem' }}>
          <strong>What we do with the information:</strong> Conduct Know-Your-Customer verification, perform statutory compliance checks, manage investor folios, and communicate periodic portfolio valuation updates.
        </p>
        <p style={{ marginBottom: '0.75rem' }}>
          <strong>Confidentiality Guarantee:</strong> We do not sell, rent, or lease your personal information to third parties. All transmissions are safeguarded with industry-standard physical and electronic controls.
        </p>
      </div>
    </div>
  );
}

function DisclaimerModal() {
  return (
    <div>
      <h3 style={{ fontSize: '1.4rem', color: '#0f172a', fontWeight: 800, marginBottom: '0.75rem' }}>Disclaimer & Terms of Use</h3>
      <div style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, maxHeight: '60vh', overflowY: 'auto', paddingRight: '0.5rem' }}>
        <p style={{ marginBottom: '0.75rem' }}>
          {LEGAL_DISCLOSURES.disclaimerText}
        </p>
        <p style={{ marginBottom: '0.75rem' }}>
          Investments or trades discussed on this website and related distribution services may not be suitable for all investors. Investors are advised to evaluate their own risk tolerance and read scheme information documents before making financial decisions.
        </p>
      </div>
    </div>
  );
}

function DisclosureModal() {
  return (
    <div>
      <h3 style={{ fontSize: '1.4rem', color: '#0f172a', fontWeight: 800, marginBottom: '0.75rem' }}>Commission & Regulatory Disclosure</h3>
      <div style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, maxHeight: '60vh', overflowY: 'auto', paddingRight: '0.5rem' }}>
        <p style={{ marginBottom: '0.75rem' }}>
          {LEGAL_DISCLOSURES.commissionDisclosure}
        </p>
        <p style={{ marginBottom: '0.75rem' }}>
          In accordance with SEBI circular SEBI/IMD/CIR No.4/168230/09, Assure Securities discloses all commission earnings received from various Asset Management Companies (AMCs) to clients at the time of investment.
        </p>
      </div>
    </div>
  );
}

function RiskFactorModal() {
  return (
    <div>
      <h3 style={{ fontSize: '1.4rem', color: '#0f172a', fontWeight: 800, marginBottom: '0.75rem' }}>AMFI Risk Factor Notice</h3>
      <div style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, maxHeight: '60vh', overflowY: 'auto', paddingRight: '0.5rem' }}>
        <div style={{ background: '#fffbeb', border: '1px solid #fef3c7', padding: '1rem', borderRadius: '12px', marginBottom: '1rem', color: '#92400e', fontWeight: 600 }}>
          Mutual fund investments are subject to market risks. Read all scheme related documents carefully.
        </div>
        <p style={{ marginBottom: '0.75rem' }}>
          {LEGAL_DISCLOSURES.riskFactor}
        </p>
      </div>
    </div>
  );
}

function CodeOfConductModal() {
  return (
    <div>
      <h3 style={{ fontSize: '1.4rem', color: '#0f172a', fontWeight: 800, marginBottom: '0.75rem' }}>AMFI Code of Conduct</h3>
      <div style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, maxHeight: '60vh', overflowY: 'auto', paddingRight: '0.5rem' }}>
        <p style={{ marginBottom: '0.75rem' }}>
          Assure Securities strictly adheres to the Code of Conduct prescribed by the Association of Mutual Funds in India (AMFI) for registered distributors (ARN-182137):
        </p>
        <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>Maintain high standards of integrity and fairness in all dealings with clients.</li>
          <li>Ensure adequate disclosure of material facts and risk factors to prospective investors.</li>
          <li>Never induce investors through rebates, gifts, or unregulated incentives.</li>
          <li>Maintain strict confidentiality of client personal information.</li>
          <li>Provide prompt assistance for service requests, nomination, and redemption.</li>
        </ul>
      </div>
    </div>
  );
}
