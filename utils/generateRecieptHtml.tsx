const GenerateRecieptHtml = () => {
  return `
    <html>
      <body>
        <div>
          <Ionicons name="checkmark-circle" size={20} color="#22c55e" />
          <h2>Booking Confirmed</h2>
          <p>Show this code at check-in</p>
        </div>

        <div>
          <div>
            <h4>Room Code</h4>
            <div>
              <p>{roomId}</p>
              <p>
                {checkInDate} - {checkOutDate}
              </p>
              <div>
                <p>QR Code</p>
              </div>
            </div>
          </div>
        </div>

        <div>
            <div>
                <h4>Booking Details</h4>

                <div>
                    <div>
                        <p><span>Guest</span> <span>{fullName}</span></p>
                    </div>
                    <div>
                        <p><span>Hotel</span> <span>{hotelName}</span></p>
                    </div>
                    <div>
                        <p><span>Room</span> <span>{roomName}</span></p>
                    </div>
                    <div>
                        <p><span>Check-in</span> <span>{checkInDate} - {checkOutDate}}</span></p>
                    </div>
                    <div>
                        <p><span>Amount</span> <span>{total}</span></p>
                    </div>
                </div>
            </div>
        </div>
      </body>
    </html>`;
};

export default GenerateRecieptHtml;
