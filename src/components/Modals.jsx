import React, { useState } from 'react';
import { X, LogIn, Lock, ShieldCheck, UserCheck, CheckCircle2, Phone, Mail, AlertTriangle, FileText, Send } from 'lucide-react';
import { COMPANY_INFO, LEGAL_DISCLOSURES } from '../data/websiteData';

export function Modals({ modalType, onClose }) {
  if (!modalType) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '2rem' }}
      >
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: '#f1f5f9', color: '#475569', borderRadius: '50%', padding: '0.4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          aria-label="Close dialog"
        >
          <X size={18} />
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
  const [msg, setMsg] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setMsg(true);
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
          <h4 style={{ color: '#0f172a', marginBottom: '0.4rem' }}>Connecting to Secure Server...</h4>
          <p style={{ fontSize: '0.85rem', color: '#475569' }}>
            If you do not have your portal credentials, please contact your relationship manager at <strong>{COMPANY_INFO.phone}</strong> or <strong>{COMPANY_INFO.email}</strong>.
          </p>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '0.35rem' }}>
              PAN Number / Client Login ID
            </label>
            <input 
              type="text" 
              required 
              placeholder="e.g. ABCDE1234F"
              value={clientId}
              onChange={(e) => setClientId(e.target.value.toUpperCase())}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '10px', border: '1px solid #cbd5e1' }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '0.35rem' }}>
              Password / OTP
            </label>
            <input 
              type="password" 
              required 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '10px', border: '1px solid #cbd5e1' }}
            />
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.85rem', justifyContent: 'center' }}>
            <span>Sign In to Portfolio</span>
          </button>

          <div style={{ textAlign: 'center', marginTop: '1.25rem', fontSize: '0.82rem', color: '#64748b' }}>
            Forgot password? Or need new account activation? <br />
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
        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.5rem' }}>Associate Support Helpline:</div>
        <div style={{ color: '#2563eb', fontWeight: 700 }}>{COMPANY_INFO.phone}</div>
        <div style={{ color: '#64748b', fontSize: '0.82rem' }}>care@assuresecurities.in</div>
      </div>

      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <button 
          onClick={() => { alert('Redirecting to Assure Sub-broker CRM...'); onClose(); }}
          className="btn-primary" 
          style={{ flex: 1, padding: '0.75rem', justifyContent: 'center' }}
        >
          <span>Launch Partner CRM</span>
        </button>
        <button 
          onClick={onClose}
          className="btn-secondary" 
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
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
        <div style={{ background: '#ecfdf5', padding: '0.5rem', borderRadius: '10px' }}>
          <ShieldCheck size={22} color="#10b981" />
        </div>
        <h3 style={{ fontSize: '1.4rem', color: '#0f172a', fontWeight: 800 }}>Book Free Financial Consultation</h3>
      </div>
      <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '1.5rem' }}>
        Speak with an AMFI registered wealth expert from Assure Securities (ARN-182137). Zero fee, zero obligation.
      </p>

      {success ? (
        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
          <CheckCircle2 size={48} color="#10b981" style={{ margin: '0 auto 0.75rem auto' }} />
          <h4 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '0.4rem' }}>Consultation Scheduled!</h4>
          <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '1.5rem' }}>
            Our Lucknow advisory desk will call you at <strong>{phone}</strong> to understand your goals.
          </p>
          <button onClick={onClose} className="btn-secondary" style={{ padding: '0.6rem 1.5rem' }}>
            Done
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '0.35rem' }}>Your Name *</label>
            <input 
              type="text" 
              required 
              placeholder="e.g. Ramesh Chandra"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '10px', border: '1px solid #cbd5e1' }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '0.35rem' }}>Mobile Number *</label>
            <input 
              type="tel" 
              required 
              placeholder="10-digit Mobile"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '10px', border: '1px solid #cbd5e1' }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '0.35rem' }}>Primary Goal</label>
            <select 
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '10px', border: '1px solid #cbd5e1', background: '#ffffff' }}
            >
              <option value="SIP & Wealth Building">SIP & Wealth Building</option>
              <option value="Retirement Corpus Planning">Retirement Corpus Planning</option>
              <option value="Child Education Fund">Child Education Fund</option>
              <option value="Corporate Fixed Deposits (AAA)">Corporate Fixed Deposits (AAA)</option>
              <option value="Tax Saving ELSS & 80C">Tax Saving ELSS & 80C</option>
              <option value="PMS / AIF Portfolio Review">PMS / AIF Portfolio Review</option>
            </select>
          </div>

          <button type="submit" className="btn-emerald" style={{ width: '100%', padding: '0.85rem', justifyContent: 'center' }}>
            <span>Confirm Advisory Appointment</span>
          </button>
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
