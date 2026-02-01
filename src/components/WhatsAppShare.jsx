import { useRef, useState } from 'react';
import html2canvas from 'html2canvas'; // You need to install this: npm install html2canvas
import './WhatsAppShare.css';
import { useLanguage } from '../context/LanguageContext';

const WhatsAppShare = ({ verse, reference }) => {
  const { t } = useLanguage();
  const cardRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Function to wrap text
  const wrapText = (ctx, text, x, y, maxWidth, lineHeight) => {
    const words = text.split(' ');
    let line = '';
    let currentY = y;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      consttestWidth = metrics.width;
      if (metrics.width > maxWidth && n > 0) {
        ctx.fillText(line, x, currentY);
        line = words[n] + ' ';
        currentY += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, currentY);
  };

  const generateStatusImage = async () => {
    setIsGenerating(true);
    
    // Create a temporary canvas for high-quality rendering
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // WhatsApp Status Dimensions (1080x1920)
    canvas.width = 1080;
    canvas.height = 1920;
    
    // Background - Dark Gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, 1920);
    gradient.addColorStop(0, '#0f0f13');
    gradient.addColorStop(1, '#1a1005');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1080, 1920);

    // Decorative Elements - Top Glow
    const glow = ctx.createRadialGradient(540, 0, 0, 540, 0, 800);
    glow.addColorStop(0, 'rgba(255, 165, 0, 0.2)');
    glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, 1080, 1000);

    // Branding - "Let the Truth be Known"
    ctx.font = 'bold 60px "Inter", sans-serif';
    ctx.fillStyle = '#FFD700'; // Gold color
    ctx.textAlign = 'center';
    ctx.fillText('LET THE TRUTH BE KNOWN', 540, 200);

    // Verse Text
    ctx.font = '500 70px "Georgia", serif';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    // Simple word wrap (approximate centered block)
    const maxWidth = 900;
    const lineHeight = 100;
    const x = 540;
    const y = 600;
    
    wrapText(ctx, '"' + verse + '"', x, y, maxWidth, lineHeight);

    // Reference
    ctx.font = 'italic 50px "Inter", sans-serif';
    ctx.fillStyle = '#FFA500'; // Orange
    ctx.fillText('— ' + reference, 540, 1400);

    // Footer - URL
    ctx.font = '40px "Inter", sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.fillText('www.letthetruthbknown.com', 540, 1800);

    // Convert to Image
    const dataUrl = canvas.toDataURL('image/png');
    
    // Trigger Download
    const link = document.createElement('a');
    link.download = `truth-status-${Date.now()}.png`;
    link.href = dataUrl;
    link.click();
    
    setIsGenerating(false);
  };

  const shareToWhatsApp = () => {
    const text = `*${verse}*\n\nRead more at: https://letthetruthbknown.com`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="whatsapp-share-container">
      <h4>{t('common.shareToWhatsApp') || 'Share to WhatsApp'}</h4>
      <div className="whatsapp-buttons">
        <button 
          className="btn-status" 
          onClick={generateStatusImage}
          disabled={isGenerating}
        >
          {isGenerating ? 'Generating...' : '🖼️ Download Status Image'}
        </button>
        <button className="btn-chat" onClick={shareToWhatsApp}>
          💬 Share with Friends
        </button>
      </div>
    </div>
  );
};

export default WhatsAppShare;
