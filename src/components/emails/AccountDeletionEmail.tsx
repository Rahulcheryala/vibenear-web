import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components';
import * as React from 'react';

interface AccountDeletionEmailProps {
  phoneNumber: string;
  reasons: string[];
  submissionDate: string;
}

export const AccountDeletionEmail = ({
  phoneNumber,
  reasons,
  submissionDate,
}: AccountDeletionEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Account Deletion Request from {phoneNumber}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header Section */}
          <Section style={headerSection}>
            <Heading style={h1}>Account Deletion Request</Heading>
            <Text style={subtitleText}>
              A user has requested to delete their account and all associated data
            </Text>
          </Section>

          {/* Submission Info */}
          <Section style={infoSection}>
            <Text style={infoText}>
              <strong>📅 Submission Date:</strong> {new Date(submissionDate).toLocaleString()}
            </Text>
          </Section>

          <Hr style={hr} />

          {/* User Information */}
          <Section style={section}>
            <Heading style={h2}>User Information</Heading>
            <div style={infoBox}>
              <Text style={text}>
                <strong>Phone Number:</strong> {phoneNumber}
              </Text>
            </div>
          </Section>

          <Hr style={hr} />

          {/* Deletion Details */}
          <Section style={section}>
            <Heading style={h2}>Deletion Details</Heading>
            <Text style={text}><strong>Reasons for deletion:</strong></Text>
            <div style={reasonsList}>
              {reasons.map((reason, index) => (
                <div key={index} style={reasonItem}>
                  <span style={bulletPoint}>•</span>
                  <Text style={reasonText}>{reason}</Text>
                </div>
              ))}
            </div>
          </Section>

          <Hr style={hr} />

          {/* Action Required */}
          <Section style={warningSection}>
            <Heading style={h2}>⚠️ Action Required</Heading>
            <Text style={warningText}>
              Please process this account deletion request according to company policy.
              This action will permanently remove all user data and cannot be undone.
            </Text>
            <div style={actionBox}>
              <Text style={actionText}>
                <strong>Next Steps:</strong>
              </Text>
              <Text style={actionText}>1. Verify user identity</Text>
              <Text style={actionText}>2. Export data if requested</Text>
              <Text style={actionText}>3. Process deletion request</Text>
            </div>
          </Section>

          {/* Footer */}
          <Section style={footerSection}>
            <Text style={footerText}>
              This is an automated notification from VibeNear Support System
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Enhanced Styles
const main = {
  backgroundColor: '#f8fafc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  margin: 0,
  padding: 0,
};

const container = {
  backgroundColor: '#ffffff',
  margin: '20px auto',
  maxWidth: '600px',
  borderRadius: '12px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  overflow: 'hidden',
};

const headerSection = {
  backgroundColor: '#FF5E5B',
  color: '#ffffff',
  padding: '32px 24px',
  borderRadius: '12px 12px 0 0',
  textAlign: 'center' as const,
};

const h1 = {
  color: '#ffffff',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '0 0 12px 0',
  textAlign: 'center' as const,
};

const subtitleText = {
  color: '#ffffff',
  fontSize: '16px',
  margin: '0',
  textAlign: 'center' as const,
  lineHeight: '1.5',
};

const infoSection = {
  padding: '24px',
  backgroundColor: '#f8fafc',
  borderBottom: '1px solid #e2e8f0',
};

const infoText = {
  color: '#374151',
  fontSize: '16px',
  margin: '0',
  fontWeight: '500',
  lineHeight: '1.5',
};

const section = {
  padding: '24px',
};

const h2 = {
  color: '#1f2937',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '0 0 16px 0',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

const infoBox = {
  backgroundColor: '#f3f4f6',
  padding: '16px',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
};

const reasonsList = {
  marginTop: '16px',
  padding: '0',
};

const reasonItem = {
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: '12px',
  padding: '0',
};

const bulletPoint = {
  color: '#dc2626',
  fontSize: '18px',
  fontWeight: 'bold',
  marginRight: '12px',
  marginTop: '2px',
  lineHeight: '1',
};

const reasonText = {
  color: '#374151',
  fontSize: '15px',
  margin: '0',
  lineHeight: '1.6',
  fontWeight: '500',
  flex: '1',
};

const text = {
  color: '#374151',
  fontSize: '15px',
  margin: '8px 0',
  lineHeight: '1.6',
};

const hr = {
  border: 'none',
  borderTop: '1px solid #e5e7eb',
  margin: '0',
};

const warningSection = {
  backgroundColor: '#fef3c7',
  padding: '24px',
  borderTop: '1px solid #f59e0b',
  borderBottom: '1px solid #f59e0b',
};

const warningText = {
  color: '#92400e',
  fontSize: '16px',
  margin: '0 0 20px 0',
  lineHeight: '1.6',
  fontWeight: '500',
};

const actionBox = {
  backgroundColor: '#ffffff',
  padding: '20px',
  borderRadius: '8px',
  border: '1px solid #f59e0b',
};

const actionText = {
  color: '#92400e',
  fontSize: '15px',
  margin: '8px 0',
  lineHeight: '1.5',
  fontWeight: '500',
};

const footerSection = {
  padding: '20px 24px',
  backgroundColor: '#f8fafc',
  textAlign: 'center' as const,
  borderTop: '1px solid #e2e8f0',
};

const footerText = {
  color: '#6b7280',
  fontSize: '14px',
  margin: '0',
  fontStyle: 'italic',
};
