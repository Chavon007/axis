interface ReceiptProps {
  roomId: string;
  checkInDate: string;
  checkOutDate: string;
  fullName: string;
  hotelName: string;
  roomName: string;
  total: string;
  qrCodeBase64?: string;
}

const GenerateReceiptHtml = ({
  roomId = "",
  checkInDate = "",
  checkOutDate = "",
  fullName = "",
  hotelName = "",
  roomName = "",
  total = "",
  qrCodeBase64,
}: ReceiptProps): string => {
  const qrBlock = qrCodeBase64
    ? '<img src="data:image/png;base64,' + qrCodeBase64 + '" alt="QR Code" style="width:74px;height:74px;border-radius:6px;" />'
    : '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;">'
    + '<svg viewBox="0 0 24 24" fill="none" stroke="#9b8f85" stroke-width="1.5" style="width:32px;height:32px;opacity:0.35;">'
    + '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>'
    + '<rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="3" height="3"/>'
    + '<rect x="18" y="14" width="3" height="3"/><rect x="14" y="18" width="3" height="3"/>'
    + '<rect x="18" y="18" width="3" height="3"/>'
    + '</svg>'
    + '<span style="font-size:9px;letter-spacing:1px;text-transform:uppercase;color:#9b8f85;">QR Code</span>'
    + '</div>';

  const css = [
    '* { margin: 0; padding: 0; box-sizing: border-box; }',
    'body { font-family: Georgia, serif; background-color: #0a0a0a; min-height: 100vh;',
    '  display: flex; align-items: center; justify-content: center; padding: 32px 16px; }',
    '.receipt { background: #141414; width: 100%; max-width: 420px; margin: 0 auto;',
    '  border-radius: 20px; overflow: hidden; border: 1px solid #2a2a2a; }',

    // Header
    '.receipt__header { background: linear-gradient(135deg, #0a0a0a 0%, #111111 60%, #1a1a1a 100%);',
    '  padding: 36px 28px 28px; text-align: center; position: relative;',
    '  border-bottom: 1px solid #2a2a2a; }',
    '.check-icon { display: inline-flex; align-items: center; justify-content: center;',
    '  width: 52px; height: 52px; border-radius: 50%;',
    '  background: rgba(34,197,94,0.12); border: 2px solid rgba(34,197,94,0.35); margin-bottom: 14px; }',
    '.check-icon svg { width: 26px; height: 26px; }',
    '.receipt__header h2 { font-size: 22px; font-weight: 600; color: #ffffff;',
    '  letter-spacing: 0.3px; margin-bottom: 6px; }',
    '.receipt__header p { font-size: 12px; color: rgba(255,255,255,0.4);',
    '  letter-spacing: 1.5px; text-transform: uppercase; }',

    // Room Code
    '.receipt__code-card { padding: 28px 28px 24px; border-bottom: 1px dashed #2a2a2a; }',
    '.code-label { font-size: 10px; font-weight: 500; letter-spacing: 2px;',
    '  text-transform: uppercase; color: #C9A84C; margin-bottom: 6px; }',
    '.code-value { font-size: 26px; font-weight: 700; color: #f5c842;',
    '  letter-spacing: 4px; margin-bottom: 6px; }',
    '.code-dates { font-size: 12px; color: #666666; }',
    '.qr-wrapper { margin-top: 18px; display: inline-flex; align-items: center;',
    '  justify-content: center; width: 90px; height: 90px; background: #1e1e1e;',
    '  border: 1.5px dashed #333333; border-radius: 12px; }',

    // Details
    '.receipt__details { padding: 24px 28px 28px; }',
    '.details-label { font-size: 10px; font-weight: 500; letter-spacing: 2px;',
    '  text-transform: uppercase; color: #C9A84C; margin-bottom: 16px; }',
    '.detail-row { display: flex; justify-content: space-between; align-items: flex-start;',
    '  padding: 11px 0; border-bottom: 1px solid #1e1e1e; }',
    '.detail-row:last-child { border-bottom: none; padding-bottom: 0; }',
    '.detail-key { font-size: 13px; color: #666666; font-weight: 400; }',
    '.detail-value { font-size: 13px; color: #e0e0e0; font-weight: 500;',
    '  text-align: right; max-width: 60%; }',
    '.detail-row--total { margin-top: 12px; padding: 14px 16px;',
    '  background: #1e1e1e; border-radius: 10px; border-bottom: none;',
    '  border: 1px solid #333333; }',
    '.detail-row--total .detail-key { color: #999999; font-weight: 500; }',
    '.detail-row--total .detail-value { color: #f5c842; font-size: 15px; font-weight: 700; }',

    // Footer
    '.receipt__footer { background: #0f0f0f; padding: 14px 28px;',
    '  text-align: center; border-top: 1px solid #1e1e1e; }',
    '.receipt__footer p { font-size: 11px; color: #444444; letter-spacing: 0.3px; }',
  ].join(' ');

  const html = '<!DOCTYPE html>'
    + '<html lang="en">'
    + '<head>'
    + '<meta charset="UTF-8" />'
    + '<meta name="viewport" content="width=device-width, initial-scale=1.0" />'
    + '<title>Booking Receipt</title>'
    + '<style>' + css + '</style>'
    + '</head>'
    + '<body>'
    + '<div class="receipt">'

    // Header
    + '<div class="receipt__header">'
    + '<div class="check-icon">'
    + '<svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">'
    + '<polyline points="20 6 9 17 4 12" />'
    + '</svg>'
    + '</div>'
    + '<h2>Booking Confirmed</h2>'
    + '<p>Show this code at check-in</p>'
    + '</div>'

    // Room Code
    + '<div class="receipt__code-card">'
    + '<p class="code-label">Room Code</p>'
    + '<p class="code-value">' + roomId + '</p>'
    + '<p class="code-dates">' + checkInDate + ' &rarr; ' + checkOutDate + '</p>'
    + '<div class="qr-wrapper">' + qrBlock + '</div>'
    + '</div>'

    // Details
    + '<div class="receipt__details">'
    + '<p class="details-label">Booking Details</p>'
    + '<div class="detail-row"><span class="detail-key">Guest</span><span class="detail-value">' + fullName + '</span></div>'
    + '<div class="detail-row"><span class="detail-key">Hotel</span><span class="detail-value">' + hotelName + '</span></div>'
    + '<div class="detail-row"><span class="detail-key">Room</span><span class="detail-value">' + roomName + '</span></div>'
    + '<div class="detail-row"><span class="detail-key">Check-in</span><span class="detail-value">' + checkInDate + ' &ndash; ' + checkOutDate + '</span></div>'
    + '<div class="detail-row detail-row--total"><span class="detail-key">Total Paid</span><span class="detail-value">' + total + '</span></div>'
    + '</div>'

    // Footer
    + '<div class="receipt__footer">'
    + '<p>Thank you for your booking &mdash; we look forward to your stay.</p>'
    + '</div>'

    + '</div>'
    + '</body>'
    + '</html>';

  return html;
};

export default GenerateReceiptHtml;